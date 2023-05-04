import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {storage} from "../base";
import {ref, getBytes} from "firebase/storage";
import {useEffect, useState} from "react";

const loader = new GLTFLoader();
let file = '';
export function Model({filename}) {
    const [model, setModel] = useState(null);
    const [arrBuff, setArrBuff] = useState(null);

    if (file !== filename) {
        file = filename;

        getBytes(ref(storage, `gs://ui-cardiopedia.appspot.com/models/${file}`))
            .then((buffer) => {
                setArrBuff(buffer);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        if (arrBuff != null) {
            loader.parse(arrBuff, "", (gltf) => {
                setModel(gltf.scene);
            });
        }
    });

    if (model != null) {
        return <primitive object={model} scale={10}/>
    }
}
