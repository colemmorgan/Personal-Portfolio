import Blob from "./components/blob"
import './App.css';
import { useEffect, useState, useRef } from "react";
import Sidebar from "./components/sidebar";
import Nav from "./components/nav";
import Skills from "./components/Skills";
function App() {

    
 


  return (
    <div className="App" >
      <Nav/>
      <Blob/>
      <Sidebar/>
      <Skills/>
      <div className="container"></div>
    </div>
  );
}

export default App;
