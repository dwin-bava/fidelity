import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CashDeposit from "./screens/CashDeposit";
import CashCash from "./screens/CashCash";
import Loanfid from './screens/Loanfid';
import Loanapply from './screens/Loanapply';
import LoanQuo from './screens/LoanQuo';
import Login from './screens/Login';

function App() {
  return (
    <div className="app" style={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CashDeposit />} />
          <Route path="/cash" element={<CashCash />} />
          <Route path="/fid" element={<Loanfid />} />
          <Route path="/loan" element={<Loanapply />} />
          <Route path="/quo" element={<LoanQuo />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;