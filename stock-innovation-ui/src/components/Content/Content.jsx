import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Card,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Chart from "../../assets/Chart.png";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";

function Content() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={8} sm={8} md={8}>
          <Card sx={{ m: 2, p: 2 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
              }}
            >
              <Typography variant="h6" color="#000000DE">
                Candlestick chart
              </Typography>
            </Box>
            <img src={Chart} alt="loading" height="500px" width="100%" />
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Stack sx={{ m: 2 }}>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                label="Ticker"
                focused
                id="fullWidth"
                color="primary"
                placeholder="Enter ticker for NSE stocks"
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  disableUnderline: true,
                }}
              />
            </Box>

            <Card
              sx={{
                background:
                  "linear-gradient(to right, rgba(255,190,150,1), rgba(253,124,150,1));",
                mb: 2,
                p: 3,
                height: "100px",
                cursor: "pointer",
              }}
            >
              <Typography variant="body1" color="white" fontWeight={600}>
                {"Prompt 1"}
              </Typography>
            </Card>
            <Card
              sx={{
                background:
                  "linear-gradient(to right, rgba(143, 201, 249, 1), rgba(22, 137, 227, 1));",
                mb: 2,
                p: 3,
                height: "100px",
                cursor: "pointer",
              }}
            >
              <Typography variant="body1" color="white" fontWeight={600}>
                {"Prompt 2"}
              </Typography>
            </Card>
            <Card
              sx={{
                background:
                  "linear-gradient(to right, rgba(131, 217, 209, 1), rgba(26, 207, 179,1));",
                p: 3,
                height: "100px",
                cursor: "pointer",
              }}
            >
              <Typography variant="body1" color="white" fontWeight={600}>
                {"Prompt 3"}
              </Typography>
            </Card>
          </Stack>
        </Grid>
      </Grid>

      <Card sx={{ m: 2, p: 2 }}>
        <Accordion
          sx={{
            boxShadow: "none",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Accordion 1
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            boxShadow: "none",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Accordion 2
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
        <Accordion
          sx={{
            boxShadow: "none",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Accordion 3
          </AccordionSummary>
          <AccordionDetails>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </AccordionDetails>
        </Accordion>
      </Card>
    </>
  );
}

export default Content;
