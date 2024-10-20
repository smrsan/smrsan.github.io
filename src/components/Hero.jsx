import { useGSAP } from "@gsap/react";
import "./hero.css";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import naturePhoto from "/photos/nature.jpg?url";
import myPhoto from "/photos/IMG_2720-removebg.png?url";

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
                start: "50% center",
                end: "100% center",
                scrub: true,
            },
        });

        gsap.to("#welcome-text", {
            x: -200,
            opacity: 0,
            ease: "circ.inOut",
            scrollTrigger: {
                trigger: "#hero",
                start: "60% center",
                end: "110% center",
                scrub: true,
            },
        });

        gsap.to("#animated-page-type", {
            x: 200,
            opacity: 0,
            ease: "circ.inOut",
            scrollTrigger: {
                trigger: "#hero",
                start: "70% center",
                end: "120% center",
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
            style={{
                backgroundImage: `url("${naturePhoto}")`,
                backgroundClip: "content-box",
                backgroundSize: "cover",
            }}
        >
            <img
                alt="My Photo"
                src={myPhoto}
                className="
                    absolute
                    top-[5vh]
                "
                style={{
                    left: "50%",
                    transform: "translateX(-50%)",
                }}
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
                        "linear-gradient(90deg, #CAC6DD 0%, #AC6AFF 100%)",
                    // WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                My Name is <u>Reza</u>
            </h1>

            <h2
                id="welcome-text"
                className="
                    relative
                    z-10
                    text-[3rem]
                "
            >
                Welcome to my
            </h2>
            <div
                id="animated-page-type"
                className="inline-flex flex-col gap-6 max-sm:gap-3 relative z-10"
            >
                <h2
                    ref={myPageNameRef}
                    id="my-page-name"
                    className="text-[4rem] max-sm:text-[2.5rem] opacity-0 font-bold block relative text-color-1"
                >
                    Portfolio
                </h2>
                <div
                    id="my-page-name-line"
                    className="relative block w-full h-1 bg-white rounded-full"
                />
            </div>
        </section>
    );
};

export default Hero;
