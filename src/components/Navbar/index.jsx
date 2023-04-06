import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from '../common/Button';
import styles from "@/styles/Navbar.module.css"

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className={styles.navbarDiv}>
      <Container>
        <Navbar.Brand href="#logo"><img src={"/assets/images/home/logo.svg"} height={40} width={90} alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`me-auto ${styles.liBox}`} style={{}}>
            <Nav.Link href="#earn" className={styles.liText}>Earn</Nav.Link>
            <Nav.Link href="#defi" className={styles.liText}>DeFi</Nav.Link>
            <Nav.Link href="#features" className={styles.liText}>Features</Nav.Link>
            <Nav.Link href="#blog" className={styles.liText}>Blog</Nav.Link>
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
