import React, { useState } from 'react';
import ARViewer from '../ar/ARViewer';
import Viewer3D from '../ar/Viewer3D';
import Controls from '../ar/Controls';
import './ARPage.css';

export default function ARPage() {
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [color, setColor] = useState('#ffffff');
  const [viewMode, setViewMode] = useState('3d'); // 'ar' or '3d'

  // Sample model URL - replace with actual model
  const modelUrl = 'https://models.readyplayer.me/63d4eb5210e1d6d6c33199e5.glb';

  const handleReset = () => {
    setScale(1);
    setRotation(0);
    setColor('#ffffff');
  };

  const isARSupported = typeof navigator !== 'undefined' && navigator.xr;

  return (
    <div className="ar-page">
      <div className="ar-header">
        <h1>AR Object Viewer</h1>
        <div className="view-toggle">
          <button
            className={`toggle-btn ${viewMode === '3d' ? 'active' : ''}`}
            onClick={() => setViewMode('3d')}
          >
            3D View
          </button>
          {isARSupported && (
            <button
              className={`toggle-btn ${viewMode === 'ar' ? 'active' : ''}`}
              onClick={() => setViewMode('ar')}
            >
              AR View
            </button>
          )}
        </div>
      </div>

      <div className="ar-container">
        {viewMode === '3d' || !isARSupported ? (
          <Viewer3D
            modelUrl={modelUrl}
            scale={scale}
            rotationY={rotation}
            color={color}
          />
        ) : (
          <ARViewer
            modelUrl={modelUrl}
            scale={scale}
            rotationY={rotation}
            color={color}
          />
        )}

        <Controls
          scale={scale}
          setScale={setScale}
          rotation={rotation}
          setRotation={setRotation}
          color={color}
          setColor={setColor}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}
