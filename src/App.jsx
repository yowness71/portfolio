import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
function App() {
  return (
    <>
      <Navbar />
      <About name="Younes Abdessamad" lname="Boukra" />
    </>
  );
}

export default App;
