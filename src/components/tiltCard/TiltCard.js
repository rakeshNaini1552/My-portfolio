import React, {useRef} from "react";
import "./TiltCard.scss";

/**
 * Wraps any card in a 3D tilt-on-hover effect with a mouse-tracking
 * glow. Pass the card's own classes through `className` so the
 * original layout styles keep applying to the same element.
 */
export default function TiltCard({children, className = "", max = 7}) {
  const ref = useRef(null);

  const handleMove = e => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--tilt-x", `${((0.5 - y) * max).toFixed(2)}deg`);
    el.style.setProperty("--tilt-y", `${((x - 0.5) * max).toFixed(2)}deg`);
    el.style.setProperty("--glow-x", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--glow-y", `${(y * 100).toFixed(1)}%`);
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) {
      return;
    }
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
      <span className="tilt-card-glow" aria-hidden="true" />
    </div>
  );
}
