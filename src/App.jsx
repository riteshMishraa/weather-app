import React from "react";
import Navbar from "./assets/components/common/Navbar";
import WeatherApp from "./assets/components/core/weatherApp";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="min-h-screen w-screen bg-[#777574]">
      <Toaster/>
      <Navbar />
      <WeatherApp/>
    </div>
  );
};

export default App;
