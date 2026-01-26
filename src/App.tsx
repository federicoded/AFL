import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import FAQ from "./pages/FAQ/FAQ";
import About_me from "./pages/About_me/About_me";

function App() {
  return (
    <>
      <Header />
      <div className='body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about_me" element={<About_me />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;
