import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  state: {
    headerConfig: {
      headers: {
        "Api-Key": "jared_api_key",
        "Content-Type": "application/json",
        namespace: "jared_company",
      },
    },
  },
};

export default config;
