import { RigidBody } from "@react-three/rapier";

const SkillBoxModel = ({ model, position, rotation }) => {
    return (
        <RigidBody
            key={Math.random().toString()}
            colliders="cuboid"
            {...{ position, rotation }}
            scale={10}
        >
            <primitive object={model} />
        </RigidBody>
    );
};

export default SkillBoxModel;
