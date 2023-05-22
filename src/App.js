import React from 'react';
import { Route, Link, Routes} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand} from 'reactstrap';
import './App.css';

import Home from './Home';
import About from './About';
import Blog from './Blog';
import Contact from './Contact';
import Footer from './components/Footer';




function App() {
  return (
   
      <>
        <div>
          <Navbar color='dark' dark expand='md'>
            <NavbarBrand href='/'>Logo Here</NavbarBrand>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer/>
        </div>
        
      </>

     
   
  );
}

export default App;
