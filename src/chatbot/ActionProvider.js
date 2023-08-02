import React from "react";
// import axios from "axios";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const mockResponse = (stateRef) => {
    console.log(stateRef);
    const response = "response message";
    return response;
  };

  const handleAiMessage = async (message) => {
    var botMessage = createChatBotMessage("");
    try {
      const response = mockResponse("mockState"); //await axios.post("api/v1/chat", prevRef.current);
      // Bot will return response in the message property of the response
      botMessage = createChatBotMessage(response);
    } catch (e) {
      botMessage = createChatBotMessage(`I'm sorry, I seem to be broken right now. Please try again later.`);
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleAiMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
