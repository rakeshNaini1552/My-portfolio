import React from "react";
import "./AuroraBackground.scss";

/**
 * Fixed full-viewport backdrop: three slowly drifting aurora color
 * fields over a faint dot grid. Sits behind all content; colors are
 * tuned separately for light and dark themes via the .dark-mode
 * ancestor class.
 */
export default function AuroraBackground() {
  return (
    <div className="aurora-bg" aria-hidden="true">
      <div className="aurora-blob aurora-blob-1" />
      <div className="aurora-blob aurora-blob-2" />
      <div className="aurora-blob aurora-blob-3" />
      <div className="aurora-grid" />
    </div>
  );
}
