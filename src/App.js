import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import ContactUS from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import { Routes, Route } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>

        <Route path="/" element={<AboutUs />} />

        <Route path="/work" element={<OurWork />} />

        <Route path="/work/:id" element={<MovieDetail />} />
          
        <Route path="/contact" element={<ContactUS />} />

      </Routes>
    </div>
  );
}

export default App;
