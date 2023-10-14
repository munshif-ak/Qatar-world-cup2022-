import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Bottom from "./components/Bottom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./pages/Not-found";
import Knockoutgroups from "./pages/Knockout&groups";
import Worldcuptropy from "./pages/Worldcuptropy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path='/knockout-groups' element={<Knockoutgroups/>} />
          <Route path="/worldcuptrophy" element={<Worldcuptropy/>}/>
          <Route path="*" element={<Notfound/>} />
        </Routes>
        <Bottom />
      </BrowserRouter>
    </>
  );
}

export default App;
