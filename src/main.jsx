import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

import App from "./App.jsx";

import "./index.css";
import "lenis/dist/lenis.css";

import "./lenis.js";

gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
