import Experience from "./components/Experience";
import Hero from "./components/Hero";

import stormLogo from "/logos/storm-online-logo.svg?url";

function App() {
    return (
        <>
            <Hero />
            <Experience
                name="storm-online"
                logoUrl={stormLogo}
                corpTitle={"Rayaneshe Abri-E Yekta Shive "}
                corpLinkTitle={"storm-online.ir"}
                corpLinkUrl={
                    "https://accounting.storm-online.ir/auth/#!/Authentication/Login"
                }
                jobTitle={"Full Stack Web Developer "}
                skillLevel={"Intern/Junior"}
                description={
                    <>
                        Served as a Full-stack JavaScript Developer, reporting
                        directly to the CEO.
                        <ul>
                            <li>
                                Developed SPA for Accounting User Panel using
                                Angular.js v1.
                            </li>
                            <li>
                                Developed the server-side RESTful API features
                                using Express.js.
                            </li>
                            <li>
                                DeImplemented server-side rendering of front-end
                                HTML templates with EJS.
                            </li>
                            <li>
                                Developed landing page independently using HTML,
                                Sass, JS, and jQuery.
                            </li>
                        </ul>
                    </>
                }
            />
        </>
    );
}

export default App;
