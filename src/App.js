import { Suspense, useEffect, useState, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import {OrthographicCamera } from '@react-three/drei';
import RotatingBox from './components/RotatingBox';
import PlayExample from './components/PlayExample';
import Boundaries from './components/BoundaryBox'
import KeyBoard from './components/KeyBoard';
import useSound from './hooks/useSound';
import Title from './components/Title'
export default function App() {

  const [collisions, setCollisions] = useState(0)
  const keyRefs = useRef({})
  const backgroundRef = useRef()
  const kanyeRef = useRef()
  const debouncedFunctionForKey = {}

  const soundMap = useSound();
  const handleKeyPress = (e) => {
    if (e.key in soundMap) {
      const sound = soundMap[e.key]

      if (sound.playing()) {sound.stop()}
      sound.play()
    }
  }
  
  const handleMouseDown = (e) => {
    if (e.target.textContent.toLowerCase() in soundMap) {
          soundMap[e.target.textContent.toLowerCase()].play()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress)
    document.addEventListener('mousedown', handleMouseDown)

    return (() => {
      document.removeEventListener('keydown', handleKeyPress)
      document.removeEventListener('mousedown', handleMouseDown)
    })
  })

  return (
      <div className="parentContainer" ref={backgroundRef}>
          <Title colide={collisions}/>
          <div className="cubeContainer">
            <Canvas>
              <Suspense>
                <Physics gravity={[0,0,0]}>
                  <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={150} />
                  <ambientLight intensity={0.5} />
                  <directionalLight position={[3, 3, 3]} />
                  {/** TO DO: Change velocity to be relative to viewport size */}
                  <RotatingBox 
                    offset={1} 
                    velocity={[1.5,1,0]} 
                    soundKey={'g'} 
                    up={'q'}
                    down={'w'}
                    left={'e'}
                    right={'r'}
                    setCollisions={setCollisions}
                  />
                  <RotatingBox 
                    offset={-1} 
                    velocity={[-1, 1.5, 0]} 
                    soundKey={'f'} 
                    up={'u'}
                    down={'i'}
                    left={'o'}
                    right={'p'}
                    setCollisions={setCollisions}
                  />
                  <Boundaries/>
                </Physics>
              </Suspense>
            </Canvas>
          </div>
          <KeyBoard keyRefs={keyRefs} debouncedFunctionForKey={debouncedFunctionForKey}/>
          <PlayExample keyRefs={keyRefs} debouncedFunctionForKey={debouncedFunctionForKey} backgroundRef={backgroundRef} kanyeRef={kanyeRef}/>
          <div className='kanyeText' ref={kanyeRef}></div>
      </div>
  )
}
