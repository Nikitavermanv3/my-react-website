import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link href="#" to="/" className={`nav-link`}><h5>&lt;Nikita Verma /&gt;</h5></Link>
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav>
          <Link href="#skills" to='/skills' className={`nav-link`}><h5>Skills</h5></Link>
          <Link href="#learnings" to='/learnings' className={`nav-link`}><h5>Learnings</h5></Link>
          <Link href="#employments" to='/employments' className={`nav-link`}><h5>Employments</h5></Link>
          <Link href="#education" to='/education' className={`nav-link`}><h5>Education</h5></Link>
          <Link href="#contact" to='/contact' className={`nav-link`}><h5>Connect</h5></Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar