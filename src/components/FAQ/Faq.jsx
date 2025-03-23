import React, { useState, useEffect } from "react";
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
import axios from "axios"; // Import axios for API calls
import { useNavigate } from "react-router-dom";
import Faqimg from "../../assets/image/faqimage.png";
import "./Faq.css";
import { API_URL } from "../../constants/constants";
const API_URLL = `${API_URL}/api/faqs/getFaqs`; // Backend API URL
const StyledAccordion = styled(Accordion)(({ theme }) => ({
  margin: "8px 0",
  borderRadius: "12px",
  boxShadow: "none", // Removes the shadow
  border: "1px solid var(--color-primary-light-cyan)", // Optional: Adds a light border
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

const FAQsection = () => {
  const navigate = useNavigate();
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  // Fetch FAQs from API
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await axios.get(API_URLL);
        const filteredFaqs = response.data.filter((faq) => faq.active === 1); // Get only active FAQs
        setFaqs(filteredFaqs);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const handleContactUs = () => {
    navigate("/enquireform");
  };

  return (
    <Container className="FAQcontainer">
      <Grid container spacing={4}>
        {/* FAQ Section */}
        <Grid item xs={12} md={7}>
          <h2 className="common-title">
            Frequently <span className="color-effect">Asked Questions</span>
          </h2>

          {loading ? (
            <Box display="flex" justifyContent="center" mt={4}>
              <CircularProgress />
            </Box>
          ) : (
            <Box sx={{ mt: 3 }}>
              {faqs.length > 0 ? (
                faqs.map((faq, index) => (
                  <StyledAccordion
                    key={faq.id}
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
                        {faq.title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography
                        sx={{ color: "#666" }}
                        dangerouslySetInnerHTML={{ __html: faq.description }} // Render HTML content
                      />
                    </AccordionDetails>
                  </StyledAccordion>
                ))
              ) : (
                <Typography sx={{ mt: 2, color: "gray", textAlign: "center" }}>
                  No FAQs available.
                </Typography>
              )}
            </Box>
          )}
        </Grid>

        {/* Contact Support Card */}
        <Grid item xs={12} md={5}>
          <Card
            sx={{ height: "100%", borderRadius: "16px", boxShadow: "none" }}
          >
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

              <button
                className="join-btn"
                onClick={() => navigate("/enquireform")}
              >
                Enquiry
              </button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FAQsection;
