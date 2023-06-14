import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import {
  Navbar,
  Header,
  Projects,
  Download,
  Socials,
  Footer,
  Login,
} from "./components";

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
    </>
  );
}

export default App;
