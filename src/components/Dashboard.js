// Dashboard.js
import React from "react";
import marioImage from "../Images/mario-img.png";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Bell, Bold, ChevronDown, RefreshCcw } from "lucide-react";
import "./Dashboard.css";

const revenueData = [
  { date: "19 June", value: 1000 },
  { date: "20 June", value: 3500 },
  { date: "21 June", value: 3700 },
  { date: "22 June", value: 4200 },
  { date: "23 June", value: 5500 },
  { date: "24 June", value: 6500 },
  { date: "25 June", value: 6500 },
];

const budgetData = [
  { name: "Over Budget", value: 20, color: "#FF4444" },
  { name: "On Budget", value: 30, color: "#8884d8" },
  { name: "Under Budget", value: 50, color: "#40E0D0" },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <h1 className="logo">
            <span>H</span>OURS
          </h1>
        </div>
        <div className="header-centre">
          <nav>
            <a href="#" className="active">
              Dashboard
            </a>
            <a href="#">Projects</a>
            <a href="#">Team</a>
            <a href="#">Clients</a>
            <a href="#">Time</a>
            <a href="#">Reports</a>
          </nav>
        </div>
        <div className="header-right">
          <div className="notification">
            <Bell strokeWidth={1} className="bell" />
            <span className="dotRed"></span>
          </div>
          <div className="profile">
            <img src={marioImage} alt="Profile" />
            <span>Mario</span>
            <ChevronDown strokeWidth={1.5} />
          </div>
        </div>
      </header>

      <div className="center-container">
        {/* Stats Cards */}

        <div className="centerHero-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="cornerIcon"></div>
              <h2>5</h2>
              <p>Total Projects</p>
            </div>
            <div className="stat-card">
              <h2>1</h2>
              <p>Completed</p>
            </div>
            <div className="stat-card">
              <div className="corner-icon">
                <RefreshCcw strokeWidth={3} size={25} />
              </div>
              <h2>3</h2>
              <p>Ongoing</p>
            </div>
            <div className="stat-card delayed">
              <h2>1</h2>
              <p>Delayed</p>
            </div>
            <div className="stat-card">
              <h2>5</h2>
              <p>Employees</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="charts-container">
            <div className="chart-card">
              <div className="chart-header">
                <h3>Total revenue</h3>
                <div className="chart-tabs">
                  <span>Month</span>
                  <span>Week</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={revenueData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Line type="monotone" dataKey="value" stroke="#40E0D0" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <div className="chart-header">
                <h3>Budget</h3>
                <div className="chart-tabs">
                  <span>Profitability</span>
                  <span>Status</span>
                </div>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={budgetData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="team-card">
          <h3>Team mood</h3>
          <div className="team-list">
            {["Andrea", "Alvaro", "Juan", "Jose", "Maria"].map((name) => (
              <div key={name} className="team-member">
                <div className="member-info">
                  <img src="/placeholder.jpg" alt={name} />
                  <span>{name}</span>
                </div>
                <span>😊</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-section">
        <div className="projects-header">
          <h2>Budget status</h2>
          <div className="action-buttons">
            <button className="btn btn-primary">Add New Project</button>
            <button className="btn">Download report</button>
            <button className="btn">Filter</button>
          </div>
        </div>

        <div className="projects-grid">
          {["Insurance App", "Neo", "VR Website", "VR Website"].map(
            (project, index) => (
              <div key={project + index} className="project-card">
                <div className="project-header">
                  <div>
                    <h4>{project}</h4>
                    <span>Veriti</span>
                  </div>
                  <img src="/placeholder.jpg" alt="Project" />
                </div>
                <div className="project-details">
                  <div className="budget-row">
                    <span>Total Budget</span>
                    <span>70.000 €</span>
                  </div>
                  <div className="budget-row">
                    <span>Profitability (ROI)</span>
                    <span>4.000 €</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "60%" }}></div>
                  </div>
                  <div className="hours-row">
                    <span>Actual hours: 1:00</span>
                    <span className="hours-left">10:00 left hours</span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
