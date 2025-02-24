// Dashboard.js
import React from "react";
import marioImage from "../Images/mario-img.png";
import {
  LineChart,
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Label,
} from "recharts";
import {
  Bell,
  Users,
  CircleCheckBig,
  LayoutGrid,
  ChevronDown,
  RefreshCcw,
  AlertTriangle,
} from "lucide-react";
import TeamMoodSlider from "./TeamMoodSlider";
import ToggleButton from "./ToggleButton";
import "./Dashboard.css";

const revenueData = [
  { date: "19 June", value: 500 },
  { date: "20 June", value: 1000 },
  { date: "21 June", value: 3500 },
  { date: "22 June", value: 3200 },
  { date: "23 June", value: 4000 },
  { date: "24 June", value: 5600 },
  { date: "25 June", value: 6500 },
  { date: "", value: 6500 },
];

const budgetData = [
  { name: "Over Budget", value: 19, color: "#FF4444" }, // Changed to 19
  { name: "On Budget", value: 33, color: "#8884d8" }, // Changed to 48
  { name: "Under Budget", value: 48, color: "#40E0D0" }, // Changed to 33
];
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5; // Positioning inside the slice
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={14} // Increase font size
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

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
              <div className="corner-icon">
                <LayoutGrid strokeWidth={2} size={36} />
              </div>
              <h2>5</h2>
              <p>Total Projects</p>
            </div>
            <div className="stat-card">
              <div className="corner-icon">
                <CircleCheckBig strokeWidth={2} size={36} />
              </div>
              <h2>1</h2>
              <p>Completed</p>
            </div>
            <div className="stat-card">
              <div className="corner-icon">
                <RefreshCcw strokeWidth={2} size={36} />
              </div>
              <h2>3</h2>
              <p>Ongoing</p>
            </div>
            <div className="stat-card delayed">
              <div className="corner-icon">
                <AlertTriangle strokeWidth={2} size={36} />
              </div>
              <h2>1</h2>
              <p>Delayed</p>
            </div>
            <div className="stat-card">
              <div className="corner-icon">
                <Users strokeWidth={2} size={36} />
              </div>
              <h2>5</h2>
              <p>Employees</p>
            </div>
          </div>

          {/* Charts Section */}
          <div className="charts-container">
            <div className="chart-card">
              <div className="chart-header">
                <div className="lineChart-info">
                  <h3>Total revenue</h3>
                  <p>Cost €</p>
                </div>
                <div className="chart-tabs">
                  <ToggleButton optionOne={"Month"} optionTwo={"Week"} />
                </div>
              </div>
              <ResponsiveContainer width="100%" height={275}>
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="1 1" values="4" />
                  <XAxis dataKey="date" tickLine={false} axisLine={false} />
                  <YAxis
                    domain={[1000, 7000]}
                    ticks={[1000, 2000, 3000, 4000, 5000, 6000, 7000]}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Line
                    dataKey="value"
                    stroke="#00d9c7"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-card">
              <div className="chart-header">
                <h3>Budget</h3>
                <div className="chart-tabs">
                  <ToggleButton
                    optionOne={"Profitability"}
                    optionTwo={"Status"}
                  />
                </div>
              </div>
              <ResponsiveContainer width="100%" height={275}>
                <PieChart>
                  <Pie
                    data={budgetData}
                    innerRadius={85}
                    outerRadius={120}
                    paddingAngle={0}
                    dataKey="value"
                    label={renderCustomizedLabel} // Custom function for inside labels
                    labelLine={false} // Remove label connecting lines
                  >
                    <Label
                      value="5"
                      position="center"
                      fontSize={35}
                      fontWeight="bold"
                      fill="grey"
                      fontFamily="Roboto, sans-serif"
                      dx={1}
                      dy={-6}
                    />
                    <Label
                      value="Total Projects"
                      position="center"
                      dy={30} // Shift text below the number
                      fontSize={18}
                      fontWeight=""
                      fill="#555"
                      // Move the label slightly up
                    />
                    {budgetData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    Hello
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                {budgetData.map((entry, index) => (
                  <div
                    key={`legend-${index}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "20px",
                    }}
                  >
                    <div
                      style={{
                        width: "12px",
                        height: "12px",
                        backgroundColor: entry.color,
                        borderRadius: "50%",
                        marginRight: "8px",
                      }}
                    />
                    <span className="pieSignal">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <TeamMoodSlider />
        {/* <div className="team-card">
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
        </div> */}
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
