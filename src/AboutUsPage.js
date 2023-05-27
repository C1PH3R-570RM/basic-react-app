import React, {useState} from 'react';



const AboutUsPage = () => {
    const [teamMembers] = useState([
      {
        id: 1,
        name: 'John Doe',
        role: 'CEO',
        avatar: 'https://example.com/avatar1.jpg',
      },
      {
        id: 2,
        name: 'Jane Smith',
        role: 'CTO',
        avatar: 'https://example.com/avatar2.jpg',
      },
      {
        id: 3,
        name: 'Mark Johnson',
        role: 'Lead Developer',
        avatar: 'https://example.com/avatar3.jpg',
      },
    ]);
  
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