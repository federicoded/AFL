//import { useState } from 'react';
import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";

function App() {

  return (
    <>
      <Header />
      <div className='body'>
        <Carousel />
        <Footer />
      </div>

    </>
  )
}

export default App

const sayHello = (name: string): string => { // se especifica que tipo de dato recibe esa variable
  return `Hello, ${name}!`
}

console.log(sayHello('Fedeee'))