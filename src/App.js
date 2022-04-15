import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import Example from "./pages/Example";
import CheckoutPage from "./pages/CheckoutPage";
import SuccessUrl from "./pages/SuccessUrl";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route path="detail/:id" element={<DetailPage />}></Route>
        <Route path="checkout/:id" element={<CheckoutPage />}></Route>

        <Route path="success" element={<SuccessUrl />}></Route>
        <Route exact path="/example" element={<Example />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
