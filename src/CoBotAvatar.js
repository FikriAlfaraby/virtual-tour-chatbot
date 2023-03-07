import React from "react";

import BotAvatar from "./icons/bombi icon 2.svg";

const CoBotAvatar = () => {
  return (
    <div className="react-chatbot-kit-chat-bot-avatar">
      <div
        className="react-chatbot-kit-chat-bot-avatar-container flex "
        style={{
          background: "none",
          
        }}
      >
        <img alt="BotAvatar" className="-mr-4" src={BotAvatar} />
      </div>
    </div>
  );
};

export default CoBotAvatar;
