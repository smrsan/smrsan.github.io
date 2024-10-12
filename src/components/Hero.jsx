import { useGSAP } from "@gsap/react";
import "./hero.css";
import myPhoto from "/photos/IMG_2720.JPG?url";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const Hero = () => {
    const myPageNameRef = useRef();

    useGSAP(() => {
        // Hand
        gsap.timeline({
            repeat: -1,
            repeatDelay: 2,
        }).to("#hand-point-down", {
            y: 8,
            repeat: 3,
            yoyo: true,
            duration: 0.2,
            ease: "power1.inOut",
        });

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
        gsap.to("#welcome-text", {
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
        gsap.to("#my-page-name-container", {
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
        <div
            id="hero"
            className="screen-fit-size relative overflow-hidden flex justify-center items-center flex-col gap-8"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("${myPhoto}")`,
                backgroundPositionX: "center",
            }}
        >
            <div
                id="hero-bg-fader"
                className="bg-n-8 w-full h-full pointer-events-none absolute opacity-0"
            />
            <h3
                id="welcome-text"
                className="text-[2rem] bg-white/30 backdrop-blur-md border border-white/30 rounded-full p-6 overflow-hidden"
            >
                Welcome to my{" "}
                <span id="hand-point-down" className="inline-block">
                    👇🏻
                </span>
            </h3>
            <div
                id="my-page-name-container"
                className="flex flex-col gap-8 justify-start"
            >
                <h1
                    ref={myPageNameRef}
                    id="my-page-name"
                    className="text-[4rem] opacity-0 font-bold block relative text-color-2"
                >
                    Portfolio
                </h1>
                <div
                    id="my-page-name-line"
                    className="relative block w-full h-1 bg-white rounded-full"
                />
            </div>
        </div>
    );
};

export default Hero;
