import './Home.css';

import {
  Navbar,
  Header,
  Projects,
  Download,
  Socials,
  Footer,
  // Login,
  // ProjectsExtended,
} from "../HomeIndex.js";
// anything added below only expands the webpage such that its just longer. 
// have to add a way to jump between pages that arent the main page.
const Home = () => {
  return (
    <>
        <header className="header-bg"> 
            <Navbar />
            <Header /> 
        </header>
            <Projects data-aos="fade-up" />
            <Download />
            <Socials />
            <Footer />
            {/* <Login /> */}
            {/* <ProjectsExtended /> */}
    </>
  );
}

export default Home;
