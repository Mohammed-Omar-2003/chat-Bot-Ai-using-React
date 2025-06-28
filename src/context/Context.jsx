import { createContext, useState } from "react";
import runChat from "../config/chatBot.js";
export const Context = createContext();
function ContextProvider(props) {
  const [input, setInput] = useState("");
  const [titleInput, setTitleInput] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const onSent = async () => {
    setInput("");
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setTitleInput(input);
    setPrevPrompt((e) => [...e, input]);
    const responce = await runChat(input);
    const responseArray = responce.split("**");
    let newResponse = [];
    for (let i = 0; i < responseArray.length; i++) {
      if (i % 2 === 0) {
        newResponse.push(responseArray[i]);
      } else {
        newResponse.push(
          <b key={i}>
            <br />
            {responseArray[i]}
          </b>
        );
      }
    }
    setResultData(newResponse);
    setLoading(false);
    setInput("");
  };
  const contextValue = {
    setShowResult,
    prevPrompt,
    setPrevPrompt,
    onSent,
    titleInput,
    setTitleInput,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
}

export default ContextProvider;
