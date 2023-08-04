import axios from "axios";
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  createBody(message) {
    const context = this.state.messages.map(({ message, type }) => ({ message, type }));
    const body = {
      message: message,
      context: context,
    };

    return JSON.stringify(body);
  }

  getAiMessage(message) {
    const body = this.createBody(message);
    console.log(body);
    try {
      const response = "test response"; // await axios.get("/api/v1/chat", body);
      return response;
    } catch (e) {
      return "I'm sorry, I seem to be broken right now. Please try again later.";
    }
  }

  parse(message) {
    console.log(this.state);
    console.log(message);
    const newMessage = this.getAiMessage(message);
    return this.actionProvider.handleAiMessage(newMessage);
  }
}

export default MessageParser;
