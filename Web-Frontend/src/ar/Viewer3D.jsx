import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

export default function Viewer3D({ modelUrl, scale = 1, rotationY = 0, color = "#ffffff" }) {
  return (
    <Canvas camera={{ position: [0, 1, 3] }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} intensity={1} />
      <OrbitControls />
      <Model url={modelUrl} scale={scale} rotationY={rotationY} color={color} />
    </Canvas>
  );
}
