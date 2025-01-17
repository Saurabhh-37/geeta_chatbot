import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Paper,
  styled,
} from "@mui/material";
import { FiPhone, FiVideo, FiSend } from "react-icons/fi";
import { generateResponse } from "../services/geminiAPI"; // Import the API service

const ChatContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#f5f5f5",
}));

const Header = styled(Box)({
  padding: "1rem",
  backgroundColor: "#ffffff",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
});

const MessagesContainer = styled(Box)({
  flex: 1,
  padding: "1rem",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const MessageBubble = styled(Paper)(({ isOwn }) => ({
  padding: "0.75rem 1rem",
  maxWidth: "70%",
  width: "fit-content",
  alignSelf: isOwn ? "flex-end" : "flex-start",
  backgroundColor: isOwn ? "#1976d2" : "#ffffff",
  color: isOwn ? "#ffffff" : "#000000",
  borderRadius: "1rem",
  position: "relative",
}));

const InputContainer = styled(Box)({
  padding: "1rem",
  backgroundColor: "#ffffff",
  display: "flex",
  gap: "1rem",
  alignItems: "center",
});

const ChatUI = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you today?", isOwn: false },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (message.trim()) {
      const newMessages = [
        ...messages,
        { id: messages.length + 1, text: message, isOwn: true },
      ];
      setMessages(newMessages);
      setMessage(""); // Clear the input field

      // Call the Gemini API to get the response
      setLoading(true);
      try {
        const response = await generateResponse(message);
        setMessages([
          ...newMessages,
          { id: newMessages.length + 1, text: response, isOwn: false },
        ]);
      } catch (error) {
        setMessages([
          ...newMessages,
          { id: newMessages.length + 1, text: "Failed to fetch response.", isOwn: false },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <ChatContainer>
      <Header>
        <Avatar
          src="/assets/krishna-avatar.png"
          alt="Krishna Avatar"
          sx={{ width: 48, height: 48 }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">Charioteer</Typography>
          <Typography variant="body2" color="text.secondary">
            Online
          </Typography>
        </Box>
        {/* <IconButton aria-label="voice call" color="primary">
          <FiPhone />
        </IconButton>
        <IconButton aria-label="video call" color="primary">
          <FiVideo />
        </IconButton> */}
      </Header>

      <MessagesContainer>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} isOwn={msg.isOwn} elevation={0}>
            <Typography variant="body1">{msg.text}</Typography>
          </MessageBubble>
        ))}
        {loading && (
          <Typography variant="body2" align="center" color="text.secondary">
            Krishna is thinking...
          </Typography>
        )}
      </MessagesContainer>

      <InputContainer>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ask Krishna..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          size="small"
          sx={{ "& .MuiOutlinedInput-root": { borderRadius: "2rem" } }}
        />
        <IconButton
          color="primary"
          onClick={handleSend}
          disabled={!message.trim()}
          aria-label="send message"
          sx={{
            backgroundColor: "#1976d2",
            color: "#ffffff",
            "&:hover": { backgroundColor: "#1565c0" },
          }}
        >
          <FiSend />
        </IconButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatUI;
