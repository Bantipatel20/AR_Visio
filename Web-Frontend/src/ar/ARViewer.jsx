import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import Model from "./Model";

export default function ARViewer({ modelUrl, scale = 0.3, rotationY = 0, color = "#ffffff" }) {
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 2, 2]} intensity={1} />
          <Model url={modelUrl} scale={scale} rotationY={rotationY} color={color} />
        </XR>
      </Canvas>
    </>
  );
}
