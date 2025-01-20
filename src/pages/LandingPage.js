import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  AppBar,
  Toolbar,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      {/* AppBar Section */}
      <AppBar position="static" sx={{ backgroundColor: "#FFF" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "#FF9D3D", // GeetAI brand color
              textAlign: "left",
            }}
          >
            GeetAI
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Container
        maxWidth="lg"
        sx={{
          paddingTop: "5rem",
          textAlign: "center",
          backgroundColor: "#FFF8F0", // Soft spiritual theme
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#FF9D3D",
            marginBottom: "1.5rem",
          }}
        >
          Experience Divine Wisdom
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: "#555",
            marginBottom: "2rem",
            fontWeight: "400",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Discover the teachings of Lord Krishna and find clarity in your life through GeetAI. Ask questions and get answers rooted in the Bhagavad Gita.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/chat"
          sx={{
            backgroundColor: "#FF9D3D",
            color: "#FFF",
            padding: "0.8rem 2rem",
            fontSize: "1.2rem",
            borderRadius: "1rem",
            "&:hover": {
              backgroundColor: "#FFBD73",
            },
          }}
        >
          Start Your Spiritual Journey
        </Button>
      </Container>

      {/* Features Section */}
      <Container maxWidth="md" sx={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        {/* <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#FF9D3D",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          Key Features of GeetAI
        </Typography> */}
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#FF9D3D" }}
            >
              Multilingual Support
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", marginTop: "1rem" }}>
              Converse in English, Hindi, Marathi, and more for personalized guidance in your preferred language.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#FF9D3D" }}
            >
              Bhagavad Gita Insights
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", marginTop: "1rem" }}>
              Receive answers rooted in the Bhagavad Gita’s teachings, with relevant verses and explanations.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#FF9D3D" }}
            >
              Personalized Wisdom
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", marginTop: "1rem" }}>
              Ask questions and receive guidance on how to lead a peaceful, purposeful life based on spiritual wisdom.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Testimonials Section */}
      {/* <Container maxWidth="md" sx={{ paddingTop: "4rem", paddingBottom: "4rem" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "bold",
            color: "#FF9D3D",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          What Users Are Saying
        </Typography>
        <Grid container spacing={3} sx={{ textAlign: "center" }}>
          <Grid item xs={12} sm={4}>
            <Box sx={{ backgroundColor: "#FF9D3D", padding: "1.5rem", borderRadius: "8px" }}>
              <Typography variant="body1" sx={{ color: "#FFF", fontStyle: "italic" }}>
                "GeetAI has helped me find peace and clarity in my life. The teachings of Lord Krishna are truly transformative!"
              </Typography>
              <Typography variant="body2" sx={{ color: "#FFF", marginTop: "1rem" }}>
                - A Devoted Seeker
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ backgroundColor: "#FF9D3D", padding: "1.5rem", borderRadius: "8px" }}>
              <Typography variant="body1" sx={{ color: "#FFF", fontStyle: "italic" }}>
                "The answers from GeetAI have given me profound insights into my life. I feel more connected with the divine."
              </Typography>
              <Typography variant="body2" sx={{ color: "#FFF", marginTop: "1rem" }}>
                - A Spiritual Seeker
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={{ backgroundColor: "#FF9D3D", padding: "1.5rem", borderRadius: "8px" }}>
              <Typography variant="body1" sx={{ color: "#FFF", fontStyle: "italic" }}>
                "GeetAI’s wisdom has been a guide through difficult times. It feels like a conversation with Lord Krishna himself."
              </Typography>
              <Typography variant="body2" sx={{ color: "#FFF", marginTop: "1rem" }}>
                - A Grateful User
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container> */}

            {/* Brief Description Section */}
            <Container maxWidth="md" sx={{ paddingTop: "4rem", paddingBottom: "4rem", backgroundColor: "#FFF8F0" }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            color: "#FF9D3D",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          What is GeetAI?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#555",
            fontSize: "1.1rem",
            lineHeight: "1.6",
            textAlign: "center",
            maxWidth: "700px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          GeetAI is an interactive spiritual assistant that brings the divine wisdom of Lord Krishna from the Bhagavad Gita to life. Whether you are seeking answers about life’s purpose, overcoming obstacles, or understanding spiritual concepts, GeetAI offers personalized guidance based on sacred verses. It is designed to support seekers in their spiritual journey by making the teachings of the Gita more accessible and relatable, at any time, anywhere.
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#888",
            fontSize: "0.9rem",
            marginTop: "1.5rem",
            textAlign: "center",
          }}
        >
          <strong>Disclaimer:</strong> GeetAI is an AI-driven model trained to assist in understanding the teachings of the Bhagavad Gita. It is not a real expert or a replacement for traditional spiritual practices or a guru. It is a tool designed to provide insights, foster personal reflection, and assist in the exploration of spiritual concepts.
        </Typography>
      </Container>


      {/* Footer Section */}
      <Box sx={{ backgroundColor: "#FFF8F0", padding: "2rem", textAlign: "center" }}>
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
    </>
  );
};

export default LandingPage;
