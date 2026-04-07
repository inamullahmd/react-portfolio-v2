import { Routes, Route } from "react-router";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";

export default function App() {

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  );
}