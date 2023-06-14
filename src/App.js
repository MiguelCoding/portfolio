import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";


import {
  Navbar,
  Header,
  Projects,
  Download,
  Socials,
  Footer,
  Login,
  ProjectsExtended,
} from "./components";
// anything added below only expands the webpage such that its just longer. 
// have to add a way to jump between pages that arent the main page.
function App() {
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
      <Login />
      <ProjectsExtended />
      <Routes path="/projectsExtended" element={ProjectsExtended}></Routes>
    </>
  );
}

export default App;
