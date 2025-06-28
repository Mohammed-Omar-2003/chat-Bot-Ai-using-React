import "./main.css";
import { Context } from "../../context/Context";
// ----react icon------------------------
import { VscCompass } from "react-icons/vsc";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { IoCodeSlashOutline } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import { HiOutlineMicrophone } from "react-icons/hi2";
import { IoSendSharp } from "react-icons/io5";
import { useContext } from "react";
//-----------------------------------------
// import { useState } from "react";

function Main() {
  const {
    onSent,
    titleInput,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="top">
        <p className="name">Chat Bot</p>
        <img src="/public/user_icon.png" alt="man" />
      </div>
      <div className="element">
        {!showResult ? (
          <div className="containr">
            <h1 className="sunTitle1">.مرحبا , ياصديقى</h1>
            <h1 className="sunTitle2">قولى متتكسفش اسعدك ازاى ؟ </h1>
            <div className="boxes">
              <div className="boxx">
                <p
                  onClick={() =>
                    setInput(
                      "Suggest beautiful places to see on an upcoming road trip"
                    )
                  }
                >
                  Suggest beautiful places to see on an upcoming road trip
                </p>
                <VscCompass className="icon" />
              </div>
              <div className="boxx">
                <p
                  onClick={() =>
                    setInput("Briefly summarize this concept: urban planning")
                  }
                >
                  Briefly summarize this concept: urban planning
                </p>
                <FaRegLightbulb className="icon" />
              </div>
              <div className="boxx">
                <p
                  onClick={() =>
                    setInput(
                      "Brainstorm team bonding activities for our work retreatp"
                    )
                  }
                >
                  Brainstorm team bonding activities for our work retreat
                </p>
                <FaRegMessage className="icon" />
              </div>
              <div className="boxx">
                <p
                  onClick={() =>
                    setInput("Tell me about React js and React native")
                  }
                >
                  Tell me about React js and React native
                </p>
                <IoCodeSlashOutline className="icon" />
              </div>
            </div>
          </div>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src="/public/user_icon.png" alt="icon" />
              <p>{titleInput}</p>
            </div>
            <div className="result-data ">
              <img src="/public/gemini_icon.png" alt="icon" />
              {loading ? (
                <div className="loading">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p>{resultData}</p>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="buttom">
        <div className="enter-element">
          <input
            type="text"
            placeholder="Enter a prompt here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="btns">
            <button>
              <LuImagePlus />
            </button>
            <button>
              <HiOutlineMicrophone />
            </button>
            <button type="submit" onClick={() => onSent()}>
              <IoSendSharp />
            </button>
          </div>
        </div>
        <p className="footer">
          Chat Bot may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Chat Bot Apps
        </p>
      </div>
    </div>
  );
}

export default Main;
