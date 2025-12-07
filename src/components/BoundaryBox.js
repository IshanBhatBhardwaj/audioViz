import { useRef } from 'react'
import { useThree } from '@react-three/fiber'
import { RigidBody } from '@react-three/rapier'


function Boundaries() {

  const { viewport } = useThree();

  const meshRef = useRef();

  const vWidth = viewport.width
  const vHeight = viewport.height
  const depth = 2.5

  return (
    <>
      {/* Floor */}
      <RigidBody type="fixed" colliders="cuboid" position={[0, -vHeight / 2, 0]}>
        <mesh ref={meshRef}>
          <boxGeometry args={[vWidth, 0.1, depth]} />
          <meshBasicMaterial transparent opacity={0}/>
        </mesh>
      </RigidBody>

      {/* roof */}
      <RigidBody type="fixed"  position={[0, vHeight / 2, 0]}>
        <mesh>
          <boxGeometry args={[vWidth, 0.1, depth]} />
          <meshBasicMaterial transparent opacity={0}/>
        </mesh>
      </RigidBody>

      {/* Left Wall */}
      <RigidBody type="fixed" position={[-vWidth / 2, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.1, vHeight, depth]} />
          <meshBasicMaterial transparent opacity={0}/>
        </mesh>
      </RigidBody>

      {/* Right Wall */}
      <RigidBody type="fixed" position={[vWidth / 2, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.1, vHeight, depth]} />
          <meshBasicMaterial transparent opacity={0}/>
        </mesh>
      </RigidBody>

      {/*front face*/}
      <RigidBody type="fixed" position={[0, 0, depth+0.5]}>
        <mesh>
          <boxGeometry args={[vWidth, vHeight, depth]} />
          <meshBasicMaterial transparent opacity={0}/>
        </mesh>
      </RigidBody>

      {/*back face*/}
      <RigidBody type="fixed" position={[0, 0, -depth-0.5]}>
        <mesh>
          <boxGeometry args={[vWidth, vHeight, depth]} />
          <meshBasicMaterial transparent opacity={0}/>
        </mesh>
      </RigidBody>
    </>
  )
}

export default Boundaries;
