import React from "react";
// import axios from "axios";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const mockResponse = () => {
    const response = "response message";
    return response;
  };

  const getBotMessage = (prevMessages) => {
    // Send previous messages to API endpoint and retrieve the new message
    console.log(prevMessages);
    try {
      const response = mockResponse("mock AI message"); //await axios.post("api/v1/chat", prevRef.current);
      // Bot will return response in the message property of the response
      return response;
    } catch (e) {
      return `I'm sorry, I seem to be broken right now. Please try again later.`;
    }
  };

  const handleAiMessage = async (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, createChatBotMessage(getBotMessage(prev))],
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
