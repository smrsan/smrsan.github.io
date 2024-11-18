import { useMemo, useRef } from "react";
import { PerspectiveCamera, useGLTF } from "@react-three/drei";

import SkillBoxModel from "./SkillBoxModel";
import GroundModel from "./GroundModel";
import { Physics } from "@react-three/rapier";

const techModelsPathPrefix = "/models/techs";

const SkillsScene = ({ runAnimation = false }) => {
    const modelsRef = useRef([
        useGLTF(`${techModelsPathPrefix}/css.glb`),
        useGLTF(`${techModelsPathPrefix}/deno.glb`),
        useGLTF(`${techModelsPathPrefix}/HTML.glb`),
        useGLTF(`${techModelsPathPrefix}/js.glb`),
        useGLTF(`${techModelsPathPrefix}/node.glb`),
        useGLTF(`${techModelsPathPrefix}/react.glb`),
        useGLTF(`${techModelsPathPrefix}/ts.glb`),
    ]);

    const skills = useMemo(
        () =>
            Array.from({ length: 200 }).map((_, i) => {
                const model =
                    modelsRef.current[
                        Math.floor(Math.random() * modelsRef.current.length)
                    ].scene.clone(true);

                return (
                    <SkillBoxModel
                        key={i}
                        model={model}
                        position={[
                            Math.random() * 20 - 10,
                            Math.random() * 7 + 3.5,
                            Math.random() * 20 - 10,
                        ]}
                        rotation={[
                            Math.random() * Math.PI,
                            Math.random() * Math.PI,
                            Math.random() * Math.PI,
                        ]}
                    />
                );
            }),
        []
    );

    return (
        <Physics paused={!runAnimation}>
            <PerspectiveCamera
                makeDefault
                position={[0, 4, 8]}
                rotation={[Math.PI * -0.2, 0, 0]}
            />
            <ambientLight intensity={Math.PI * 1} color={"white"} />
            <directionalLight
                color={"white"}
                intensity={Math.PI * 3}
                position={[0, 3, 0]}
            />

            {skills}

            <GroundModel />
        </Physics>
    );
};

export default SkillsScene;
