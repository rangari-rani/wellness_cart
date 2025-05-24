import { Box, Container, Link, Typography, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { green } from '@mui/material/colors';
import React from "react";
const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: green[300], // dark background
        color: "white",
        py: 1.5,
        width: "100%",
        mt: "auto", // pushes footer down if parent uses flex column
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Stack direction="row" spacing={4} justifyContent="center" mb={1}>
          <Link
            href="https://github.com/rangari-rani"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{ "&:hover": { color: "grey.700" } }}
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/rani-rangari/"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{ "&:hover": { color: "grey.700" } }}
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </Link>

          <Link
            href="mailto:ranirangari2@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
            sx={{ "&:hover": { color: "grey.700" } }}
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </Link>
        </Stack>

        <Typography variant="body2" component="p" sx={{ userSelect: "none",fontWeight: "bold"  }}>
          © Rani Rangari.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
