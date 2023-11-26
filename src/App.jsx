import { useState, useCallback,useEffect,useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [hasNumbers, setHasNumbers] = useState(false);
  const [hasSymbols, setHasSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);
  //password REf using useRef hook
  const passwordRef = useRef(null);
  const copyPassword = () => {
    passwordRef.current.select();
    document.execCommand("copy");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);


  }
  //useCallback hook
  const passwordGenerator = useCallback(() => {
    let generatedPassword = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (hasNumbers) {
      str += "0123456789";
    }
    if (hasSymbols) {
      str += "!@#$%^&*()_+";
    }
    while (generatedPassword.length < length) {
      const char = Math.floor(Math.random() * str.length);
      generatedPassword += str.charAt(char);
    }
    setPassword(generatedPassword);
  }, [length, hasNumbers, hasSymbols, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, hasNumbers, hasSymbols, passwordGenerator]);

  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
      <div className="mx-auto shadow-md rounded-lg bg-slate-400 py-4 pb-10 px-10 flex flex-col gap-2 justify-center items-center">
        <div>
          <h1 className="mx-auto w-full font-semibold text-2xl my-2">Password Generator</h1>
        </div>
        <div className="flex gap-1">
          <input
            type="text"
            value={password}
            className="outline-none px-2 py-1 w-full shadow-inner"
            readOnly
            placeholder="Passwrod"
            ref={passwordRef}
          />
          <button className={!copied?`bg-blue-800 text-white px-2 py-1 rounded-r-lg`:`badge bg-green-500 text-white px-2 py-1 rounded-lg`}
          onClick={copyPassword}
          >
            {!copied?`Copy`:`Copied`}
          </button>
          
        </div>
        <div className="flex gap-4">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="cursor-pointer w-full"
          />
          <label htmlFor="">Length:{length}</label>
        </div>
        <div className="flex gap-2">
          <label htmlFor="">Include Numbers :</label>
          <input
            type="checkbox"
            checked={hasNumbers}
            onChange={(e) => setHasNumbers(e.target.checked)}
          />
          <label htmlFor="">Include Symbols :</label>
          <input
            type="checkbox"
            checked={hasSymbols}
            onChange={(e) => setHasSymbols(e.target.checked)}
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default App;
