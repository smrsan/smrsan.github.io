import { usePlane } from "@react-three/cannon";
import * as THREE from "three";

const GroundModel = (props) => {
    const [groundRef] = usePlane(() => ({
        rotation: [Math.PI / -2, 0, 0],
        position: [0, 0, 0],
        ...props,
    }));

    return (
        <mesh
            ref={groundRef}
            receiveShadow
            material={new THREE.MeshStandardMaterial({ color: 0x252134 })}
            geometry={new THREE.PlaneGeometry(20, 20)}
        />
    );
};

export default GroundModel;
