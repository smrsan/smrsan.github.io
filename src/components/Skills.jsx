import { Canvas } from "@react-three/fiber";
import SkillsScene from "./models/SkillsScene";

const Skills = () => {
    return (
        <div className="screen-fit-size relative">
            <div className="w-full h-full bg-slate-300 absolute top-0">
                <Canvas>
                    <SkillsScene />
                </Canvas>
            </div>
            <div className="w-full h-full relative z-10 top-0">Hello World</div>
        </div>
    );
};

export default Skills;
