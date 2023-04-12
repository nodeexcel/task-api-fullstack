import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FiMenu} from 'react-icons/fi';
import Navbar from 'react-bootstrap/Navbar';
import Button from '../common/Button';
import styles from "@/styles/Navbar.module.css"

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={`overflow-hidden py-3  ${styles.navbarDiv}`} fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src={"/assets/images/home/logo.svg"} height={40} width={90} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle className={styles.logo}><FiMenu/></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`me-auto color-white ${styles.liBox}`}>
            <Nav.Link href="#feature" className={`text-white ${styles.liText}`}>Features</Nav.Link>
            <Nav.Link href="#partners" className={`text-white ${styles.liText}`}>Partners</Nav.Link>
            <Nav.Link href="#teamSection" className={`text-white ${styles.liText}`}>Team</Nav.Link>
            <Nav.Link href="#Review" className={`text-white ${styles.liText}`}>Reviews</Nav.Link>
            <Nav.Link href="#blog" className={`text-white ${styles.liText}`}>FAQs</Nav.Link>
            <Nav.Link href="#blog" className={`text-white ${styles.liText}`}>Blog</Nav.Link>
            <button className={`text-white ${styles.NavBtn}`}><Navbar.Toggle>
            <p className='text-white pt-3'>Close</p></Navbar.Toggle>
           </button>
           <button className={`my-3 ${styles.DownloadApp}`}>
            Download App
           </button>
          </Nav>
          <Nav>
            <Button text="Get the App"/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar

