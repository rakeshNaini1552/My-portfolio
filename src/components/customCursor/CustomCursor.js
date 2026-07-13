import React, {useEffect, useRef, useState} from "react";
import "./CustomCursor.scss";

/**
 * A glowing dot + trailing ring that follows the mouse. The ring
 * expands when hovering anything clickable. Only rendered for
 * fine-pointer devices (no touch screens) and skipped when the
 * visitor prefers reduced motion.
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reducedMotion) {
      return;
    }
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }
    const dot = dotRef.current;
    const ring = ringRef.current;
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId;

    const onMove = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const onOver = e => {
      const interactive = e.target.closest(
        "a, button, input, label, .project-tag, .tilt-card"
      );
      document.body.classList.toggle("cursor-hover", Boolean(interactive));
    };

    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(animateRing);
    };

    window.addEventListener("mousemove", onMove, {passive: true});
    window.addEventListener("mouseover", onOver, {passive: true});
    rafId = requestAnimationFrame(animateRing);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId);
      document.body.classList.remove("cursor-hover");
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true">
        <span className="cursor-ring-circle" />
      </div>
    </>
  );
}
