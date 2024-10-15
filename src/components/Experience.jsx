import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Experience = ({
    name,
    logoUrl,
    corpTitle,
    corpLinkTitle,
    corpLinkUrl,
    jobTitle,
    skillLevel,
    description,
}) => {
    useGSAP(() => {
        gsap.to(`#${name}-experience-container`, {
            translateX: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: `#${name}-experience-spacer`,
                start: "-5% center",
                end: "5% center",
                scrub: true,
            },
        });

        gsap.to(`#${name}-experience-logo`, {
            opacity: 1,
            scrollTrigger: {
                trigger: `#${name}-experience-spacer`,
                start: "5% center",
                end: "10% center",
                scrub: true,
            },
        });
    }, []);

    return (
        <div
            id={`${name}-experience-spacer`}
            className="
                w-full
                h-[500vh]
                relative
            "
        >
            <div
                id={`${name}-experience-container`}
                className="
                    sticky
                    top-0
                    screen-fit-size
                    flex
                    flex-col
                    items-center
                    justify-center
                    -translate-x-[100px]
                    opacity-0
                "
            >
                <div
                    className="
                        flex
                        flex-col
                        w-10/12
                        border-gray-400
                        rounded-lg

                        bg-white/30
                        backdrop-blur-md
                        border
                        border-white/30
                    "
                >
                    <div
                        className="
                            flex
                            max-sm:flex-col
                            flex-row
                            py-3
                            sm:px-2
                            px-4
                        "
                    >
                        <div
                            className="
                                flex-1
                                flex
                                items-center
                                justify-center
                            "
                        >
                            <img
                                id={`${name}-experience-logo`}
                                alt="storm logo"
                                src={logoUrl}
                                className="
                                    w-[75%]
                                    opacity-0
                                "
                            />
                        </div>
                        <div
                            className="
                                flex-[2]
                                flex
                                flex-col
                                items-start
                                justify-center
                                gap-1
                            "
                        >
                            <h3
                                className="text-[2rem] text-center"
                                style={{
                                    lineHeight: "2.5rem",
                                }}
                            >
                                {corpTitle}
                            </h3>
                            <a
                                href={corpLinkUrl}
                                title={corpLinkTitle}
                                className="link"
                                target="_blank"
                            >
                                🔗 {corpLinkTitle}
                            </a>
                            <h4>{jobTitle}</h4>
                            {skillLevel}
                        </div>
                    </div>
                    <div
                        id={`${name}-experience-description`}
                        className="
                            py-3
                            sm:px-2
                            px-4
                        "
                    >
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
