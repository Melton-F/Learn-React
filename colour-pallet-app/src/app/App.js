import { useState } from "react";
import { Box } from "../box/box";
import { Input } from "../Input-text/Input";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState('');
  const [isDarkColor, setIsDarkColor] = useState(true);
  return (
    <div className="App">
      <h1>Helloooww Soldiers</h1>
      <Box
        inputText={inputText}
        isDarkColor={isDarkColor}
      />
      <Input
        inputText={inputText}
        setInputText={setInputText}
        isDarkColor={isDarkColor}
        setIsDarkColor={setIsDarkColor}
      />
    </div>
  );
}

export default App;
