import "./sidebar.css";
// icon ---------------------------------------------
import { FaBars } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { useState } from "react";
import { Context } from "../../context/Context";
import { useContext } from "react";

function Sidebar() {
  const { setInput, prevPrompt, setShowResult } = useContext(Context);

  const [showSpan, setShoeSpan] = useState(true);
  return (
    <div className="sidebar">
      <div className="top">
        <FaBars className="menu" onClick={() => setShoeSpan(!showSpan)} />
        <div className="new-chat box" onClick={() => setShowResult(false)}>
          <IoMdAdd style={{ fontSize: "25px" }} />
          {showSpan && <span>New Chat</span>}
        </div>
        <div className="recent ">
          {showSpan && (
            <>
              <p className="recent-title">Recent</p>
              {prevPrompt &&
                prevPrompt.map((e, i) => {
                  return (
                    <div className="recent-entry box" id={i}>
                      <FaRegMessage />
                      <span onClick={() => setInput(e)}>
                        {e.slice(0, 15)} ...
                      </span>
                    </div>
                  );
                })}
            </>
          )}
        </div>
      </div>
      <div className="bottom">
        <div className="box">
          <IoMdHelpCircleOutline className="icon" />
          {showSpan && <span>Help</span>}
        </div>
        <div className="box">
          <PiClockCounterClockwiseFill className="icon" />
          {showSpan && <span>Activity</span>}
        </div>
        <div className="box">
          <IoSettingsOutline className="icon" />
          {showSpan && <span>Settings</span>}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
