import React from "react";
import { Button, Box, Typography, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <Container
      maxWidth="md"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        padding: "2rem 1rem",
      }}
    >
      {/* Header Section */}
      <Box>
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#FF9D3D",
            marginBottom: "1rem",
          }}
        >
          Welcome to GeetAI
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#555",
            fontSize: "1.2rem",
            marginBottom: "2rem",
          }}
        >
          Experience the divine teachings of Lord Krishna with GeetAI. Ask
          questions and receive wisdom from the Bhagavad Gita in your language.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/chat"
          sx={{
            backgroundColor: "#FF9D3D",
            color: "#FFF",
            padding: "0.8rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "1rem",
            "&:hover": {
              backgroundColor: "#FFBD73",
            },
          }}
        >
          Start Chatting
        </Button>
      </Box>

      {/* Introduction Section */}
      <Box
        sx={{
          marginTop: "3rem",
          textAlign: "center",
        }}
      >
        {/* <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#444",
            marginBottom: "1rem",
          }}
        >
          Introduction
        </Typography> */}
        <Typography
          variant="body1"
          sx={{
            color: "#666",
            fontSize: "1rem",
            lineHeight: "1.6",
            marginBottom: "2rem",
          }}
        >
          GeetAI is your personal guide to the timeless wisdom of the Bhagavad
          Gita. Whether you are seeking clarity, inspiration, or answers to
          life's challenges, GeetAI allows you to converse with the divine
          teachings of Lord Krishna in a simple and meaningful way. Experience
          the beauty of this spiritual journey in your own language.
        </Typography>
      </Box>

      {/* Key Features Section */}
      <Box>
        {/* <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#444",
            marginBottom: "1rem",
          }}
        >
          Key Features
        </Typography> */}
        <Grid container spacing={3} sx={{ marginBottom: "2rem" }}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ color: "#FF9D3D", fontWeight: "bold" }}
            >
              Multilingual Support
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", marginTop: "0.5rem" }}
            >
              Interact in English, Hindi, Marathi, or your preferred language
              for personalized guidance.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ color: "#FF9D3D", fontWeight: "bold" }}
            >
              Bhagavad Gita Quotes
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", marginTop: "0.5rem" }}
            >
              Receive responses rooted in the teachings of the Bhagavad Gita
              with relevant Sanskrit verses and explanations.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ color: "#FF9D3D", fontWeight: "bold" }}
            >
              Spiritual Guidance
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", marginTop: "0.5rem" }}
            >
              Find answers to your questions and practical wisdom to lead a
              peaceful and purposeful life.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Footer Section */}
      <Box>
        <Typography
          variant="body2"
          sx={{
            color: "#888",
            fontSize: "0.9rem",
          }}
        >
          © 2025 GeetAI. All rights reserved.
        </Typography>
      </Box>
    </Container>
  );
};

export default LandingPage;
