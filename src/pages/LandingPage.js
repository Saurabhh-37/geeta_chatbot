import React from "react";
import { Button, Box, Typography, Container, Grid, Avatar, Paper, AppBar, Toolbar, Link as MuiLink, IconButton } from "@mui/material";
import KrishnaAvatar from "../assets/krishna-avatar.jpeg";
import ChatIcon from "@mui/icons-material/Chat";
import TranslateIcon from "@mui/icons-material/Translate";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const SAFFRON = "#FFA726";
const GOLD = "#FFD700";
const BLUE = "#B3E5FC";

const shineKeyframes = `
  @keyframes shine {
    0% { background-position: -200px 0; }
    100% { background-position: 200px 0; }
  }
`;

const GlassyCard = ({ children, sx }) => (
  <Paper
    elevation={0}
    sx={{
      borderRadius: 6,
      bgcolor: "rgba(255,255,255,0.82)",
      boxShadow: "0 8px 32px 0 rgba(60,60,67,0.10)",
      backdropFilter: "blur(18px)",
      WebkitBackdropFilter: "blur(18px)",
      p: { xs: 3, md: 5 },
      ...sx,
    }}
  >
    {children}
  </Paper>
);

const FeatureCard = ({ icon, title, desc }) => (
  <Paper
    elevation={0}
    sx={{
      borderRadius: 4,
      bgcolor: "rgba(255,255,255,0.92)",
      boxShadow: "0 4px 24px 0 rgba(60,60,67,0.10)",
      p: 3,
      textAlign: "center",
      minHeight: 180,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.2s cubic-bezier(.4,2,.6,1)",
      '&:hover': { transform: 'translateY(-6px) scale(1.04)' },
    }}
  >
    <Box sx={{ mb: 1 }}>{icon}</Box>
    <Typography variant="h6" sx={{ color: SAFFRON, fontWeight: 700 }}>{title}</Typography>
    <Typography variant="body2" sx={{ color: "#666", mt: 1 }}>{desc}</Typography>
  </Paper>
);

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const LandingPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        position: "relative",
        background: `linear-gradient(120deg, #fffbe7 0%, #fff 60%, ${BLUE} 100%)`,
        '::before': {
          content: '""',
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '120vw',
          height: '120vh',
          background: `radial-gradient(circle at 60% 20%, ${GOLD}33 0%, transparent 60%), radial-gradient(circle at 20% 80%, ${SAFFRON}22 0%, transparent 70%)`,
          filter: 'blur(60px)',
          zIndex: 0,
        },
      }}
    >
      <style>{shineKeyframes}</style>
      {/* SaaS Header */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: 'rgba(255,255,255,0.85)',
          color: '#222',
          boxShadow: '0 2px 16px 0 rgba(60,60,67,0.07)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: `1px solid #f3e9d7`,
          zIndex: 10,
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: 72 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Avatar src={KrishnaAvatar} alt="GeetAI" sx={{ width: 40, height: 40, mr: 1, boxShadow: `0 0 0 2px ${SAFFRON}44` }} />
            <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1, color: SAFFRON }}>
              GeetAI
            </Typography>
            <Typography variant="body2" sx={{ color: '#888', ml: 2, display: { xs: 'none', md: 'block' } }}>
              Conversational Gita Wisdom
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, pt: 8, pb: 4 }}>
        {/* Hero Section */}
        <GlassyCard sx={{
          maxWidth: 600,
          mx: 'auto',
          textAlign: 'center',
          borderRadius: 8,
          boxShadow: '0 12px 48px 0 rgba(60,60,67,0.10)',
          mb: 6,
          position: 'relative',
        }}>
          <Avatar src={KrishnaAvatar} alt="Krishna" sx={{ width: 80, height: 80, mx: 'auto', mb: 2, boxShadow: `0 0 0 4px ${SAFFRON}44` }} />
          <Typography variant="h2" sx={{ fontWeight: 800, color: SAFFRON, mb: 1, letterSpacing: 1, fontSize: { xs: '2rem', md: '2.5rem' } }}>
            "Hey Krishna, what should I do?"
          </Typography>
          <Typography variant="h5" sx={{ color: "#444", mb: 3, fontWeight: 400, fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
            Your personal Gita guide, always ready to chat. Ask anything. Get wisdom, clarity, and peace—Apple style.
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<ChatIcon />}
            href="/chat"
            sx={{
              background: `linear-gradient(90deg, ${SAFFRON} 60%, ${GOLD} 100%)`,
              color: "#fff",
              fontWeight: 700,
              px: 4,
              py: 1.5,
              fontSize: "1.15rem",
              borderRadius: 99,
              boxShadow: `0 4px 24px 0 ${GOLD}33` ,
              textTransform: 'none',
              letterSpacing: 0.5,
              minWidth: 180,
              position: 'relative',
              overflow: 'hidden',
              '::after': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(120deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 60%, rgba(255,255,255,0.25) 100%)',
                backgroundSize: '200px 100%',
                animation: 'shine 2.5s linear infinite',
                borderRadius: 99,
                pointerEvents: 'none',
              },
              '&:hover': { background: `linear-gradient(90deg, ${GOLD} 60%, ${SAFFRON} 100%)` },
            }}
          >
            Start Chatting
          </Button>
        </GlassyCard>

        {/* Features Row */}
        <div id="features">
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 6 }}>
            <Grid item xs={12} sm={4}>
              <FeatureCard
                icon={<TranslateIcon sx={{ color: SAFFRON, fontSize: 40 }} />}
                title="Multilingual"
                desc="Chat in English, Hindi, Marathi, or your language."
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FeatureCard
                icon={<EmojiObjectsIcon sx={{ color: GOLD, fontSize: 40 }} />}
                title="Gita Wisdom"
                desc="Get real Sanskrit shlokas with clear, modern explanations."
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FeatureCard
                icon={<ChatIcon sx={{ color: BLUE, fontSize: 40 }} />}
                title="Conversational"
                desc="Ask anything, anytime. Krishna answers with compassion."
              />
            </Grid>
          </Grid>
        </div>

        {/* Quote Bubble Preview */}
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 6,
        }}>
          <Paper
            elevation={0}
            sx={{
              borderRadius: 5,
              bgcolor: 'rgba(255,255,255,0.95)',
              boxShadow: `0 2px 16px 0 ${BLUE}33`,
              px: { xs: 2, md: 4 },
              py: { xs: 2, md: 3 },
              maxWidth: 420,
              textAlign: 'left',
              fontSize: '1.1rem',
              position: 'relative',
              '::before': {
                content: '""',
                position: 'absolute',
                left: 32,
                bottom: -18,
                width: 32,
                height: 18,
                background: 'rgba(255,255,255,0.95)',
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                boxShadow: `0 2px 8px 0 ${BLUE}22`,
                zIndex: 1,
              },
            }}
          >
            <Typography variant="body2" sx={{ color: '#888', mb: 1 }}>
              <b>User:</b> How can I stay calm during tough times?
            </Typography>
            <Typography variant="body2" sx={{ color: SAFFRON, mb: 1 }}>
              <b>Krishna:</b> True calmness comes from within. As the Gita says:
            </Typography>
            <Typography variant="body2" sx={{ color: '#444', fontStyle: 'italic', mb: 1 }}>
              समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते। (2.15)
            </Typography>
            <Typography variant="body2" sx={{ color: '#666' }}>
              One who remains steady in both happiness and distress is fit for liberation. Practice equanimity and peace will follow.
            </Typography>
          </Paper>
        </Box>

        {/* FAQ Section */}
        <div id="faq">
          <GlassyCard sx={{ maxWidth: 700, mx: 'auto', mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: SAFFRON, mb: 3, textAlign: 'center', letterSpacing: 0.5 }}>Frequently Asked Questions</Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: SAFFRON }}>Is GeetAI free?</Typography>
                <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                  Yes, GeetAI is free to use for all users.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: SAFFRON }}>Can I use GeetAI in my language?</Typography>
                <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                  Yes! GeetAI supports English, Hindi, Marathi, and more.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: SAFFRON }}>Are my questions private?</Typography>
                <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                  Absolutely. Your questions and data are never shared or stored.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: SAFFRON }}>Is this a replacement for a guru?</Typography>
                <Typography variant="body2" sx={{ color: '#666', mt: 1 }}>
                  GeetAI is a guide, not a replacement for a real teacher or spiritual practice.
                </Typography>
              </Grid>
            </Grid>
          </GlassyCard>
        </div>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            mt: 8,
            py: 5,
            textAlign: 'center',
            borderRadius: 6,
            background: `linear-gradient(90deg, #fffbe7 60%, ${BLUE} 100%)`,
            boxShadow: '0 2px 24px 0 rgba(60,60,67,0.08)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 3,
          }}
        >
          <Box>
            <Typography variant="body2" sx={{ color: "#888", fontSize: "0.95rem" }}>
              © 2025 GeetAI. All rights reserved.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center' }}>
            <IconButton href="https://twitter.com/" target="_blank" sx={{ color: '#888' }}><TwitterIcon /></IconButton>
            <IconButton href="https://linkedin.com/" target="_blank" sx={{ color: '#888' }}><LinkedInIcon /></IconButton>
            <IconButton href="https://github.com/" target="_blank" sx={{ color: '#888' }}><GitHubIcon /></IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage;
