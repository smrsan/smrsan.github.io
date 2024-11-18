import { Canvas } from "@react-three/fiber";
import SkillsScene from "./models/SkillsScene";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
    const sectionRef = useRef(null);
    const [runAnimation, setRunAnimation] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Check if 80% or more of the section is in the viewport
                setRunAnimation(entry.intersectionRatio >= 0.8);
            },
            {
                // Threshold array for detailed intersection changes
                threshold: Array.from({ length: 101 }, (_, i) => i / 100),
            }
        );

        const section = sectionRef.current;
        if (section) {
            observer.observe(section);
        }

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <div ref={sectionRef} className="screen-fit-size relative">
            <div className="w-full h-full bg-slate-300 absolute top-0">
                <Canvas>
                    <SkillsScene {...{ runAnimation }} />
                </Canvas>
            </div>
        </div>
    );
};

export default Skills;
