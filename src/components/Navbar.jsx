import siteLogo from "/logos/site-logo.png?url";

const Navbar = () => {
    return (
        <div
            className="
                fixed
                top-0
                w-full
                max-sm:h-10
                sm:h-20
                z-50
            "
        >
            <div
                className="
                    mx-auto
                    max-sm:w-[95vw]
                    sm:w-[90vw]
                    md:w-[75vw]
                    lg:w-[60vw]
                    xl:w-[70vw]
                    h-full
                    py-4
                    flex
                    justify-center
                    items-center
                    gap-7
                "
            >
                <a href="#hero">
                    <img alt="Site Logo" src={siteLogo} width={32} />
                </a>
                <nav
                    className="
                        flex
                        justify-evenly
                        gap-7
                    "
                >
                    <a href="#hero">Home</a>
                    <a href="#xp-title">Experiences</a>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
