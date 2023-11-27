import { useState, useCallback,useEffect,useRef } from "react";
import PasswordGen from "./PasswordGen";
import Navbar from "./Navbar";

function App() {
  return(
    <>
    <Navbar/>
    <PasswordGen/>
    </>
  )
}

export default App;
