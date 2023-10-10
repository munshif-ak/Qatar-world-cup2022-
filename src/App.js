import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Bottom from "./components/Bottom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Notfound from "./pages/Not-found";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
        <Bottom />
      </BrowserRouter>
    </>
  );
}

export default App;
