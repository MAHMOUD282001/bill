import React from "react";
import { Box, Container, Grid } from "@mui/material";
import logo from "../../assets/logo.png";
import "./BillInfo.css";
import { useTranslation } from "react-i18next";

function BillInfo() {

  const [t, i18n] = useTranslation();

  console.log(i18n.language);

  return (
    <section className="bill-info" style={{ marginBottom: "2rem" }}>
      <Container>
        <Grid
          className="info-content"
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Grid
            item
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <h3>Project Name: Simple Project</h3>
              <h3>Email: google.com</h3>
              <h3>Phone: 1234</h3>
              <h3>Date & Time: 15/4/2023</h3>
            </Box>
          </Grid>
          <Grid
            item
            sm={6}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box>
              <img src={logo} alt="logo" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default BillInfo;
