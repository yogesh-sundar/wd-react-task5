import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Topbar from "./Topbar";
import { FaHome, FaUserCircle } from "react-icons/fa";

function Dashboard() {
  return (
    <div id="wrapper">
      {/* <!-- Sidebar --> */}
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i
              className="fas fa-laugh-wink"
              style={{ color: "greenyellow" }}
            ></i>
          </div>
          <div
            className="sidebar-brand-text mx-3"
            style={{ color: "greenyellow" }}
          >
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        <ul
          className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
          id="accordionSidebar"
          style={{ listStyleType: "none" }}
        >
          <li className="p-2 ml-2">
            <Link to="/" style={{ color: "white" }}>
              <FaHome style={{ color: "greenyellow" }} />
              <span>
                <b style={{ color: "greenyellow" }}>&nbsp;Home</b>
              </span>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
          <li className="p-2 ml-2">
            <Link to="/users" style={{ color: "white" }}>
              <FaUserCircle style={{ color: "greenyellow" }} />
              <b style={{ color: "greenyellow" }}>&nbsp;User</b>
            </Link>
          </li>
          <hr className="sidebar-divider my-0" />
        </ul>

        <hr className="sidebar-divider my-0" />
      </ul>
      <Topbar />
    </div>
  );
}

export default Dashboard;
