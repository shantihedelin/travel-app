import React, { useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { Sphere } from '@react-three/drei';
import { View, StyleSheet, Dimensions } from 'react-native';

const GlobeComponent = () => {
  const globeRef = useRef();
  const texture = useLoader(TextureLoader, 'https://threejsfundamentals.org/threejs/resources/images/earth.jpg');

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
};

const Globe = () => {
  return (
    <View style={styles.container}>
      <Canvas style={{ width: Dimensions.get('window').width, height: 300 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GlobeComponent />
      </Canvas>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300, // Justera höjden här om det behövs
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Globe;
