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
import KrishnaAvatar from "../assets/krishna-avatar.jpeg";

const ChatContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FBFBFB",
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
  backgroundColor: isOwn ? "#FF9D3D" : "#ffffff",
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
          src="/assets/krishna-avatar.jpeg"
          alt="Charioteer"
          sx={{ 
            width: 48,
            height: 48,
            backgroundColor: "#FF9D3D", // Orange background color 
            }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6">Charioteer</Typography>
          <Typography variant="body2" color="text.secondary">
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
            Thinking...
          </Typography>
        )}
      </MessagesContainer>

      <InputContainer>
      <TextField
  fullWidth
  variant="outlined"
  placeholder="Ask..."
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  onKeyPress={handleKeyPress}
  size="small"
  sx={{
    "& .MuiOutlinedInput-root": {
      borderRadius: "2rem",
      "& fieldset": {
        borderColor: "#D9DFC6", // Default border color
      },
      "&:hover fieldset": {
        borderColor: "#FFBD73", // Border color on hover
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FF9D3D", // Border color when focused
      },
      "&.Mui-focused": {
        boxShadow: "none", // Removes the default blue outline
      },
    },
    "& .MuiInputBase-input": {
      color: "#000000", // Text color
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "#FF9D3D", // Border color
    },
  }}
/>


        <IconButton
          color="#FFBD73"
          onClick={handleSend}
          disabled={!message.trim()}
          aria-label="send message"
          sx={{
            backgroundColor: "#FFBD73",
            color: "#ffffff",
            "&:hover": { backgroundColor: "#FF9D3D" },
          }}
        >
          <FiSend />
        </IconButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatUI;
