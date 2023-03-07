import { useState } from "react";
import "./App.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MetaTags from "react-meta-tags";
import TypedReact from "./TypedReact";

import config from "./config.js";
import MessageParser from "./MessageParser.js";
import ActionProvider from "./ActionProvider.js";
import BotAvatar from "./icons/BOMBI-ICON.png";
import DelayedComponent from "./DelayComponent";

function App() {
  const [showBot, toggleBot] = useState(false);
  return (
    <div className="App py-10">
      <Fade bottom cascade>
        <h1 className="text-2xl font-bold">Bombi Chatbot</h1>
        <h2 className="text-2xl">Start chatting with the Vtour-Chatbot!</h2>
      </Fade>
      <DelayedComponent delay="1000">
        <TypedReact />
      </DelayedComponent>
      <Fade big>
        <div className="py-10 flex justify-center items-center">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      </Fade>
    </div>
  );
}

export default App;
