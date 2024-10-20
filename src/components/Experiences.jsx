import Experience from "./Experience";
import BgTrainVideo from "./BgTrainVideo";

import stormLogo from "/logos/storm-online-logo.svg?url";
import sameteoLogo from "/logos/sameteo-logo.svg?url";
import intwareLogo from "/logos/intware-logo.png?url";
import _3gaamLogo from "/logos/3gaam-logo.svg?url";
import joulaLogo from "/logos/joula-logo.png?url";

const Experiences = () => {
    return (
        <div className="width-full">
            <BgTrainVideo />
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
            <Experience
                name="_3gaam"
                logoUrl={_3gaamLogo}
                corpTitle={"Barname Pardazan-E Ati Tech"}
                datesOfEmployment={"04/2020 - 04/2021"}
                corpLinkTitle={"3gaam.com"}
                corpLinkUrl={"https://3gaam.com/"}
                jobTitle={"Front-end Developer & Project Manager"}
                skillLevel={"Mid-level"}
                description={
                    <>
                        Worked as the Front-End Web Developer & the Front-End PM
                        reporting directly to the CTO of “Barname Pardazan-e Ati
                        Tech”.
                        <ul className="list-disc ml-5">
                            <li>
                                Managed the development of a new TypeScript
                                project using React.js, Relay.js, Material-UI,
                                and MobX.
                            </li>
                            <li>
                                Leveraged expertise in TypeScript, React-Native,
                                and Redux to enhance the older front-end
                                project.
                            </li>
                            <li>
                                Increased project scalability through the
                                application of Rush.js, Git-Submodules and
                                multiple Design Patterns.
                            </li>
                            <li>
                                Implemented folder structures for organization
                                purposes while using Jest testing framework
                                alongside ESLint code quality checks.
                            </li>
                            <li>
                                Comprehensive documentation was provided for
                                ease of maintenance.
                            </li>
                            <li>
                                Provided algorithms and structures for managing
                                services, features, forms, routes, data syncing,
                                client-side GraphQL mock server, and pagination
                                with Relay and GraphQL API.
                            </li>
                            <li>
                                Wrote the Source Obfuscator script to prevent
                                new developers from accessing sensitive source
                                codes of the project.
                            </li>
                            <li>
                                Installed their Linux OS and configured Logger
                                Services, such as Rsyslog and LogRotate.
                            </li>
                        </ul>
                    </>
                }
            />
            <Experience
                name="joula"
                logoUrl={joulaLogo}
                corpTitle={"Bamdad Ide Va Fanavari-E Araz"}
                datesOfEmployment={"01/2022 - Current"}
                corpLinkTitle={"joulatech.com"}
                corpLinkUrl={"https://joulatech.com/"}
                jobTitle={"Front-end Developer"}
                skillLevel={"Senior"}
                description={
                    <>
                        Reporting directly to the CTO of &apos;Bamdad Ide va
                        Fanavari-e Araz’, I have been working as the Front-End
                        React Developer.
                        <ul className="list-disc ml-5">
                            <li>
                                Developed the Front-end of KnitNet Monitoring
                                Solution Panel utilizing React.js.
                            </li>
                            <li>
                                Executed design tasks using the cutting-edge MUI
                                framework.
                            </li>
                            <li>
                                Implemented an optimized solution for globally
                                managing dialogs by leveraging React context and
                                URL query parameters.
                            </li>
                            <li>
                                Utilized PWA techniques to enhance user
                                experience and enable installation of web app.
                            </li>
                            <li>
                                Implemented a cross-platform barcode scanner for
                                faster roll barcode scanning progress.
                            </li>
                            <li>
                                Made KnitNet installable on Android using
                                Capacitor.js.
                            </li>
                            <li>
                                Created the Roll Defect Report Generator
                                utilizing html2canvas and MUI.
                            </li>
                            <li>
                                Utilized JSDoc, Custom React Hooks, helpers, and
                                some creative structures to make the KnitNet
                                front-end project more maintainable and
                                scalable.
                            </li>
                        </ul>
                    </>
                }
            />
        </div>
    );
};

export default Experiences;
