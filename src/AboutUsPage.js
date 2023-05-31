import React, { useEffect, useState } from 'react';

const AboutUsPage = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/aboutuspage', {mode: 'cors'})
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>Welcome to our company! Here are some key members of our team:</p>
      <ul>
        {teamMembers.map((member) => (
          <li key={member.id}>
            <img src={member.avatar} alt={member.name} />
            <strong>{member.name}</strong> - {member.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUsPage;
  // https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/