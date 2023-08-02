import React from "react";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    // TODO: Send message to backend to handle parsing using AI
    actions.handleAiMessage(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
