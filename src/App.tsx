import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import FAQ from "./pages/FAQ/FAQ";
import About_me from "./pages/About_me/About_me";
import Kids_and_teens from "./pages/servicios-de-grafoanalisis/Kids_and_teens/Kids_and_teens";
import Adults from "./pages/servicios-de-grafoanalisis/para-jovenes-y-adultos/para-jovenes-y-adultos";

function App() {
  console.log(window.innerWidth / window.innerHeight);
  return (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
      <link rel="manifest" href="/site.webmanifest"></link>
      <Header />
      <div className='body'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preguntas-frecuentes" element={<FAQ />} />
          <Route path="/sobre-mi" element={<About_me />} />
          <Route path="/servicios-de-grafoanalisis/para-niños-y-adolescentes" element={<Kids_and_teens />} />
          <Route path="/servicios-de-grafoanalisis/para-jovenes-y-adultos" element={<Adults />} />
        </Routes>
        <Footer />
      </div>

    </>
  );
}

export default App;
