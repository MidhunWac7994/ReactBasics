import React from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaConciergeBell, FaPhoneAlt } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { sidebarOpenState } from "../atom";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarOpenState); 

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "#333", transition: "margin-left 0.3s" }}
    >
      <Toolbar sx={{ paddingLeft: sidebarOpen ? "250px" : "0px" }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Navbar
        </Typography>
        <IconButton color="inherit" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaHome />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/about">
          <FaInfoCircle />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/services">
          <FaConciergeBell />
        </IconButton>
        <IconButton color="inherit" component={Link} to="/contact">
          <FaPhoneAlt />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
