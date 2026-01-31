import { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

function Chat({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = () => {
    if (!currentMessage) return;

    const messageData = {
      room,
      author: username,
      message: currentMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    };

    socket.emit("send_message", messageData);

    setCurrentMessage("");
  };

  useEffect(() => {
    const handler = (data) => {
      setMessageList((list) => [...list, data]);
    };

    socket.on("receive_message", handler);

    return () => {
      socket.off("receive_message", handler);
    };
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Room: {room}</p>
      </div>

      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((msg, i) => (
            <div
              key={i}
              className="message"
              id={msg.author === username ? "you" : "other"}
            >
              <div className="message-content">
                <p>{msg.message}</p>
              </div>
              <div className="message-meta">
                <div className="message-time">{msg.time}</div>
                <div className="message-author">{msg.author}</div>
              </div>
            </div>
          ))}
        </ScrollToBottom>
      </div>

      <div className="chat-footer">
        <input
          value={currentMessage}
          placeholder="Hey..."
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>▶</button>
      </div>
    </div>
  );
}

export default Chat;
