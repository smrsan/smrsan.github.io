import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";
import Experiences from "./components/Experiences";
import Skills from "./components/Skills";

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <SectionTitle id="xp-title" title="These Are My Experiences:" />
            <Experiences />
            <Skills />
        </>
    );
}

export default App;
