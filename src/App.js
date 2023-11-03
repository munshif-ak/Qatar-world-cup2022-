import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Bottom from "./components/Bottom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./pages/Not-found";
import Knockoutgroups from "./pages/Knockout&groups";
import Worldcuptropy from "./pages/Worldcuptropy";
import Highlights from "./pages/Highlights";
import Teamdetails from "./pages/Teamdetails";
import Scorefixture from "./pages/Score&fixture";
import Scoredetail from "./pages/Scoredetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/highlights" element={<Highlights/>}/>
          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:tms" element={<Teamdetails/>}/>
          <Route path='/knockout-groups' element={<Knockoutgroups/>} />
          <Route path="/score-fixture" element={<Scorefixture/>}/>
          <Route path="/score-fixture/:scr" element={<Scoredetail/>}/>
          <Route path="/worldcuptrophy" element={<Worldcuptropy/>}/>
          <Route path="*" element={<Notfound/>} />
        </Routes>
        <Bottom />
      </BrowserRouter>
    </>
  );
}

export default App;
