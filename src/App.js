import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import "./style.css";
function App() {
  const [dapp, setDapp] = useState(false);
  return (
    <div className="App">
      <Navbar setDapp={setDapp} />
      <Home dapp={dapp} setDapp={setDapp} />
      <Footer />
    </div>
  );
}

export default App;
