import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FiMenu} from 'react-icons/fi';
import Navbar from 'react-bootstrap/Navbar';
import Button from '../common/Button';
import styles from "@/styles/Navbar.module.css"

const NavBar = () => {
  return (
    <>
    <Navbar collapseOnSelect expand="sm" className={`overflow-hidden py-3  ${styles.navbarDiv}`} fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src={"/assets/images/home/logo.svg"} height={40} width={90} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle className={styles.logo}><FiMenu/></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`color-white text-sm-center`}>
            <div className={styles.liBox}>
            <Nav.Link href="#feature" className={`text-white ${styles.liText}`}>Features</Nav.Link>
            <Nav.Link href="#partners" className={`text-white ${styles.liText}`}>Partners</Nav.Link>
            <Nav.Link href="#teamSection" className={`text-white ${styles.liText}`}>Team</Nav.Link>
            <Nav.Link href="#review" className={`text-white ${styles.liText}`}>Reviews</Nav.Link>
            <Nav.Link href="#faq" className={`text-white ${styles.liText}`}>FAQs</Nav.Link>
            <Nav.Link href="#blog" className={`text-white ${styles.liText}`}>Blog</Nav.Link>
            <button className={`text-white ${styles.NavBtn}`}>
            Close
           </button>
           <button className={`my-3 ${styles.DownloadApp}`}>
            Download App
           </button>
           </div>
           <div className={`color-white text-sm-center ${styles.DesktopliBox}`}>
            <Nav.Link href="#feature" className={`text-white  px-3 ${styles.liText}`}>Earn</Nav.Link>
            <Nav.Link href="#partners" className={`  text-white ${styles.liText}`}>DeFi</Nav.Link>
            <Nav.Link href="#teamSection" className={`text-white px-3 ${styles.liText}`}>Features</Nav.Link>
            <Nav.Link href="#review" className={`text-white px-3 ${styles.liText}`}>Blog</Nav.Link>
            <button className={`text-white ${styles.NavBtn}`}>
            Close
           </button>
           <button className={`my-3 ${styles.DownloadApp}`}>
            Download App
           </button>
          </div>
          </Nav>
          <Nav>
            <Button text="Get the App"/>
          </Nav>
        </Navbar.Collapse>  
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar

