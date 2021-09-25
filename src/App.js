import React from 'react'; 
import { Physics } from 'use-cannon';

function App() {
  return (
    <Canvas>
      <Sky sunPosition={new Vector3(100, 10, 100)}/>
      <ambientLight intensity={0.3}/>
      <pointLight castShadow intensity={0.8} position={[100, 100, 100]}/>
      <Physics>
        <Ground/>
        <Player/>
      </Physics>
    </Canvas>
  );
}

export default App;
