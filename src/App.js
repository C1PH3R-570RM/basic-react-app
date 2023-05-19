import React from 'react';
import { Route, Link, Routes} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand} from 'reactstrap';

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';




function App() {
  return (
   
     
        <div>
          <Navbar color='light' light expand='md'>
            <NavbarBrand href='/'>My App</NavbarBrand>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink as={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink as={Link} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink as={Link} to="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink as={Link} to="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
     
   
  );
}

export default App;
