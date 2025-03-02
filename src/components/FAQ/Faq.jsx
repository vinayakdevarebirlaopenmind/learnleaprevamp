import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  CircularProgress,
  styled,
} from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";
import Faqimg from "../../assets/image/faqimage.png";
import { faqData } from "../../constants/constants";
import { useNavigate } from "react-router-dom";
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: "8px 0",
  borderRadius: "12px",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  "&:before": {
    display: "none",
  },
}));

const StyledButton = styled(Button)({
  borderRadius: "8px",
  padding: "5px 10px",
  fontSize: "16px",
  textTransform: "none",
  background: "#1d8cdc",
});

const FAQPage = () => {
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleContactUs = () => {
    navigate("/enquireform");
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <h2 className="outlined-text">Frequently Asked Questions</h2>
          <Box sx={{ mt: 3 }}>
            {faqData.map((faq, index) => (
              <StyledAccordion
                key={index}
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                aria-label={`FAQ accordion panel ${index + 1}`}
              >
                <AccordionSummary
                  expandIcon={<IoIosArrowDown />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                >
                  <Typography sx={{ fontWeight: 600, color: "#333" }}>
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ color: "#666" }}>{faq.answer}</Typography>
                </AccordionDetails>
              </StyledAccordion>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card sx={{ height: "100%", borderRadius: "16px" }}>
            <CardContent>
              <Box
                component="img"
                src={Faqimg}
                alt="FAQ Support"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "12px",
                  mb: 3,
                }}
              />
              <Typography
                variant="h5"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#1976d2" }}
              >
                Need More Help?
              </Typography>
              <Typography sx={{ mb: 3, color: "#666" }}>
                Our support team is here to assist you with any questions or
                concerns you may have.
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ fontWeight: "bold", color: "#333" }}
              >
                Expert Support
              </Typography>
              <Typography sx={{ mb: 3, color: "#666" }}>
                Get in touch with our expert team for personalized assistance
                and solutions tailored to your needs.
              </Typography>
              <StyledButton
                variant="contained"
                onClick={handleContactUs}
                aria-label="Contact support team"
              >
                Join For Free
              </StyledButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FAQPage;
