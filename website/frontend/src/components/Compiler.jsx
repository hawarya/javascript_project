import { useState } from "react";
import Editor from "@monaco-editor/react";
import axios from "axios";
 function Compiler() {
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState(71); 
  const [output, setOutput] = useState("");
  const languageMap = {         //Monaco editor needs the language name as a string, like "python" or "java"
  71: "python",                  //But your state language is a number (Judge0 language ID)
  62: "java",                     //This mapping converts ID → Monaco language string
  54: "cpp",
  50: "c",
  63: "javascript"
};
  const runCode = async () => {
  try {
    const res = await axios.post("http://localhost:5000/run", {
      code,
      languageId: language
    });
    const data = res.data;

      if (data.stdout) {  // this is for output and error output
        setOutput(data.stdout);
      } else if (data.stderr) {
        setOutput(data.stderr);
      } else if (data.compile_output) {
        setOutput(data.compile_output);
      } else {
        setOutput("No output");
      }
  } catch (err) {
    setOutput("Server error");
    console.error(err);
  }
};

function setLanguageHandler(langId) {  // set language with their ids
  setLanguage(langId);
}


  return (
    <>
    <select
  value={language}
  onChange={(e) => setLanguageHandler(Number(e.target.value))} //here language is selected
>
  <option value={71}>Python</option>  //dropdown box
  <option value={62}>Java</option>
  <option value={54}>C++</option>
  <option value={50}>C</option>
  <option value={63}>JavaScript</option>
</select>

     <div className="editor-container">
  <Editor              //monaca editor
    height="400px"
    language={languageMap[language]}
 theme="vs-dark"
    value={code}
    onChange={(value) => setCode(value)}  //the code write in editor
  />
</div>


      <button onClick={runCode}>Run Code</button>

      <pre style={{ background: "#111", color: "#0f0", padding: "10px" }}>{output}</pre>
    </>
  );
}

export default  Compiler;










