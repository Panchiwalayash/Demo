import { Navbar } from "./components/Navbar/Navbar";
import Menu from './components/Menu/Menu'
import './app.css'
import { useState } from "react";
import { Home } from "./components/Home/Home";
import { Card } from "./components/Card/Card";
import Footer from "./components/Footer/Footer";


function App() {

  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <div className="app">

    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Home/>
    <Card/>
    <Footer/>
    </div>
    
  );
}

export default App;
