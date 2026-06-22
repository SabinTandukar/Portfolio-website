import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Cube() {
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

const Scene = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[1, 2, 3]} />

      <Cube />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
