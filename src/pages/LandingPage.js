import React from "react";
import { Button, Box, Typography, Container } from "@mui/material";
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
