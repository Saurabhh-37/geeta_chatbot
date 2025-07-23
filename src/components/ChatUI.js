import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  TextField,
  Paper,
  styled,
  useTheme,
  useMediaQuery,
  CircularProgress,
  Divider,
  alpha,
} from "@mui/material";
import { FiSend } from "react-icons/fi";
import { generateResponse } from "../services/geminiAPI";
import KrishnaAvatar from "../assets/krishna-avatar.jpeg";
import { styled as muiStyled } from "@mui/material/styles";

const HEADER_HEIGHT = 56;
const INPUT_HEIGHT = 90;

// Saffron and gold palette
const SAFFRON = "#FFA726"; // soft saffron
const SAFFRON_DARK = "#FF9933"; // deep saffron
const GOLD = "#FFD700";
const GOLD_SOFT = "#FFECB3";

const FrostedContainer = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  background: "#fff",
  position: "relative",
  overflow: "hidden",
  // Removed ::before and ::after for a clean white background
}));

const FrostedHeader = styled(Box)(({ theme }) => ({
  height: HEADER_HEIGHT,
  minHeight: HEADER_HEIGHT,
  maxHeight: HEADER_HEIGHT,
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  padding: "0.5rem 1rem 0.5rem 1rem",
  background: "rgba(255,255,255,0.85)",
  boxShadow: `0 4px 32px 0 ${alpha(SAFFRON, 0.08)}`,
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
  zIndex: 20,
  // borderBottom removed for seamless look
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
}));

const GlowingAvatarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `conic-gradient(from 180deg at 50% 50%, ${SAFFRON} 0deg, ${GOLD} 120deg, #fff 360deg)` ,
  borderRadius: '50%',
  padding: 3,
  boxShadow: `0 0 0 4px ${GOLD_SOFT}, 0 2px 12px 0 ${alpha(SAFFRON, 0.13)}`,
}));

const MacAvatar = styled(Avatar)(({ theme }) => ({
  width: 40,
  height: 40,
  boxShadow: `0 2px 8px 0 ${GOLD_SOFT}`,
  border: `2px solid #fff`,
  background: `linear-gradient(135deg, #fff 60%, ${GOLD_SOFT} 100%)`,
}));

const MessagesContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  position: 'absolute',
  top: HEADER_HEIGHT,
  bottom: 0,
  left: 0,
  right: 0,
  padding: "2.2rem 0.5rem 6.5rem 0.5rem", // Increased bottom padding for input bar
  overflowY: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "1.2rem",
  zIndex: 5,
  background: `linear-gradient(120deg, #fffbe7 0%, #fff 60%, #B3E5FC 100%)`, // Apple-inspired SaaS gradient
  boxShadow: `0 4px 32px 0 ${alpha(GOLD_SOFT, 0.13)}`,
  borderRadius: 0,
  backdropFilter: 'blur(18px)',
  WebkitBackdropFilter: 'blur(18px)',
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'thin',
  '&::-webkit-scrollbar': {
    width: 6,
    background: 'transparent',
  },
  '&::-webkit-scrollbar-thumb': {
    background: alpha(GOLD_SOFT, 0.7),
    borderRadius: 6,
  },
}));

const IMessageBubble = muiStyled(
  Paper,
  { shouldForwardProp: (prop) => prop !== "isOwn" }
)(({ isOwn, theme }) => ({
  padding: "1.05rem 1.5rem",
  maxWidth: "75%",
  width: "fit-content",
  alignSelf: isOwn ? "flex-end" : "flex-start",
  background: isOwn
    ? `linear-gradient(135deg, #fff 60%, ${alpha(SAFFRON, 0.18)} 100%)`
    : `linear-gradient(135deg, #fff 60%, ${alpha(GOLD_SOFT, 0.18)} 100%)`,
  color: isOwn ? SAFFRON_DARK : theme.palette.text.primary,
  borderRadius: isOwn
    ? "1.5rem 1.5rem 0.5rem 1.5rem"
    : "1.5rem 1.5rem 1.5rem 0.5rem",
  boxShadow: isOwn
    ? `0 4px 24px 0 ${alpha(SAFFRON, 0.13)}, 0 1.5px 6px 0 #fff`
    : `0 2px 12px 0 ${alpha(GOLD_SOFT, 0.13)}, 0 1.5px 6px 0 #fff`,
  fontSize: "1.12rem",
  position: "relative",
  transition: "background 0.2s, box-shadow 0.2s",
  animation: "fadeIn 0.5s cubic-bezier(.4,2,.6,1)",
  border: isOwn ? `1.5px solid ${SAFFRON}` : `1.5px solid ${GOLD_SOFT}`,
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(20px) scale(0.98)' },
    to: { opacity: 1, transform: 'translateY(0) scale(1)' },
  },
  '&:after': isOwn ? {
    content: '""',
    position: 'absolute',
    right: -10,
    bottom: 8,
    width: 16,
    height: 16,
    background: `linear-gradient(135deg, #fff 60%, ${SAFFRON} 100%)`,
    borderBottomRightRadius: 16,
    transform: 'skew(-20deg, 0deg) rotate(25deg)',
    zIndex: 1,
    opacity: 0.18,
  } : {},
}));

