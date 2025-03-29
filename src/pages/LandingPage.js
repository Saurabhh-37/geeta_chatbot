import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Fade,
  Skeleton,
  useScrollTrigger,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import TranslateIcon from '@mui/icons-material/Translate';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { motion, useAnimation } from "framer-motion";
import { styled } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import DesignerImage from '../assets/Designer (4).jpeg';

// Enhanced styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'transparent',
  backdropFilter: 'blur(10px)',
  backgroundColor: alpha(theme.palette.background.paper, 0.8),
  boxShadow: 'none',
  borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: 'all 0.3s ease-in-out',
  '&.scrolled': {
    backgroundColor: alpha(theme.palette.background.paper, 0.95),
    boxShadow: `0 2px 20px ${alpha(theme.palette.common.black, 0.1)}`,
  },
}));

const AnimatedContainer = styled(motion.div)(({ theme }) => ({
  width: '100%',
  height: '100%',
}));

const GlassCard = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${alpha(theme.palette.background.paper, 0.9)} 0%, ${alpha(theme.palette.background.paper, 0.7)} 100%)`,
  backdropFilter: 'blur(10px)',
  borderRadius: theme.shape.borderRadius * 3,
  padding: theme.spacing(4),
  boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
  transition: 'all 0.3s ease-in-out',
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(45deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, transparent 100%)`,
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  },
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: `0 12px 48px ${alpha(theme.palette.common.black, 0.15)}`,
    border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
    '&::before': {
      opacity: 1,
    },
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 1.5rem',
  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.primary.light, 0.1)} 100%)`,
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: -2,
    borderRadius: '50%',
    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    zIndex: -1,
  },
  '& svg': {
    fontSize: 40,
    color: theme.palette.primary.main,
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover': {
    transform: 'scale(1.1)',
    '&::before': {
      opacity: 0.2,
    },
    '& svg': {
      transform: 'scale(1.1)',
      color: theme.palette.primary.dark,
    },
  },
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.dark} 90%)`,
  borderRadius: theme.shape.borderRadius * 2,
  border: 0,
  color: 'white',
  height: 48,
  padding: '0 30px',
  boxShadow: `0 3px 5px 2px ${alpha(theme.palette.primary.main, 0.3)}`,
  transition: 'all 0.3s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 6px 10px 4px ${alpha(theme.palette.primary.main, 0.4)}`,
    '&::before': {
      opacity: 1,
    },
  },
}));

const FloatingParticle = styled(motion.div)(({ theme }) => ({
  position: 'absolute',
  width: 6,
  height: 6,
  borderRadius: '50%',
  background: alpha(theme.palette.primary.main, 0.3),
  pointerEvents: 'none',
}));

const LandingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
        <ListItem component={Link} to="/chat">
          <ListItemText primary="Start Journey" />
        </ListItem>
        <ListItem component={Link} to="/about">
          <ListItemText primary="About" />
        </ListItem>
        <ListItem component={Link} to="/contact">
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      background: 'linear-gradient(135deg, #FFF8F0 0%, #FFE0B2 100%)',
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
    }}>
      {/* AppBar Section */}
      <StyledAppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              background: 'linear-gradient(45deg, #FF9D3D 30%, #FFB74D 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: "left",
            }}
          >
            GeetAI
          </Typography>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
              <GradientButton component={Link} to="/chat">Start Journey</GradientButton>
            </Box>
          )}
        </Toolbar>
      </StyledAppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>

      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, rgba(255, 248, 240, 0.9) 0%, rgba(255, 224, 178, 0.9) 100%)',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 30%, rgba(255, 157, 61, 0.15) 0%, transparent 70%)',
            zIndex: 0,
          },
        }}
      >
        <AnimatedContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
        <Typography
                  variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
                    background: 'linear-gradient(45deg, #FF9D3D 30%, #FFB74D 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
            marginBottom: "1.5rem",
                    fontFamily: '"Playfair Display", serif',
          }}
        >
          Experience Divine Wisdom
        </Typography>
        <Typography
          variant="h5"
          sx={{
                    color: "text.secondary",
            marginBottom: "2rem",
            fontWeight: "400",
                    lineHeight: 1.6,
                    fontFamily: '"Roboto", sans-serif',
          }}
        >
          Discover the teachings of Lord Krishna and find clarity in your life through GeetAI. Ask questions and get answers rooted in the Bhagavad Gita.
        </Typography>
                <GradientButton
          component={Link}
          to="/chat"
                  size="large"
                  sx={{ mt: 2 }}
        >
          Start Your Spiritual Journey
                </GradientButton>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -100,
                      borderRadius: '50%',
                      background: 'radial-gradient(circle at center, rgba(255, 157, 61, 0.1) 0%, rgba(255, 183, 77, 0.05) 40%, rgba(255, 248, 240, 0.02) 80%, transparent 100%)',
                      backdropFilter: 'blur(60px)',
                      zIndex: -3,
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={DesignerImage}
                    alt="Lord Krishna"
                    sx={{
                      width: '100%',
                      maxWidth: 500,
                      height: 'auto',
                      borderRadius: '50%',
                      filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))',
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        inset: 0,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at center, transparent 0%, rgba(255, 248, 240, 0.4) 40%, rgba(255, 224, 178, 0.7) 70%, rgba(255, 248, 240, 0.9) 100%)',
                        backdropFilter: 'blur(15px)',
                        zIndex: 1,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -30,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at center, rgba(255, 157, 61, 0.15) 0%, rgba(255, 183, 77, 0.1) 30%, rgba(255, 248, 240, 0.05) 60%, transparent 100%)',
                        backdropFilter: 'blur(30px)',
                        zIndex: -1,
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        inset: -50,
                        borderRadius: '50%',
                        background: 'radial-gradient(circle at center, rgba(255, 157, 61, 0.1) 0%, rgba(255, 183, 77, 0.05) 40%, rgba(255, 248, 240, 0.02) 80%, transparent 100%)',
                        backdropFilter: 'blur(40px)',
                        zIndex: -2,
                      },
                      transition: 'all 0.5s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.02)',
                        filter: 'drop-shadow(0 15px 30px rgba(0,0,0,0.15))',
                        '&::after': {
                          background: 'radial-gradient(circle at center, transparent 0%, rgba(255, 248, 240, 0.3) 40%, rgba(255, 224, 178, 0.7) 70%, rgba(255, 248, 240, 0.8) 100%)',
                        },
                        '&::before': {
                          background: 'radial-gradient(circle at center, rgba(255, 157, 61, 0.2) 0%, rgba(255, 183, 77, 0.15) 30%, rgba(255, 248, 240, 0.1) 60%, transparent 100%)',
                        }
                      }
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
      </Container>
        </AnimatedContainer>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "4rem",
            fontFamily: '"Playfair Display", serif',
            background: 'linear-gradient(45deg, #FF9D3D 30%, #FFB74D 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Multilingual Support",
              description: "Converse in English, Hindi, Marathi, and more for personalized guidance in your preferred language.",
              icon: <TranslateIcon />,
              gradient: 'linear-gradient(135deg, #FF9D3D 0%, #FFB74D 100%)'
            },
            {
              title: "Bhagavad Gita Insights",
              description: "Receive answers rooted in the Bhagavad Gita's teachings, with relevant verses and explanations.",
              icon: <AutoStoriesIcon />,
              gradient: 'linear-gradient(135deg, #FFB74D 0%, #FFCC80 100%)'
            },
            {
              title: "Personalized Wisdom",
              description: "Ask questions and receive guidance on how to lead a peaceful, purposeful life based on spiritual wisdom.",
              icon: <LightbulbIcon />,
              gradient: 'linear-gradient(135deg, #FFCC80 0%, #FFE0B2 100%)'
            }
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                <GlassCard>
                  <IconWrapper>
                    {feature.icon}
                  </IconWrapper>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: 2,
                      textAlign: 'center',
                      background: feature.gradient,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      textAlign: 'center',
                      lineHeight: 1.6,
                    }}
                  >
                    {feature.description}
                  </Typography>
                </GlassCard>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* About Section */}
      <Box sx={{ 
        bgcolor: 'background.paper', 
        py: 8,
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 70%, rgba(255, 157, 61, 0.1) 0%, transparent 70%)',
          zIndex: 0,
        },
      }}>
        <Container maxWidth="md">
          <GlassCard>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "2rem",
                fontFamily: '"Playfair Display", serif',
                background: 'linear-gradient(45deg, #FF9D3D 30%, #FFB74D 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              What is GeetAI?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: "1.1rem",
                lineHeight: 1.8,
                textAlign: "center",
                mb: 4,
              }}
            >
              GeetAI is an interactive spiritual assistant that brings the divine wisdom of Lord Krishna from the Bhagavad Gita to life. Whether you are seeking answers about life's purpose, overcoming obstacles, or understanding spiritual concepts, GeetAI offers personalized guidance based on sacred verses.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                textAlign: "center",
                fontStyle: "italic",
              }}
            >
              <strong>Disclaimer:</strong> GeetAI is an AI-driven model trained to assist in understanding the teachings of the Bhagavad Gita. It is not a real expert or a replacement for traditional spiritual practices or a guru.
            </Typography>
          </GlassCard>
      </Container>
      </Box>

      {/* How It Works Section */}
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "4rem",
            fontFamily: '"Playfair Display", serif',
            background: 'linear-gradient(45deg, #FF9D3D 30%, #FFB74D 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          How It Works
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              step: "1",
              title: "Ask Your Question",
              description: "Type your spiritual query or life question in any supported language.",
              icon: "❓"
            },
            {
              step: "2",
              title: "AI Analysis",
              description: "Our AI analyzes your question and searches through the Bhagavad Gita's teachings.",
              icon: "🔍"
            },
            {
              step: "3",
              title: "Get Divine Wisdom",
              description: "Receive personalized guidance based on relevant verses and interpretations.",
              icon: "✨"
            }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                <GlassCard>
                  <Box sx={{ 
                    width: 60, 
                    height: 60, 
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FF9D3D 0%, #FFB74D 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'white',
                    fontSize: '2rem',
                  }}>
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: 2,
                      textAlign: 'center',
                    }}
                  >
                    {item.title}
              </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      textAlign: 'center',
                      lineHeight: 1.6,
                    }}
                  >
                    {item.description}
              </Typography>
                </GlassCard>
              </Fade>
            </Grid>
          ))}
          </Grid>
      </Container>

      {/* Statistics Section */}
      <Box sx={{ 
        py: 8,
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(255, 248, 240, 0.9) 0%, rgba(255, 224, 178, 0.9) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 30%, rgba(255, 157, 61, 0.15) 0%, transparent 70%)',
          zIndex: 0,
        },
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
            {[
              { number: "10K+", label: "Questions Answered" },
              { number: "5+", label: "Languages Supported" },
              { number: "700+", label: "Gita Verses Referenced" },
              { number: "98%", label: "User Satisfaction" }
            ].map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "bold",
                        background: 'linear-gradient(45deg, #FF9D3D 30%, #FFB74D 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        mb: 1,
                      }}
                    >
                      {stat.number}
              </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "text.secondary",
                        fontWeight: "500",
                      }}
                    >
                      {stat.label}
              </Typography>
            </Box>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
            </Box>

      {/* FAQ Section */}
      <Container maxWidth="md" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "4rem",
            fontFamily: '"Playfair Display", serif',
            background: 'linear-gradient(45deg, #FF9D3D 30%, #FFB74D 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={3}>
          {[
            {
              question: "How accurate are the responses?",
              answer: "GeetAI provides responses based on the Bhagavad Gita's teachings, cross-referenced with multiple interpretations and commentaries. While it strives for accuracy, it's recommended to consult with spiritual teachers for deeper understanding."
            },
            {
              question: "Can I ask questions in different languages?",
              answer: "Yes! GeetAI supports multiple languages including English, Hindi, Marathi, and more. You can ask questions in your preferred language and receive responses in the same language."
            },
            {
              question: "Is GeetAI a replacement for spiritual guidance?",
              answer: "No, GeetAI is designed to be a supplementary tool for understanding the Bhagavad Gita's teachings. It's recommended to use it alongside traditional spiritual practices and guidance from qualified teachers."
            }
          ].map((faq, index) => (
            <Grid item xs={12} key={index}>
              <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                <GlassCard>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: 2,
                      color: "primary.main",
                    }}
                  >
                    {faq.question}
        </Typography>
        <Typography
          variant="body1"
          sx={{
                      color: "text.secondary",
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </GlassCard>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ 
        py: 8,
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(255, 248, 240, 0.9) 0%, rgba(255, 224, 178, 0.9) 100%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 70% 70%, rgba(255, 157, 61, 0.15) 0%, transparent 70%)',
          zIndex: 0,
        },
      }}>
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            sx={{
              fontWeight: "bold",
            textAlign: "center",
              marginBottom: "4rem",
              fontFamily: '"Playfair Display", serif',
              background: 'linear-gradient(45deg, #FF9D3D 30%, #FFB74D 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              position: 'relative',
              zIndex: 1,
            }}
          >
            What Our Users Say
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: "Priya Sharma",
                role: "Spiritual Seeker",
                testimonial: "GeetAI has helped me understand complex concepts from the Bhagavad Gita in a simple way. The responses are always thoughtful and relevant.",
                avatar: "👩"
              },
              {
                name: "Rajesh Patel",
                role: "Yoga Teacher",
                testimonial: "As a yoga teacher, I often use GeetAI to find relevant verses for my classes. It's a valuable resource for spiritual teaching.",
                avatar: "🧘"
              },
              {
                name: "Anita Desai",
                role: "Student",
                testimonial: "The multilingual support is amazing! I can ask questions in Hindi and get detailed answers in the same language.",
                avatar: "👨‍🎓"
              }
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                  <GlassCard sx={{ height: '100%' }}>
                    <Box sx={{ 
                      width: 60, 
                      height: 60, 
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FF9D3D 0%, #FFB74D 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                      fontSize: '2rem',
                    }}>
                      {testimonial.avatar}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "text.secondary",
                        textAlign: 'center',
                        lineHeight: 1.6,
                        mb: 2,
                        fontStyle: 'italic',
                      }}
                    >
                      "{testimonial.testimonial}"
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        textAlign: 'center',
                        color: "primary.main",
                      }}
                    >
                      {testimonial.name}
        </Typography>
        <Typography
          variant="body2"
          sx={{
                        color: "text.secondary",
                        textAlign: 'center',
                      }}
                    >
                      {testimonial.role}
                    </Typography>
                  </GlassCard>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Blog/Insights Section */}
      <Container maxWidth="lg" sx={{ py: 8, position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "4rem",
            fontFamily: '"Playfair Display", serif',
            background: 'linear-gradient(45deg, #FF9D3D 30%, #FFB74D 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Latest Insights
        </Typography>
        <Grid container spacing={4}>
          {[
            {
              title: "Understanding Karma Yoga",
              excerpt: "Explore the concept of selfless action and its relevance in modern life.",
              date: "March 15, 2024",
              readTime: "5 min read",
              image: "🎯"
            },
            {
              title: "The Path to Inner Peace",
              excerpt: "Learn how the Bhagavad Gita guides us towards mental tranquility.",
              date: "March 10, 2024",
              readTime: "4 min read",
              image: "🕊️"
            },
            {
              title: "Wisdom for Modern Life",
              excerpt: "Applying ancient wisdom to contemporary challenges.",
              date: "March 5, 2024",
              readTime: "6 min read",
              image: "📚"
            }
          ].map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Fade in timeout={1000} style={{ transitionDelay: `${index * 200}ms` }}>
                <GlassCard>
                  <Box sx={{ 
                    width: '100%',
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    marginBottom: 2,
                    background: 'linear-gradient(135deg, rgba(255, 157, 61, 0.1) 0%, rgba(255, 183, 77, 0.1) 100%)',
                    borderRadius: 2,
                  }}>
                    {post.image}
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: 1,
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "text.secondary",
                      marginBottom: 2,
                      lineHeight: 1.6,
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    color: 'text.secondary',
                    fontSize: '0.875rem',
                  }}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </Box>
                </GlassCard>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer Section */}
      <Box
        sx={{
          bgcolor: 'background.paper',
          py: 4,
          borderTop: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        <Container maxWidth="lg">
        <Typography
          variant="body2"
          sx={{
              color: "text.secondary",
              textAlign: "center",
          }}
        >
          © 2025 GeetAI. All rights reserved.
        </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
