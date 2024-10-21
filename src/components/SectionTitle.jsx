import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const SectionTitle = ({ id, title }) => {
    useGSAP(() => {
        const titleTl = gsap.timeline();

        titleTl
            .fromTo(
                `#${id}-title`,
                {
                    translateX: "100vw",
                    opacity: 0,
                },
                {
                    translateX: "0vw",
                    opacity: 1,

                    ease: "none",
                    scrollTrigger: {
                        trigger: `#${id}-spacer`,
                        start: "0% bottom",
                        end: "25% center",
                        scrub: true,
                    },
                }
            )
            .fromTo(
                `#${id}-title`,
                {
                    translateX: "0vw",
                    opacity: 1,
                },
                {
                    translateX: "-300vw",
                    opacity: 0,

                    ease: "none",
                    scrollTrigger: {
                        trigger: `#${id}-spacer`,
                        start: "25% center",
                        end: "100% center",
                        scrub: true,
                    },
                }
            );
    }, []);

    return (
        <div
            id={`${id}-spacer`}
            className="
                relative
                w-full
                h-[500vh]
            "
        >
            <div id={id} />
            <div
                className="
                    sticky
                    top-0
                    block
                    screen-fit-size
                    overflow-hidden
                "
            >
                <h1
                    id={`${id}-title`}
                    className="
                    absolute
                    block
                    text-[20vw]
                    italic
                    leading-relaxed
                    whitespace-nowrap
                    select-none
                    pointer-events-none
                    opacity-0
                "
                    style={{
                        top: `calc(50% - 20vw)`,
                    }}
                >
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default SectionTitle;
