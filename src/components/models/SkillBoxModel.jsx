import * as THREE from "three";
import { useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { useMemo } from "react";

const SkillBoxModel = ({ position, rotation }) => {
    const texture = useTexture("/textures/html5.png");

    const boxSize = useMemo(() => [0.5, 0.5, 0.1], []);

    const [htmlModelRef] = useBox(() => ({
        mass: 1,
        position: position ?? [0, 3, 0],
        rotation: rotation ?? [Math.PI / -0.25, 0, 0],
        args: boxSize,
    }));

    return (
        <mesh
            ref={htmlModelRef}
            material={[
                new THREE.MeshStandardMaterial({ color: "black" }),
                new THREE.MeshStandardMaterial({ color: "black" }),
                new THREE.MeshStandardMaterial({ color: "black" }),
                new THREE.MeshStandardMaterial({ color: "black" }),
                new THREE.MeshStandardMaterial({ map: texture }),
                new THREE.MeshStandardMaterial({ map: texture }),
            ]}
            geometry={new THREE.BoxGeometry(...boxSize)}
        />
    );
};

useTexture.preload("/textures/html5.png");

export default SkillBoxModel;
