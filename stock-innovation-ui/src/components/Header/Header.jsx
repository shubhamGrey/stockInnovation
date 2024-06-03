import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";

function Header() {
  return (
    <AppBar
      position="static"
      style={{
        background: "white",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Box sx={{ flexGrow: 1, justifyContent: "start", display: "flex" }}>
          <Typography variant="h3" color="#9d58ff" fontWeight="900">
            {"Stock Market Insights"}
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "flex" } }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="violet"
            data-testid="logout-details"
          >
            <AccountCircle />
          </IconButton>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "flex" } }}></Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
