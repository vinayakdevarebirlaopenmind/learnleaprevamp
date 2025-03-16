import React from "react";
import "./TeamMembers.css";

const teamMembers = [
  {
    name: "Michele Miller",
    title: "Web Developer",
    image: "https://picsum.photos/130/130?image=1027",
  },
  {
    name: "Patricia Knott",
    title: "Web Developer",
    image: "https://picsum.photos/130/130?image=839",
  },
  {
    name: "Justin Ramos",
    title: "Web Developer",
    image: "https://picsum.photos/130/130?image=856",
  },
  {
    name: "Mary Huntley",
    title: "Web Developer",
    image: "https://picsum.photos/130/130?image=836",
  },
];

function TeamMembers() {
  return (
    <>
      <h2 className="student-testimonial-heading">Authors</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="picture">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-content">
              <h3 className="name">{member.name}</h3>
              <h4 className="title">{member.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TeamMembers;
