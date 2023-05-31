const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Welcome to CORS server 😁')
})
app.get('/cors', (req, res) => {
    res.send('This has CORS enabled 🎈')
})
app.listen(8080, () => {
    console.log('listening on port 8080')
})

// Define a route for the About Us page
app.get('/aboutuspage', (req, res) => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CEO',
      avatar: 'http://pixabay.com/illustrations/user-icon-icono-de-usuario-pictogram-2098873/',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'CTO',
      avatar: 'http://pixabay.com/illustrations/user-icon-icono-de-usuario-pictogram-2098873/',
    },
    {
      id: 3,
      name: 'Mark Johnson',
      role: 'Lead Developer',
      avatar: 'http://pixabay.com/illustrations/user-icon-icono-de-usuario-pictogram-2098873/',
    },
  ];

  res.json(teamMembers);
});




// https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/