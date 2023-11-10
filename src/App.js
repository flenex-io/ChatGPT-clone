import React, { useState } from "react";
import "./App.css";
import GPTLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";
import SendBtn from "./assets/send.svg";
import UserIcon from "./assets/user-icon.png";
import gptImgLogo from "./assets/chatgptLogo.svg";
import { sendMsgToOpenAI } from "./Openai";

const App = () => {
  const [input, setInput] = useState("");

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    console.log(res)
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={GPTLogo} alt="Logo" className="logo" />
            <span className="brand">TextGPT</span>
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="" className="addBtn" />
            New Chat
          </button>

          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" />
              What is Programming
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" />
              How to use an API
            </button>
          </div>
        </div>

        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt="" className="listItemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listItemsImg" />
            Save
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listItemsImg" />
            Upgrade To Pro
          </div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat">
            <img className="chatImg" src={UserIcon} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              perspiciatis praesentium deserunt id rem soluta consectetur,
              tempore magni animi debitis.
            </p>
          </div>
          <div className="chat bot">
            <img className="chatImg" src={gptImgLogo} alt="" />
            <p className="txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              perspiciatis praesentium deserunt id rem soluta consectetur,
              tempore magni animi debitis.Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti perspiciatis praesentium deserunt id
              rem soluta consectetur, tempore magni animi debitis.Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Deleniti perspiciatis
              praesentium deserunt id rem soluta consectetur, tempore magni
              animi debitis.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti perspiciatis praesentium deserunt id rem soluta
              consectetur, tempore magni animi debitis.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Deleniti perspiciatis
              praesentium deserunt id rem soluta consectetur, tempore magni
              animi debitis.Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti perspiciatis praesentium deserunt id rem soluta
              consectetur, tempore magni animi debitis.Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Deleniti perspiciatis
              praesentium deserunt id rem soluta consectetur, tempore magni
              animi debitis.
            </p>
          </div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input
              type="text"
              placeholder="Send a message"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button className="send" onClick={handleSend}>
              <img src={SendBtn} alt="Send Button" />
            </button>
          </div>
          <p>
            {" "}
            TextGPT may produce inaccurate information about people, places, or
            facts
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;
