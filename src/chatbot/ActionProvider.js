class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  handleAiMessage = (aiMessage) => {
    const message = this.createChatBotMessage(aiMessage, {
      loading: true,
      terminateLoading: true,
      withAvatar: true,
    });

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((state) => ({
      ...state,
      messages: [...state.messages, message],
    }));
  };
}

export default ActionProvider;
