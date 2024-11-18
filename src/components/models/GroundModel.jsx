import { CuboidCollider } from "@react-three/rapier";

const GroundModel = () => {
    return <CuboidCollider position={[0, -2.5, 0]} args={[1000, 1, 1000]} />;
};

export default GroundModel;
