import { useState, Suspense } from 'react'
import './App.css'

import { Canvas } from '@react-three/fiber'
import { ContactShadows, Environment, OrbitControls } from '@react-three/drei'
import Cube from '../public/Cube'

function App() {

  return (
    <>
      <Canvas>
        <ambientLight />
        <OrbitControls enableZoom={false} />

        <Suspense fallback={null}>
          <Cube />
        </Suspense>

        <Environment preset='sunset' />
        <ContactShadows opacity={.5} scale={10} blur={1} far={10} resolution={256} position={[0, -1, 0]} />
      </Canvas>
    </>
  )
}

export default App
