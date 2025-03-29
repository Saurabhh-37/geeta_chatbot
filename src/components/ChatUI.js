import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Paper,
  styled,
  alpha,
  Fade,
  CircularProgress,
} from "@mui/material";
import { FiPhone, FiVideo, FiSend } from "react-icons/fi";
import { generateResponse } from "../services/geminiAPI"; // Import the API service
import KrishnaAvatar from "../assets/krishna-avatar.jpeg";
import { motion, AnimatePresence } from "framer-motion";

// Enhanced styled components
const ChatContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  background: `linear-gradient(135deg, ${alpha(theme.palette.background.default, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.9)} 100%)`,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255, 157, 61, 0.1) 0%, rgba(255, 183, 77, 0.05) 100%)',
    zIndex: 0,
  },
}));

const Header = styled(Box)(({ theme }) => ({
  padding: "1rem",
  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
  backdropFilter: 'blur(10px)',
  boxShadow: `0 2px 20px ${alpha(theme.palette.common.black, 0.1)}`,
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  position: 'relative',
  zIndex: 1,
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
}));

const MessagesContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: "1rem",
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  position: 'relative',
  zIndex: 1,
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: alpha(theme.palette.background.paper, 0.1),
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: alpha(theme.palette.primary.main, 0.2),
    borderRadius: '4px',
    '&:hover': {
      background: alpha(theme.palette.primary.main, 0.3),
    },
  },
}));

const MessageBubble = styled(motion(Paper))(({ theme, isOwn }) => ({
  padding: "0.75rem 1rem",
  maxWidth: "70%",
  width: "fit-content",
  alignSelf: isOwn ? "flex-end" : "flex-start",
  background: isOwn 
    ? `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`
    : `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
  backdropFilter: 'blur(10px)',
  color: isOwn ? "#ffffff" : theme.palette.text.primary,
  borderRadius: "1.5rem",
  position: "relative",
  boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.1)}`,
  border: `1px solid ${alpha(isOwn ? theme.palette.primary.main : theme.palette.divider, 0.1)}`,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 6px 16px ${alpha(theme.palette.common.black, 0.15)}`,
  },
}));

const InputContainer = styled(Box)(({ theme }) => ({
  padding: "1rem",
  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
  backdropFilter: 'blur(10px)',
  display: "flex",
  gap: "1rem",
  alignItems: "center",
  position: 'relative',
  zIndex: 1,
  borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
}));

const SendButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#ffffff',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    transform: 'scale(1.05)',
  },
  '&:disabled': {
    backgroundColor: alpha(theme.palette.primary.main, 0.5),
  },
}));

const ChatUI = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you today?", isOwn: false },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (message.trim()) {
      const newMessages = [
        ...messages,
        { id: messages.length + 1, text: message, isOwn: true },
      ];
      setMessages(newMessages);
      setMessage("");

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
          src={KrishnaAvatar}
          alt="Charioteer"
          sx={{ 
            width: 48,
            height: 48,
            border: `2px solid ${alpha('#FF9D3D', 0.3)}`,
            boxShadow: `0 4px 12px ${alpha('#FF9D3D', 0.2)}`,
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              border: `2px solid ${alpha('#FF9D3D', 0.5)}`,
            },
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: "bold",
              background: 'linear-gradient(45deg, #FF9D3D 30%, #FFB74D 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Charioteer
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Your Spiritual Guide
          </Typography>
        </Box>
      </Header>

      <MessagesContainer>
        <AnimatePresence>
          {messages.map((msg) => (
            <Fade in timeout={500} key={msg.id}>
              <MessageBubble
                isOwn={msg.isOwn}
                elevation={0}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.6,
                    letterSpacing: '0.2px',
                  }}
                >
                  {msg.text}
                </Typography>
              </MessageBubble>
            </Fade>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <CircularProgress 
              size={24} 
              sx={{ 
                color: 'primary.main',
                animation: 'pulse 1.5s infinite',
              }}
            />
          </Box>
        )}
      </MessagesContainer>

      <InputContainer>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ask your question..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "2rem",
              background: alpha('#ffffff', 0.8),
              backdropFilter: 'blur(10px)',
              "& fieldset": {
                borderColor: alpha('#FF9D3D', 0.3),
              },
              "&:hover fieldset": {
                borderColor: alpha('#FF9D3D', 0.5),
              },
              "&.Mui-focused fieldset": {
                borderColor: '#FF9D3D',
              },
              "&.Mui-focused": {
                boxShadow: `0 0 0 2px ${alpha('#FF9D3D', 0.2)}`,
              },
            },
            "& .MuiInputBase-input": {
              color: '#000000',
            },
          }}
        />
        <SendButton
          onClick={handleSend}
          disabled={!message.trim() || loading}
          aria-label="send message"
        >
          <FiSend />
        </SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatUI;
