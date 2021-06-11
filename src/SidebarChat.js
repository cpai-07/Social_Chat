import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import db from "./firebase";
import "./SidebarChat.css";

function SidebarChat({ addNewChat, name, id }) {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  useEffect(() => {
    db.collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [id]);

  const createChat = () => {
    const roomName = prompt("Enter Room Name");

    // As soon as i enter roomName in prompt,the roomName will be added to the collection.
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  // if thre is no add new Chat then display <link> else  <div>
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarchat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarchat-info">
          <h2>{name}</h2>
          <p> {messages[messages.length - 1]?.messages}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="addnewchat" onClick={createChat}>
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
