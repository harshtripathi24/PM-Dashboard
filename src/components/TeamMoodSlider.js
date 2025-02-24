// TeamMoodSlider.jsx
import React, { useState } from "react";

import andreaImage from "../Images/Andrea.jpg";
import alvaroImage from "../Images/Alvaro.webp";
import julanImage from "../Images/Julan-Image.jpg";
import joseImage from "../Images/Jose-image.jpg";
import mariaImage from "../Images/Maria-image.jpg";

import "./TeamMoodSlider.css";

const TeamMoodSlider = () => {
  const [teamMembers, setTeamMembers] = useState([
    {
      id: 1,
      name: "Andrea",
      img: andreaImage,
      role: "UX Junior",
      moodValue: 25,
    },
    {
      id: 2,
      name: "Alvaro",
      img: alvaroImage,
      role: "Back-end Developer",
      moodValue: 95,
    },
    { id: 3, name: "Juan", img: julanImage, role: "UX Senior", moodValue: 60 },
    { id: 4, name: "Jose", img: joseImage, role: "Marketing", moodValue: 5 },
    { id: 5, name: "Maria", img: mariaImage, role: "UX Junior", moodValue: 50 },
  ]);

  // Function to get the appropriate emoji based on mood value
  const getMoodEmoji = (value) => {
    if (value <= 20) return "😡";
    if (value <= 40) return "🫤";
    if (value <= 60) return "😐";
    if (value <= 90) return "😀";
    return "😀";
  };

  return (
    <div className="team-mood-slider">
      <h3 className="mood-title">Team mood</h3>
      <div className="member-list">
        {teamMembers.map((member, index) => (
          <div key={member.id} className="member-container">
            <div className="member-info">
              <div className="member-avatar">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="member-details">
                <span className="member-name">{member.name}</span>
                <span className="member-role">{member.role}</span>
              </div>
            </div>

            <div className="slider-container">
              <div className="slider-track"></div>
              <div
                className="slider-thumb"
                style={{ left: `${member.moodValue}%` }}
              >
                <span className="mood-emoji">
                  {getMoodEmoji(member.moodValue)}
                </span>
              </div>
            </div>

            {index < teamMembers.length - 1 && (
              <div className="member-divider"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMoodSlider;
