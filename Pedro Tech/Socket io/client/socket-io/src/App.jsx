import React from "react";
import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:5000");

const App = () => {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [receivedMessage, setReceivedMessage] = useState("");
  function sendMessage() {
    socket.emit("send_message", { message, room });
  }

  function joinRoom() {
    if (room !== "") socket.emit("join_room", room);
  }

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceivedMessage(data.message);
    });
  }, [socket]);
  return (
    <div className="App">
      <div className="room">
        <input
          type="text"
          placeholder="Room No..."
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>
      <div className="mess">
        <input
          type="text"
          placeholder="Message..."
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={sendMessage}>Send Message</button>
      </div>
      <h1>Message</h1>
      {receivedMessage}
    </div>
  );
};

export default App;
