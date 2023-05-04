import './App.css';
import {Model} from "./components/mod-view";
import {Canvas} from "@react-three/fiber";
import {Suspense, useRef, useState} from "react";
import {OrbitControls, Text} from "@react-three/drei";

function App() {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const [value, setValue] = useState('16_TAPVRtoCS_Labeled.gltf');
    const handleChange = (event) => {
        setValue(event.target.value);
    };

  return (
    <div className="App">
        <select value={value} onChange={handleChange}>
            <option value="16_TAPVRtoCS_Labeled.gltf">16_TAPVRtoCS_Labeled.gltf</option>
            <option value="133_TAPVRIC_Labeled.gltf">133_TAPVRIC_Labeled.gltf</option>
            <option value="113_LPASling_Unlabeled.gltf">113_LPASling_Unlabeled.gltf</option>
            <option value="105_BerrySyndrome_Unlabeled.gltf">105_BerrySyndrome_Unlabeled.gltf</option>
        </select>
        <Canvas style={{
            height: windowSize.current[1],
            width: windowSize.current[0],
        }}>
          <directionalLight position={[10, 10, 5]} intensity={2} />
          <directionalLight position={[-10, -10, -5]} intensity={1} />
          <OrbitControls />
            <Suspense fallback={null}>
                <Model filename={value}/>
            </Suspense>
        </Canvas>
    </div>
  );
}

export default App;
