import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import './index.css'
function App() {
  return (
    <div className="container">
      <Navbar />
      <About name="Younes Abdessamad" lname="Boukra" />
    </div>
  );
}

export default App;
