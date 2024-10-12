import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Hero from "./components/Hero";

gsap.registerPlugin(ScrollTrigger);

function App() {
    return (
        <>
            <Hero />
            <div className="screen-fit-size"></div>
        </>
    );
}

export default App;
