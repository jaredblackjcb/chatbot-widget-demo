import { createChatBotMessage } from "react-chatbot-kit";

const config = (apiKey, namespace, initialMessage) => ({
  initialMessages: [createChatBotMessage(initialMessage)],
  state: {
    headerConfig: {
      headers: {
        "Api-Key": apiKey,
        namespace: namespace,
        "Content-Type": "application/json",
      },
    },
  },
});

export default config;
