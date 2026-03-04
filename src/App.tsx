import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import FAQ from "./pages/FAQ/FAQ";
import About_me from "./pages/About_me/About_me";
import Kids_and_teens from "./pages/Services/Kids_and_teens/Kids_and_teens";
import Adults from "./pages/Services/Adults/Adults";

function App() {
  console.log(window.innerWidth / window.innerHeight);
  return (
    <>
      <Header />
      <div className='body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about_me" element={<About_me />} />
          <Route path="/services/nya" element={<Kids_and_teens />} />
          <Route path="/services/adlts" element={<Adults />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;
