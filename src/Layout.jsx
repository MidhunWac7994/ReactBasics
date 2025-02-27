import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBarComponents/SideBar";
import { Button } from "@mui/material";
import Header from './SideBarComponents/Header'

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column", margin: 0 }}>
      <Header sidebarOpen={sidebarOpen} />

      <div style={{ display: "flex", flex: 1, marginTop: "64px" }}>

        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

        <div
          style={{
            flexGrow: 1,
            padding: "20px",
            transition: "margin-left 0.3s",
          }}
        >
          <Button
            onClick={toggleSidebar}
            variant="contained"
            color="primary"
            sx={{ marginBottom: "20px" }}
          >
            {sidebarOpen ? "Close Sidebar" : "Open Sidebar"}
          </Button>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
