import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";

import Experiences from "./components/Experiences";

function App() {
    return (
        <>
            <Hero />
            <SectionTitle id="xp-title" title="These Are My Experiences:" />
            <Experiences />
        </>
    );
}

export default App;
