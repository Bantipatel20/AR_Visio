import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Model({ url, scale = 1, rotationY = 0, color = "#ffffff" }) {
  const { scene } = useGLTF(url);

  useEffect(() => {
    // Apply color to all meshes
    scene.traverse((child) => {
      if (child.isMesh) {
        if (!child.material) {
          child.material = new THREE.MeshPhongMaterial();
        } else if (child.material.clone) {
          child.material = child.material.clone();
        }
        child.material.color = new THREE.Color(color);
      }
    });

    // Apply scale and rotation
    scene.scale.set(scale, scale, scale);
    scene.rotation.y = THREE.MathUtils.degToRad(rotationY);
  }, [scene, scale, rotationY, color]);

  return <primitive object={scene} />;
}
