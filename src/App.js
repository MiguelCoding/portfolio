import './App.css';

import {
  Navbar,
  Header,
  Projects,
  Download,
  Socials,
  Footer,
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
    </>
  );
}

export default App;
