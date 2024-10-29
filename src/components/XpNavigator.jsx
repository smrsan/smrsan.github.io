import { xpArr } from "../constants";

const XpNavigator = ({ viewingXp, scrollToSection }) => {
    return (
        <div
            className="
                    w-full
                        z-20
                "
            style={{
                position: "sticky",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
            }}
        >
            <div
                className="
                        rounded-full
                        bg-color-1/30
                        backdrop-blur-md
                        border
                        border-color-5/30

                        absolute
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-2
                        p-4
                        w-[3rem]
                        right-[1rem]
                        max-sm:w-[1rem]
                        max-sm:right-auto
                        max-sm:left-[.25rem]
                        pointer-events-auto
                    "
                style={{
                    position: "absolute",
                    pointerEvents: "all !important",
                }}
            >
                {xpArr.map((xp) => (
                    <div
                        key={xp.name}
                        className={`
                            rounded-full
                            w-3
                            ${
                                xp.name === viewingXp?.name
                                    ? `
                                    h-6
                                    bg-white
                                `
                                    : `
                                    h-3
                                    bg-color-1/30
                                `
                            }
                            transition-all
                            cursor-pointer
                        `}
                        onClick={scrollToSection(xp)}
                    />
                ))}
            </div>
            <div
                className="
                    rounded-full
                    border

                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    p-4
                    z-10
                "
                style={{
                    position: "abosolute",
                    right: "2rem",
                    width: "3rem",
                    opacity: 0,
                    pointerEvents: "none",
                }}
            >
                {xpArr.map((xp) => (
                    <div
                        key={xp.name}
                        className={`
                            rounded-full
                            bg-white
                            w-3
                            ${xp.name === viewingXp?.name ? "h-6" : "h-3"}
                            transition-all
                            cursor-pointer
                        `}
                        onClick={scrollToSection(xp)}
                    />
                ))}
            </div>
        </div>
    );
};

export default XpNavigator;
