import { useCallback, useEffect, useRef, useState } from "react";

import { xpArr } from "../constants";
import Experience from "./Experience";
// import BgTrainVideo from "./BgTrainVideo";
import BgTrainModel from "./models/BgTrainModel";
import XpNavigator from "./XpNavigator";

const Experiences = () => {
    const [viewingXp, setViewingXp] = useState(null);
    const scrollProgressRef = useRef(0);

    const scrollToSection = useCallback(
        (xp) => () => {
            document
                .querySelector(`#${xp.name}-experience-spacer`)
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "end",
                });
        },
        []
    );

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById("experiences-container");
            const rect = element.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate the scroll progress
            const totalHeight = rect.height + viewportHeight;
            const progress = Math.min(
                Math.max((viewportHeight - rect.top) / totalHeight, 0),
                1
            );

            scrollProgressRef.current = progress;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        function findMaxVisibleSection() {
            let maxVisibleXpHeight = 0;
            let mostVisibleXp = null;

            xpArr.forEach((xp) => {
                const section = document.getElementById(
                    `${xp.name}-experience-spacer`
                );
                const rect = section.getBoundingClientRect();

                // Calculate visible height of the section in the viewport
                const visibleHeight = Math.max(
                    0,
                    Math.min(rect.bottom, window.innerHeight) -
                        Math.max(rect.top, 0)
                );

                // Keep track of the section with the largest visible height
                if (visibleHeight > maxVisibleXpHeight) {
                    maxVisibleXpHeight = visibleHeight;
                    mostVisibleXp = xp;
                }
            });

            setViewingXp(mostVisibleXp);
        }

        window.addEventListener("scroll", findMaxVisibleSection);

        return () => {
            window.removeEventListener("scroll", findMaxVisibleSection);
        };
    }, []);

    return (
        <div id="experiences-container" className="width-full">
            <XpNavigator {...{ viewingXp, scrollToSection }} />

            <BgTrainModel
                {...{
                    scrollProgressRef,
                }}
            />

            {xpArr.map((xp) => (
                <Experience key={xp.name} {...xp} />
            ))}
        </div>
    );
};

export default Experiences;
