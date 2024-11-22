import React from 'react';
import './Team.css';

const teamMembers = [
  { name: 'Shivanesh', position: 'CEO and Founder', img: '/path/to/image1.jpg' },
  { name: 'Neha s', position: 'UI/UX Design', img: '/path/to/image2.jpg' },
  { name: 'Vignesh', position: 'UI/UX Design', img: '/path/to/image3.jpg' },
  { name: 'Taarun adithya ', position: 'Manging officer', img: '/path/to/image4.jpg' },
];

const Team = () => {
  return (
    <section className="team-section">
      <h2>Meet the Flexiwork Team</h2>
      <p>
      FlexiWork is a user-friendly platform for posting and managing work listings. Whether offering services, seeking professionals, or listing goods, it ensures hassle-free connections. Its intuitive design boosts visibility, creating opportunities and fostering connections.
      </p>
      <div className="team-cards">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <button>Say Hello 👋</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
