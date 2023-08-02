import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "../chatbot/config.js";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

export default function AiBot({ apiKey }) {
  const [showBot, toggleBot] = useState(true);
  return (
    <div>
      {showBot && <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />}
      <button onClick={() => toggleBot((prev) => !prev)}>Bot</button>
    </div>
  );
}