const FrostedInputBar = styled(Box)(({ theme }) => ({
  minHeight: 64,
  width: '100%',
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  padding: theme.breakpoints.down('sm') ? '0.5rem 0.5rem' : '1.1rem 1.5rem',
  background: "rgba(255,255,255,0.96)",
  display: "flex",
  gap: "0.5rem",
  alignItems: "center",
  // borderTop removed for seamless look
  boxShadow: `0 -4px 32px 0 ${alpha(GOLD_SOFT, 0.18)}`,
  zIndex: 20,
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
  boxSizing: 'border-box',
  borderRadius: '1.5rem 1.5rem 0 0',
}));

const BouncySendButton = styled(IconButton)(({ theme }) => ({
  background: `conic-gradient(from 180deg at 50% 50%, ${SAFFRON} 0deg, ${GOLD} 120deg, #fff 360deg)` ,
  color: SAFFRON_DARK,
  borderRadius: "50%",
  boxShadow: `0 2px 12px ${alpha(SAFFRON, 0.13)}, 0 1.5px 6px 0 #fff` ,
  transition: "all 0.18s cubic-bezier(.4,2,.6,1)",
  minWidth: 48,
  minHeight: 48,
  width: 48,
  height: 48,
  fontSize: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    background: `conic-gradient(from 180deg at 50% 50%, ${GOLD} 0deg, ${SAFFRON} 120deg, #fff 360deg)` ,
    boxShadow: `0 4px 24px ${alpha(SAFFRON, 0.18)}`,
    transform: "scale(1.12)",
  },
  '&:active': {
    transform: "scale(0.96)",
  },
  '&:disabled': {
    background: `${alpha(GOLD_SOFT, 0.7)}`,
    color: SAFFRON,
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: 0,
    height: 0,
    background: alpha(SAFFRON, 0.15),
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    transition: 'width 0.3s cubic-bezier(.4,2,.6,1), height 0.3s cubic-bezier(.4,2,.6,1)',
    zIndex: 0,
  },
  '&:active:after': {
    width: 60,
    height: 60,
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 40,
    minHeight: 40,
    width: 40,
    height: 40,
    fontSize: 20,
  },
}));

const Loader = () => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, py: 1 }}>
    <CircularProgress size={20} sx={{ color: SAFFRON_DARK }} />
    <Typography variant="body2" color="text.secondary">Shiva is thinking...</Typography>
  </Box>
);

const ChatUI = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you today?", isOwn: false },
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

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
    <FrostedContainer>
      <FrostedHeader>
        <GlowingAvatarWrapper>
          <MacAvatar
            src={KrishnaAvatar}
            alt="Charioteer"
          />
        </GlowingAvatarWrapper>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
              fontWeight: 700,
              color: SAFFRON_DARK,
              letterSpacing: 0.5,
              fontSize: '1.18rem',
            }}
          >
            Charioteer
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400, fontSize: '0.98rem', color: GOLD }}>
            Your Spiritual Guide
          </Typography>
        </Box>
      </FrostedHeader>
      <MessagesContainer>
        {messages.map((msg) => (
          <IMessageBubble key={msg.id} isOwn={msg.isOwn} elevation={0}>
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line', fontSize: '1.12rem', fontFamily: 'inherit', fontWeight: 500 }}>{msg.text}</Typography>
          </IMessageBubble>
        ))}
        {loading && <Loader />}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      <FrostedInputBar>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Ask Charioteer..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          size="medium"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '2rem',
              background: 'rgba(255,255,255,0.7)',
              boxShadow: `0 2px 8px ${alpha(GOLD_SOFT, 0.18)}`,
              fontFamily: 'inherit',
              fontWeight: 500,
              '& fieldset': {
                borderColor: GOLD_SOFT,
              },
              '&:hover fieldset': {
                borderColor: SAFFRON,
              },
              '&.Mui-focused fieldset': {
                borderColor: SAFFRON_DARK,
              },
            },
            '& .MuiInputBase-input': {
              color: SAFFRON_DARK,
              fontSize: '1.12rem',
              fontFamily: 'inherit',
              fontWeight: 500,
            },
          }}
        />
        <BouncySendButton
          onClick={handleSend}
          disabled={!message.trim() || loading}
          aria-label="send message"
        >
          <FiSend />
        </BouncySendButton>
      </FrostedInputBar>
    </FrostedContainer>
  );
};

export default ChatUI;
