import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Bottom from "./components/Bottom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/teams" element={<Teams />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <Bottom />
      </BrowserRouter>
    </>
  );
}

export default App;
