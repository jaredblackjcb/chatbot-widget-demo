import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import config from "./chatbot/config.js";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

function App() {
  return (
    <div>
      <p>Testing</p>
      <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
    </div>
  );
}

export default App;
