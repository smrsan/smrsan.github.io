import { useGSAP } from "@gsap/react";
import "./hero.css";
import myPhoto from "/photos/IMG_2720.JPG?url";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
    const myPageNameRef = useRef();

    useGSAP(() => {
        // Line
        gsap.timeline({ repeat: -1, repeatDelay: 4.2 })
            .to("#my-page-name-line", {
                width: "0%",
                duration: 0.5,
            })
            .to("#my-page-name-line", {
                width: "100%",
                duration: 0.3,
            });

        // "Welcome" text on Scroll Aniamtion
        gsap.to("#welcome-container", {
            x: -200,
            opacity: 0,
            ease: "circ.inOut",
            scrollTrigger: {
                trigger: "#hero",
                start: "50% center",
                end: "120% center",
                scrub: true,
            },
        });

        // "Page Name" text on Scroll Aniamtion
        gsap.to("#hero-name", {
            x: 200,
            opacity: 0,
            ease: "circ.inOut",
            scrollTrigger: {
                trigger: "#hero",
                start: "60% center",
                end: "130% center",
                scrub: true,
            },
        });

        // "Hero Bg Fader" text on Scroll Aniamtion
        gsap.to("#hero-bg-fader", {
            opacity: 1,
            scrollTrigger: {
                trigger: "#hero",
                start: "75% center",
                end: "120% center",
                scrub: true,
            },
        });
    }, []);

    useEffect(() => {
        const words = ["Website", "Portfolio", "Resume"];
        let currentWordIndex = -1;
        let isMounted = true;

        (function aniamtePageNameText() {
            if (!isMounted) return;

            gsap.to(myPageNameRef.current, {
                opacity: 0,
                duration: 0.5,
                x: "-5%",
                onComplete: () => {
                    currentWordIndex = (currentWordIndex + 1) % words.length;
                    myPageNameRef.current.textContent = words[currentWordIndex];

                    gsap.to(myPageNameRef.current, {
                        opacity: 1,
                        x: "0%",
                        duration: 0.3,
                        delay: 0.3,
                    });
                },
            });

            setTimeout(aniamtePageNameText, 5000);
        })();

        return () => (isMounted = false);
    }, []);

    return (
        <section
            id="hero"
            className="screen-fit-size relative overflow-hidden flex justify-center items-center flex-col gap-8"
        >
            <img
                id="hero-img"
                alt="My Photo"
                src={myPhoto}
                className="
                    max-sm:min-h-full
                    max-sm:max-w-[200vw]
                    min-w-full
                    absolute
                    -z-10
                "
            />
            <div
                id="hero-bg-fader"
                className="bg-n-8 w-full h-full pointer-events-none absolute opacity-0"
            />

            <h1
                id="hero-name"
                className="
                    max-md:text-[10vw]
                    max-md:h-[15vw]
                    text-[5rem]
                    h-[6.5rem]
                    font-bold
                    italic
                    bg-clip-text
                    fill-transparent
                    inline-block
                    content-center
                "
                style={{
                    backgroundImage:
                        "linear-gradient(90deg, #fcff9e 0%, #c67700 100%)",
                    // WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                My Name is <u>Reza</u>
            </h1>

            <h3
                id="welcome-container"
                className="
                    text-[2rem]
                    bg-white/30
                    backdrop-blur-md
                    border
                    border-white/30
                    rounded-full
                    max-sm:px-4
                    max-sm:pb-3
                    max-sm:pt-4
                    px-7
                    pb-6
                    pt-7
                    overflow-hidden
                    flex
                    items-center
                    gap-5
                "
                style={{
                    transition: "width 0.5s ease, height 0.5s ease !important",
                }}
            >
                <span>Welcome to my</span>

                <div className="inline-flex flex-col gap-6 max-sm:gap-3">
                    <h2
                        ref={myPageNameRef}
                        id="my-page-name"
                        className="text-[4rem] max-sm:text-[2.5rem] opacity-0 font-bold block relative text-color-2"
                    >
                        Portfolio
                    </h2>
                    <div
                        id="my-page-name-line"
                        className="relative block w-full h-1 bg-white rounded-full"
                    />
                </div>
            </h3>
        </section>
    );
};

export default Hero;
