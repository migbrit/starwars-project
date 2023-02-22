import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import Home from "../pages/Home";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/characters" element={<CharacterCard/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

