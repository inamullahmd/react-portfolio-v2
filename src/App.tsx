import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import CustomCursor from "./components/ui/CustomCursor";
import Home from "./pages/Home";
import ScrollToHash from "@/components/ui/ScrollToHash";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300"
          : "min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300"
      }
    >
      <CustomCursor isDark={isDark} />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home isDark={isDark} />} />
      </Routes>
    </div>
  );
}