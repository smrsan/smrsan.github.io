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
    moreDescription,
    focused,
    toggleFocus,
}) => {
    useGSAP(() => {
        makeGsapFadeInAnimation({
            elem: `#${name}-experience-container`,
            start: "0% center",
            end: "10% center",
        });

        makeGsapFadeInAnimation({
            elem: `#${name}-experience-logo`,
            start: "10% center",
            end: "20% center",
        });

        makeGsapFadeInAnimation({
            elem: gsap.utils.toArray(
                document.querySelectorAll(
                    `#${name}-experience-corpTitle > span`
                )
            ),
            start: "20% center",
            end: "30% center",
            stagger: true,
            fromY: -25,
        });

        makeGsapFadeInAnimation({
            elem: `#${name}-date-of-employment`,
            start: "30% center",
            end: "40% center",
            fromY: -25,
        });

        makeGsapFadeInAnimation({
            elem: `#${name}-corp-link`,
            start: "40% center",
            end: "50% center",
            fromY: -25,
        });

        makeGsapFadeInAnimation({
            elem: `#${name}-job-title`,
            start: "50% center",
            end: "60% center",
        });

        makeGsapFadeInAnimation({
            elem: `#${name}-skill-level`,
            start: "60% center",
            end: "70% center",
        });

        makeGsapFadeInAnimation({
            elem: `#${name}-experience-description`,
            start: "80% bottom",
            end: "90% bottom",
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
                    ...(focused
                        ? {
                              duration: 1,
                          }
                        : {
                              scrollTrigger: {
                                  trigger: `#${name}-experience-spacer`,
                                  start,
                                  end,
                                  scrub: true,
                              },
                          }),
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
    }, [focused]);

    return (
        <div
            id={`${name}-experience-spacer`}
            className="
                w-full
                h-[250vh]
                relative
            "
        >
            <div
                id={`${name}-experience-container`}
                className={`
                    ${focused ? "fixed" : "sticky"}
                    top-0
                    ${focused ? "left-0" : ""}
                    screen-fit-size
                    flex
                    flex-col
                    items-center
                    justify-center
                    opacity-0
                    mx-auto
                `}
            >
                <div
                    id={`${name}-experience-box`}
                    className={`
                        flex
                        flex-col
                        border-gray-400
                        ${focused ? "" : "rounded-lg"}
                        ${
                            focused
                                ? `
                                    w-[100vw]
                                    min-h-[100vh]
                                    sm:pt-[3rem]
                                    pt-[2rem]
                                    md:px-[7.5vw]
                                    lg:px-[10vw]
                                    xl:px-[15vw]

                                    bg-white
                                `
                                : `
                                    w-[50rem]
                                    max-w-[90vw]
                                    max-h-[90vh]
                                    
                                    bg-white/30
                                    backdrop-blur-md
                                    border
                                    border-white/30
                                `
                        }
                        text-slate-950
                        transition-all
                    `}
                >
                    <div
                        onClick={toggleFocus}
                        className={`
                            ${focused ? "block" : "hidden"}
                            absolute
                            top-[5rem]
                            right-[2vw]
                            sm:right-[5vw]
                            md:right-[7.5vw]
                            lg:right-[10vw]
                            xl:right-[15vw]
                            rounded-full
                            w-10
                            aspect-square
                            bg-white
                            opacity-50
                            hover:opacity-100
                            cursor-pointer
                            flex
                            content-center
                            items-center
                            justify-center
                            font-extrabold
                            text-2xl
                            z-10
                        `}
                    >
                        X
                    </div>
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
                                <span className={focused ? "inline" : "hidden"}>
                                    {corpTitle}
                                </span>
                                {corpTitle?.split("").map((c, i) => (
                                    <span
                                        key={i}
                                        className={
                                            focused ? "hidden" : "inline-block"
                                        }
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
                        {focused ? moreDescription : description}
                        {!focused && !!moreDescription && (
                            <a className="link" onClick={toggleFocus}>
                                &gt; Read More...
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
