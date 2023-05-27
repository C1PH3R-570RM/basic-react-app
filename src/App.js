import React from 'react';
import { Route, Link, Routes} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavLink, NavbarBrand} from 'reactstrap';
import './App.css';

import Home from './Home';
import AboutUsPage from './AboutUsPage';
import BlogPage from './BlogPage';
import ContactForm from './ContactForm';
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
                <NavLink tag={Link} to="/aboutuspage">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/blogpage">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contactform">Contact</NavLink>
              </NavItem>
            </Nav>
          </Navbar>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutuspage" element={<AboutUsPage />} />
            <Route path="/blogpage" element={<BlogPage />} />
            <Route path="/contactform" element={<ContactForm />} />
          </Routes>
          <Footer/>
        </div>
        
      </>

     
   
  );
}

export default App;
