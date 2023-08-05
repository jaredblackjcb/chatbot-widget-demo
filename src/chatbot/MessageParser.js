import axios from "axios";
class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  getContext() {
    return this.state.messages.map(({ message, type }) => ({ message, type }));
  }

  async getAiMessage(message) {
    try {
      const response = await axios.post(
        "/api/v1/chat",
        { message: message, context: this.getContext() },
        this.state.headerConfig
      );
      return response.data;
    } catch (e) {
      return "I'm sorry, I seem to be broken right now. Please try again later.";
    }
  }

  async parse(message) {
    console.log(this.state);
    console.log(message);
    try {
      const newMessage = await this.getAiMessage(message);
      return this.actionProvider.handleAiMessage(newMessage);
    } catch (e) {
      console.error(e);
    }
  }
}

export default MessageParser;
