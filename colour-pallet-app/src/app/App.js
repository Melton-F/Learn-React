import { useState } from "react";
import { ColorChange } from "../color/ColorChange";
import { Input } from "../Input-text/Input";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState();
  return (
    <div className="App">
      <h1>Helloooww Soldiers</h1>
      <ColorChange inputText={inputText}/>
      <Input inputText={inputText} setInputText={setInputText} />
    </div>
  );
}

export default App;
