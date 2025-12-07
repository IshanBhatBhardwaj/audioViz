import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { vertexShader } from "../shaders/vertexShader";
import { fragmentShader } from "../shaders/fragmentShader";
import * as THREE from "three";

function PulseShader() {
  const materialRef = useRef();

  // Update the shader uniform "uTime" every frame
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={{
          uTime: { value: 0 },
          uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
        }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  );
}

export default function FullscreenShader() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: -1 }}>
      <Canvas>
        <PulseShader />
      </Canvas>
    </div>
  );
}
