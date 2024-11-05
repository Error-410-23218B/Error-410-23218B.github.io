'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { createRoot } from 'react-dom/client';

const CubeFace = ({ position, rotation, color, children }) => (
  <mesh position={position} rotation={rotation}>
    <planeGeometry args={[1.9, 1.9]} />
    <meshBasicMaterial color={color} />
    <Html
      transform
      distanceFactor={1.5}
      position={[0, 0, 0.01]}
      rotation={[0, 0, 0]}
      style={{
        width: '300px',
        height: '300px',
        background: 'white',
        overflow: 'auto'
      }}
    >
      {children}
    </Html>
  </mesh>
)

const Cube = () => {
  const cubeRef = useRef()

  useFrame((state, delta) => {
    if (cubeRef.current) {
      cubeRef.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group ref={cubeRef}>
      {/* Front Face */}
      <CubeFace position={[0, 0, 0.95]} rotation={[0, 0, 0]} color="red">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Welcome to CubeTech</h1>
          <p className="mb-4">Explore our innovative solutions for your business needs.</p>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
            Learn More
          </button>
        </div>
      </CubeFace>

      {/* Back Face */}
      <CubeFace position={[0, 0, -0.95]} rotation={[0, Math.PI, 0]} color="blue">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-3 py-2 border rounded"
              rows={3}
            ></textarea>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </CubeFace>

      {/* Left Face */}
      <CubeFace position={[-0.95, 0, 0]} rotation={[0, -Math.PI / 2, 0]} color="green">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Our Products</h1>
          <ul className="space-y-2">
            <li className="p-2 bg-green-100 hover:bg-green-200 transition-colors rounded">
              CubeTech Pro
            </li>
            <li className="p-2 bg-green-100 hover:bg-green-200 transition-colors rounded">
              CubeTech Lite
            </li>
            <li className="p-2 bg-green-100 hover:bg-green-200 transition-colors rounded">
              CubeTech Enterprise
            </li>
          </ul>
        </div>
      </CubeFace>

      {/* Right Face */}
      <CubeFace position={[0.95, 0, 0]} rotation={[0, Math.PI / 2, 0]} color="yellow">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">About Us</h1>
          <p className="mb-4">CubeTech is a leading innovator in 3D web solutions.</p>
          <img
            src="/placeholder.svg?height=150&width=150"
            alt="Company Logo"
            className="mx-auto rounded"
          />
        </div>
      </CubeFace>

      {/* Top Face */}
      <CubeFace position={[0, 0.95, 0]} rotation={[-Math.PI / 2, 0, 0]} color="purple">
        <div className="p-4" style={{ transform: 'rotate(180deg)' }}>
          <h1 className="text-2xl font-bold mb-4">Blog</h1>
          <article className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Latest in 3D Web Tech</h2>
            <p className="text-sm text-gray-600 mb-2">Posted on May 15, 2024</p>
            <p>Discover the latest trends in 3D web technology and how they're shaping the future of the internet.</p>
          </article>
          <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors">
            Read More
          </button>
        </div>
      </CubeFace>

      {/* Bottom Face */}
      <CubeFace position={[0, -0.95, 0]} rotation={[Math.PI / 2, 0, 0]} color="orange">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Newsletter</h1>
          <p className="mb-4">Stay updated with our latest news and offers!</p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-2 border rounded"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </CubeFace>
    </group>
  )
}

export default function Component() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Cube />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

ReactDOM.render(React.createElement(App), document.getElementById('cube-root'));
