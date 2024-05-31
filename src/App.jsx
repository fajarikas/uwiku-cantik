import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Apologize from "./Apologize/Apologize";
import Permissions from "./Permission/Permission";

function App() {
  const [popUp, setPopUp] = useState(false);

  const handleClick = () => {
    setPopUp(!popUp);
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Permissions />} />
          <Route path="/apologize" element={<Apologize />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
