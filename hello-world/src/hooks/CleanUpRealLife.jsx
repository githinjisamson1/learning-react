import React, { useState, useEffect } from "react";
import { connectToChatServer, disconnectFromChatServer } from "./chatService";

function ChatComponent() {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Effect function
    const socket = connectToChatServer();

    // Subscribe to messages
    socket.on("message", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Set connected state
    setIsConnected(true);

    // Cleanup function
    return () => {
      // Unsubscribe from messages
      socket.off("message");

      // Disconnect from the chat server
      disconnectFromChatServer(socket);

      // Reset connected state
      setIsConnected(false);
    };
  }, []); // Dependency array is empty, so effect runs only once after initial render

  const sendMessage = (message) => {
    // Send message through the WebSocket connection
    // For example: socket.emit('send-message', message);
  };

  return (
    <div>
      <h1>Chat Application</h1>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input type="text" placeholder="Type your message" />
      <button onClick={() => sendMessage("Hello!")}>Send</button>
      <p>Status: {isConnected ? "Connected" : "Disconnected"}</p>
    </div>
  );
}

export default ChatComponent;
