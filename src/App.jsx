import { useState } from "react";
import "./App.css";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

function App() {
  return (
    <div className="min-h-screen">
      <div className="min-h-screen gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
    </div>
  );
}

export default App;
