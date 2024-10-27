import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const lenis = new Lenis();

let lenisEnabled = true;

export function enableLenisScroll() {
    lenisEnabled = true;
    lenis.on("scroll", ScrollTrigger.update);
}

export function disableLenisScroll() {
    lenisEnabled = false;
    lenis.off("scroll", ScrollTrigger.update);
}

function raf(time) {
    if (lenisEnabled) lenis.raf(time);
    requestAnimationFrame(raf);
}

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
    lenisEnabled && lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

requestAnimationFrame(raf);
