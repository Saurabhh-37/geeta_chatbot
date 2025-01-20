import React from "react";
import { Box, Typography, Button, Container, Grid, useTheme, useMediaQuery } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const quotes = [
    {
      text: "You have the right to perform your duty, but not to the fruits of your actions.",
      reference: "Bhagavad Gita, Chapter 2, Verse 47",
    },
    {
      text: "A person is said to be elevated when they remain unaffected by joy or sorrow.",
      reference: "Bhagavad Gita, Chapter 2, Verse 15",
    },
    {
      text: "Set thy heart upon thy work, but never on its reward.",
      reference: "Bhagavad Gita, Chapter 2, Verse 47",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", py: 4 }}>
      {/* Hero Section */}
      <Box sx={{ mb: 6 }}>
        <Typography
          variant={isMobile ? "h4" : "h2"}
          sx={{ fontFamily: "'Merriweather', serif", fontWeight: 700, color: "#FF9D3D" }}
        >
          Seek Divine Guidance
        </Typography>
        <Typography
          variant={isMobile ? "body1" : "h6"}
          sx={{ fontFamily: "'Roboto', sans-serif", color: "#5A5A5A", mt: 2 }}
        >
          Discover timeless wisdom from the Bhagavad Gita to illuminate your path.
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/chat")}
          size="large"
          sx={{ mt: 4, backgroundColor: "#FF9D3D", borderRadius: "2rem", px: 4, py: 1.5 }}
        >
          Begin Your Journey
        </Button>
      </Box>

      {/* Carousel Section */}
      <Carousel
        indicators={false}
        navButtonsAlwaysVisible={true}
        autoPlay={true}
        interval={6000}
        sx={{ mb: 6 }}
      >
        {quotes.map((quote, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#FFF6E0",
              p: 4,
              borderRadius: "1rem",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              variant={isMobile ? "body1" : "h5"}
              sx={{ fontFamily: "'Merriweather', serif", fontWeight: 500, color: "#333" }}
            >
              "{quote.text}"
            </Typography>
            <Typography
              variant="caption"
              sx={{ fontFamily: "'Roboto', sans-serif", color: "#777", mt: 1, display: "block" }}
            >
              {quote.reference}
            </Typography>
          </Box>
        ))}
      </Carousel>

      {/* Additional Section */}
      <Box>
        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{ fontFamily: "'Merriweather', serif", fontWeight: 700, color: "#FF9D3D", mb: 2 }}
        >
          Embark on a Spiritual Journey
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontFamily: "'Roboto', sans-serif", color: "#5A5A5A" }}
        >
          Ask your questions and receive enlightening answers rooted in the teachings of the Bhagavad Gita.
        </Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
