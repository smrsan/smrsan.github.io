import Experience from "./components/Experience";
import Hero from "./components/Hero";
import SectionTitle from "./components/SectionTitle";

import stormLogo from "/logos/storm-online-logo.svg?url";
import sameteoLogo from "/logos/sameteo-logo.svg?url";
import intwareLogo from "/logos/intware-logo.png?url";

function App() {
    return (
        <>
            <Hero />
            <SectionTitle id="xp-title" title="These Are My Experiences:" />
            <Experience
                name="storm-online"
                logoUrl={stormLogo}
                corpTitle={"Rayaneshe Abri-E Yekta Shive"}
                datesOfEmployment={"07/2017 - 03/2018"}
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
                        <ul className="list-disc ml-5">
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
            <Experience
                name="sameteo"
                logoUrl={sameteoLogo}
                corpTitle={"Kavosh Sepehr Lotus Ltd"}
                datesOfEmployment={"08/2018 - 12/2018"}
                corpLinkTitle={"sameteo.com"}
                corpLinkUrl={"https://sameteo.com/"}
                jobTitle={"Full Stack Developer"}
                skillLevel={"Junior"}
                description={
                    <>
                        Working as a Full-Stack Web Developer, I reported
                        directly to the CEO of &apos;Kavosh Sepehr Lotus Ltd’.
                        <ul className="list-disc ml-5">
                            <li>
                                Successfully composed all Web Server programs,
                                such as the Tile Map Service (TMS), by
                                leveraging Node.js and following OSM Standards
                                guidelines.
                            </li>
                            <li>
                                Implemented a cache system in pure Node.js,
                                resulting in a 10x improvement of TMS
                                performance.
                            </li>
                            <li>
                                Developed Single-Page-App entirely utilizing
                                React.js.
                            </li>
                            <li>
                                Wrote 100% of the Automatic Data Gatherer CLI
                                program using Node.js.
                            </li>
                            <li>
                                Worked together with the DB Engineerto enhance
                                efficiency in accessing and storing Weather
                                Forecast information.
                            </li>
                        </ul>
                    </>
                }
            />
            <Experience
                name="intware"
                logoUrl={intwareLogo}
                corpTitle={"Asr-E Pardazesh-E Sari’"}
                datesOfEmployment={"05/2019 - 01/2020"}
                corpLinkTitle={"intware.ir"}
                corpLinkUrl={
                    "https://www.aparat.com/v/1pl4t/%D9%BE%D8%A7%D8%AF%DA%A9%D8%B3%D8%AA_%D9%87%D8%A7%DB%8C_%D8%A2%D9%85%D9%88%D8%B2%D8%B4%DB%8C_%D9%85%D8%AC%D9%84%D8%B3%D8%AA%D8%A7%D9%86?t=%7Bseek_to_second_number%7D"
                }
                jobTitle={"Front-end Freelancer"}
                skillLevel={"Junior"}
                description={
                    <>
                        Directly reporting to the CEO, | served as the head
                        front-end developer for crowdsourcing project.
                        <ul className="list-disc ml-5">
                            <li>
                                Utilized React.js to build scalable SPA pages
                                for the organization&apos;s admin panel
                            </li>
                            <li>
                                Designed user interfaces utilizing Material-UI
                                framework.
                            </li>
                            <li>
                                Integrated SPA and GraphQL API effectively by
                                employing Apollo.
                            </li>
                        </ul>
                    </>
                }
            />
        </>
    );
}

export default App;
