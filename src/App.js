import React from "react";
import { Route, Routes } from "react-router-dom";
import { Cart, Header, Home } from "./components";

function App() {

  return (
    <div>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
