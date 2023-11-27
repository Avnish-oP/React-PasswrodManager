import { useState, useCallback,useEffect,useRef } from "react";
import PasswordGen from "./PasswordGen";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return(
    <>
    <Navbar/>
    <PasswordGen/>
    <Footer/>
    </>
  )
}

export default App;
