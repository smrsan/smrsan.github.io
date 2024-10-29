import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Experience = ({
    name,
    logoUrl,
    corpTitle,
    datesOfEmployment,
    corpLinkTitle,
    corpLinkUrl,
    jobTitle,
    skillLevel,
    description,
}) => {
    useGSAP(() => {
        makeGsapFadeInAnimation({
            elem: `#${name}-experience-container`,
            start: "0% center",
            end: "15% center",
        });

        makeGsapFadeInAnimation({
            elem: `#${name}-experience-logo`,
            start: "10% center",
            end: "15% center",
        });

        makeGsapFadeInAnimation({
            elem: gsap.utils.toArray(
                document.querySelectorAll(
                    `#${name}-experience-corpTitle > span`
                )
            ),
            start: "15% center",
            end: "20% center",
            stagger: true,
            fromY: -25,
        });

        makeGsapFadeInAnimation({
            elem: `#${name}-date-of-employment`,
            start: "20% center",
            end: "25% center",
            fromY: -25,
        });

        makeGsapFadeInAnimation({
            elem: `#${name}-corp-link`,
            start: "25% center",
            end: "30% center",
            fromY: -25,
        });

        makeGsapFadeInAnimation({
            elem: `#${name}-job-title`,
            start: "30% center",
            end: "35% center",
        });

        makeGsapFadeInAnimation({
            elem: `#${name}-skill-level`,
            start: "35% center",
            end: "40% center",
        });

        makeGsapFadeInAnimation({
            elem: `#${name}-experience-description`,
            start: "40% center",
            end: "45% center",
        });

        function makeGsapFadeInAnimation({
            elem,
            start,
            end,
            stagger = false,
            fromX = 0,
            fromY = 0,
            from = {},
            to = {},
        }) {
            gsap.fromTo(
                elem,
                {
                    opacity: 0,
                    x: fromX,
                    y: fromY,
                    ...from,
                },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    ...to,
                    scrollTrigger: {
                        trigger: `#${name}-experience-spacer`,
                        start,
                        end,
                        scrub: true,
                    },
                    ...(stagger
                        ? {
                              stagger: {
                                  amount: 1.5,
                                  axis: "y",
                                  ease: "circ.inOut",
                                  from: "center",
                                  grid: [2, 1],
                              },
                          }
                        : {}),
                }
            );
        }
    }, []);

    return (
        <div
            id={`${name}-experience-spacer`}
            className="
                w-full
                relative
            "
        >
            <div
                id={`${name}-experience-container`}
                className="
                    relative
                    top-0
                    screen-fit-size
                    flex
                    flex-col
                    items-center
                    justify-center
                    opacity-0
                    mx-auto
                "
            >
                <div
                    className="
                        flex
                        flex-col
                        border-gray-400
                        rounded-lg
                        w-[50rem]
                        max-w-[90vw]
                        max-h-[90vh]
                        text-slate-950

                        bg-white/50
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
                            p-6
                            pb-1
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
                                id={`${name}-experience-corpTitle`}
                                className="text-center text-[5vw] md:text-[3vw] lg:text-[2.5vw] xl:text-[2vw]"
                                style={{
                                    lineHeight: "2.5rem",
                                }}
                            >
                                {corpTitle?.split("").map((c, i) => (
                                    <span
                                        key={i}
                                        className="inline-block"
                                        dangerouslySetInnerHTML={{
                                            __html: c === " " ? "&nbsp;" : c,
                                        }}
                                    />
                                ))}
                            </h3>
                            <div className="flex flex-row justify-start gap-4">
                                <span
                                    id={`${name}-date-of-employment`}
                                    className="opacity-0"
                                >
                                    {datesOfEmployment}
                                </span>
                                <a
                                    id={`${name}-corp-link`}
                                    href={corpLinkUrl}
                                    title={corpLinkTitle}
                                    className="link opacity-0"
                                    target="_blank"
                                >
                                    {corpLinkTitle}
                                </a>
                            </div>
                            <h4 id={`${name}-job-title`} className="opacity-0">
                                {jobTitle}
                            </h4>
                            <span
                                id={`${name}-skill-level`}
                                className="opacity-0"
                            >
                                {skillLevel}
                            </span>
                        </div>
                    </div>
                    <div
                        id={`${name}-experience-description`}
                        className="
                            p-6
                            pt-2
                            opacity-0
                            overflow-y-auto
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
