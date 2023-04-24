import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FiMenu } from "react-icons/fi";
import Navbar from "react-bootstrap/Navbar";
import Button from "../common/Button";
import styles from "@/styles/Navbar.module.css";
import AnnoucementSection from "../Home/AnnoucementSection";

const NavBar = () => {
  return (
    <div id="nav">
      <AnnoucementSection />
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`overflow-hidden py-2 ${styles.navbarDiv}`}
        fixed="top"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={"/assets/images/home/logo.svg"}
              height={50}
              width={120}
              alt="logo"
              className={styles.image}
            />
          </Navbar.Brand>
          <Navbar.Toggle className={styles.logo}>
            <FiMenu />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="color-white text-sm-center">
              <div className={styles.liBox}>
                <Nav.Link
                  href="#feature"
                  className={`text-white ${styles.liText}`}
                >
                  Features
                </Nav.Link>
                <Nav.Link
                  href="#partners"
                  className={`text-white ${styles.liText}`}
                >
                  Partners
                </Nav.Link>
                <Nav.Link
                  href="#teamSection"
                  className={`text-white ${styles.liText}`}
                >
                  Team
                </Nav.Link>
                <Nav.Link
                  href="#review"
                  className={`text-white ${styles.liText}`}
                >
                  Reviews
                </Nav.Link>
                <Nav.Link href="#faq" className={`text-white ${styles.liText}`}>
                  FAQs
                </Nav.Link>
                <Nav.Link
                  href="#blog"
                  className={`text-white ${styles.liText}`}
                >
                  Blog
                </Nav.Link>
                <button className={`text-white ${styles.NavBtn}`}>Close</button>
                <button className={`my-3 ${styles.DownloadApp}`}>
                  Download App
                </button>
                <p className={styles.btntext}>Availiable for iOS & Android</p>
              </div>
              <div className={`color-white ${styles.DesktopliBox}`}>
                <Nav.Link
                  href="#feature"
                  className={`text-white  px-3 ${styles.liText}`}
                >
                  Earn
                </Nav.Link>
                <Nav.Link
                  href="#partners"
                  className={`  text-white ${styles.liText}`}
                >
                  DeFi
                </Nav.Link>
                <Nav.Link
                  href="#teamSection"
                  className={`text-white px-3 ${styles.liText}`}
                >
                  Features
                </Nav.Link>
                <Nav.Link
                  href="#review"
                  className={`text-white px-3 ${styles.liText}`}
                >
                  Blog
                </Nav.Link>
              </div>
            </Nav>
            <Nav>
              <Button text="Get the App" />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
