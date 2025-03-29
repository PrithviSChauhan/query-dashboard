import React, { useEffect } from "react";
import Navbar from "./components/ui/Navbar";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import ResultChart from "./components/ResultChart";

function App() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    const handleMouseMove = (e) => {
      cursor.style.transform = `translate(${e.pageX - 100}px, ${
        e.pageY - 100
      }px)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-900 overflow-auto">
      <div
        id="cursor"
        className="w-[100px] h-[100px] rounded-full fixed pointer-events-none mix-blend-difference bg-gradient-to-br from-pink-500 to-cyan-500 blur-3xl opacity-80 transition-transform duration-75"
      ></div>

      <div className="absolute inset-x-0">
        <Navbar />
        <QueryInput />
        <ResultChart />
        <QueryHistory />
      </div>
    </div>
  );
}

export default App;
