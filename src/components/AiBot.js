import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import Fab from "@mui/material/Fab";
import ChatIcon from "@mui/icons-material/Chat";
import Box from "@mui/material/Box";

import config from "../chatbot/config.js";
import MessageParser from "../chatbot/MessageParser";
import ActionProvider from "../chatbot/ActionProvider";

export default function AiBot({ apiKey, namespace, initialMesage }) {
  const [showBot, toggleBot] = useState(true);
  return (
    <Box>
      {showBot && (
        <Chatbot
          config={config(apiKey, namespace, initialMesage)}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
      <Fab color="primary" aria-label="add" onClick={() => toggleBot((prev) => !prev)}>
        <ChatIcon />
      </Fab>
    </Box>
  );
}
