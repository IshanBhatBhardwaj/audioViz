import { useRef, useMemo, useEffect } from 'react'
import { useThree, useFrame } from '@react-three/fiber'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import {RoundedBoxGeometry } from '@react-three/drei';
import {gsap} from 'gsap';


const RotatingBox = ({offset, velocity, soundKey, up, down, left, right, setCollisions}) => {    

    const { viewport } = useThree();

    const meshRef = useRef();
    const rigidBodyRef = useRef();
    const colorRef = useRef()
    const colorData = useRef({ color: '#FFFDD0' })

    const boxsize = useMemo(() => Math.max(viewport.width * 0.1, 0.5), [viewport.width])
    const impulseScale = 0.85 * boxsize

    const randomSign = () => Math.round(Math.random()) * 2 - 1
    const x = viewport.width / 4 * offset

    const colors = [[255, 105, 97], [255, 212, 38], [48, 219, 91], [122, 215, 255], [218, 143, 255], [255, 100, 130]]

    useFrame(() => {
          // Update the material color in the useFrame loop
          if (colorRef.current) {
              colorRef.current.color.set(colorData.current.color);
          }
      });

    const changeColor = (cubeRef) => {
      if (!cubeRef.current) return

      const randIdx = Math.floor(Math.random() * colors.length)
      const randColor = colors[randIdx].join()

      gsap.to(colorData.current, {
          color: `rgb(${randColor})`,
          duration: 0.5,
          yoyo: true
      });
    }

    const handleKeyDown = (e) => {
      const applyRandomImpulse = () => {
        const impulse = 
          { 
            x: randomSign() * impulseScale,
            y: randomSign() *  impulseScale, 
            z: randomSign() * impulseScale
          }
        rigidBodyRef.current.applyImpulse(impulse, true)
      }

      const applyUpImpulse = () => {
        const impluse = {
          x: 0, 
          y: impulseScale, 
          z: 0
        }
        rigidBodyRef.current.applyImpulse(impluse)
      }

      const applyDownImpulse = () => {
        const impluse = {
          x: 0, 
          y: -1 * impulseScale,
          z: 0
        }
        rigidBodyRef.current.applyImpulse(impluse)
      }

      const applyLeftImpulse = () => {
        const impluse = {
          x: -1 * impulseScale,
          y: 0, 
          z: 0
        }
        rigidBodyRef.current.applyImpulse(impluse)
      }

      const applyRightImpulse = () => {
        const impluse = {
          x: impulseScale, 
          y: 0, 
          z: 0
        }
        rigidBodyRef.current.applyImpulse(impluse)
      }

      let key
      if (e.type === 'keydown') {
        key = e.key
      } else {
        key = e.target.textContent.toLowerCase()
      }

      if (key === up.toLowerCase()) {
        applyUpImpulse()
        return
      }

      else if (key === down.toLowerCase()) {
        applyDownImpulse()
      }

      else if (key === left.toLowerCase()) {
        applyLeftImpulse()
      }

      else if (key === right.toLowerCase()) {
        applyRightImpulse()
      }
      
      else {
        const impulses = [applyRandomImpulse, applyUpImpulse, applyDownImpulse, applyLeftImpulse, applyRightImpulse]
        const randIdx = Math.floor(Math.random() * impulses.length)
        impulses[randIdx]()
      }
    }

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown)
      document.addEventListener('mousedown', handleKeyDown)

      return (() => {
        document.removeEventListener('keydown', handleKeyDown)
        document.removeEventListener('mousedown', handleKeyDown)
      })
    })

    return (
      <RigidBody 
        ref={rigidBodyRef} 
        position={[x, 0, 0]} 
        restitution={1}
        linearVelocity={velocity}
        colliders={false}
        name={'rect'}
        onCollisionEnter={({ other }) => {
    
          if (other.rigidBodyObject.name === 'rect') {
            setCollisions((prev) => prev + 0.5)
            changeColor(meshRef)
          }
      }}
      >
        <CuboidCollider args={[0.5 * boxsize, 0.5 * boxsize, 0.5 * boxsize]} />
        <mesh ref={meshRef} scale={boxsize}>
          <RoundedBoxGeometry args={[1,1,1]} radius={0.1}/>
          <meshStandardMaterial ref={colorRef} color={colorData?.current.color}/>
        </mesh>
      </RigidBody>

    )
}

export default RotatingBox;