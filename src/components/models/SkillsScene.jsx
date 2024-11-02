import { useMemo } from "react";
import * as THREE from "three";
import { PerspectiveCamera } from "@react-three/drei";

import SkillBoxModel from "./SkillBoxModel";
import GroundModel from "./GroundModel";
import { Physics } from "@react-three/cannon";

const SkillsScene = () => {
    return (
        <Physics
            {...{
                gravity: [0, -1, 0],
                isPaused: false,
            }}
        >
            <PerspectiveCamera
                makeDefault
                position={new THREE.Vector3(0, 5, 7)}
                rotation={[Math.PI * -0.25, 0, 0]}
            />
            <ambientLight intensity={Math.PI * 1} color={"white"} />
            <directionalLight
                color={"white"}
                intensity={Math.PI * 3}
                position={[0, 3, 0]}
            />

            {useMemo(
                () =>
                    Array.from({ length: 100 }).map((_, i) => (
                        <SkillBoxModel
                            key={i}
                            position={[
                                Math.random() * 6 - 3,
                                Math.random() * 3 + 4,
                                Math.random() * 6 - 3,
                            ]}
                            rotation={[
                                Math.random() * Math.PI,
                                Math.random() * Math.PI,
                                Math.random() * Math.PI,
                            ]}
                        />
                    )),
                []
            )}

            <GroundModel />
        </Physics>
    );
};

export default SkillsScene;
