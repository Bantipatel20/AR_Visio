import React from 'react';
import './Controls.css';

export default function Controls({
  scale,
  setScale,
  rotation,
  setRotation,
  color,
  setColor,
  onReset,
}) {
  return (
    <div className="controls-panel">
      <h3 className="controls-title">Customize Object</h3>

      <div className="control-group">
        <label className="control-label">
          <span className="control-name">Scale</span>
          <input
            type="range"
            min="0.2"
            max="3"
            step="0.1"
            value={scale}
            onChange={(e) => setScale(parseFloat(e.target.value))}
            className="control-input"
          />
          <span className="control-value">{scale.toFixed(1)}x</span>
        </label>
      </div>

      <div className="control-group">
        <label className="control-label">
          <span className="control-name">Rotate Y</span>
          <input
            type="range"
            min="0"
            max="360"
            step="5"
            value={rotation}
            onChange={(e) => setRotation(parseFloat(e.target.value))}
            className="control-input"
          />
          <span className="control-value">{rotation.toFixed(0)}°</span>
        </label>
      </div>

      <div className="control-group">
        <label className="control-label">
          <span className="control-name">Color</span>
          <div className="color-picker-wrapper">
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="color-picker"
            />
            <span className="color-value">{color.toUpperCase()}</span>
          </div>
        </label>
      </div>

      <button onClick={onReset} className="btn-reset">
        Reset to Defaults
      </button>
    </div>
  );
}
