import './App.css';
import { BrowserRouter,Router, Route, Routes } from "react-router-dom";


import {
  Navbar,
  Header,
  Projects,
  Download,
  Socials,
  Footer,
  Login,
  ProjectsExtended,
  Home,
} from "./components/index.js";
// anything added below only expands the webpage such that its just longer. 
// have to add a way to jump between pages that arent the main page.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        {/* <Route path='/' element={<Test />}></Route> */}
        <Route path='/projectsExtended' element={<ProjectsExtended/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
