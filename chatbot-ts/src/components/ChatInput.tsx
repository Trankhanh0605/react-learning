import { useState } from 'react';
import { Chatbot } from 'supersimpledev';

import './ChatInput.css';

type ChatMessages = {
  id: string,
  message: string,
  sender: string
}[];

type ChatInputProps = {
  chatMessages: ChatMessages;
  setChatMessages: (chatMessages: ChatMessages) => void;
}

export function ChatInput({ chatMessages, setChatMessages }: ChatInputProps) {
  const [inputText, setInputText] = useState('');
  function saveInputText(event: {
    target: {
      value: string
    }
  }) {
    setInputText(event.target.value);
  }

  function sendMessage() {
    const newChatMessages = [
      ...chatMessages, //spread operator
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID()
      }
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);

    setChatMessages([
      ...newChatMessages, //spread operator
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
  }
  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to chatbot"
        size={30}
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
      />
      <button
        onClick={sendMessage}
        className="send-button"
      >Send</button>
    </div>
  );
}