import React, { useEffect, useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { FiMenu } from "react-icons/fi";
import Navbar from "react-bootstrap/Navbar";
import { GradiantButton } from "../common/Button";
import styles from "@/styles/Navbar.module.css";
import AnnoucementSection from "../Home/AnnoucementSection";
import { useRouter } from 'next/router'
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";
import { AiOutlineClose } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger)

const desktopNav = [
  {
    href: "#feature",
    text: "Earn"
  },
  {
    href: "#partners",
    text: "DeFi"
  },
  {
    href: "#teamSection",
    text: "Features"
  },
  {
    href: "/blog",
    text: "Blog"
  }
]

const mobileNav = [
  {
    href: "#feature",
    text: "Features"
  },
  {
    href: "#partners",
    text: "Partners"
  },
  {
    href: "#teamSection",
    text: "Team"
  },
  {
    href: "#review",
    text: "Reviews"
  },
  {
    href: "#faq",
    text: "FAQs"
  },
  {
    href: "#blog",
    text: "Blog"
  },

]

const NavBar = ({ show, setShow }) => {
  const route = useRouter();
  const ref = useRef(null)

  useEffect(() => {
    const animation = gsap.from(ref.current, {
      yPercent: -100,
      paused: true,
      duration: 0.2
    }).progress(1);

    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? animation.play() : animation.reverse()
      }
    });
    () => animation.kill()
  }, []);


  return (
    <div>
      <AnnoucementSection />
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`overflow-hidden py-2 ${styles.navbarDiv}`}
        fixed="top"
        id="nav"
        ref={ref}
      >
        <Container>
          <Navbar.Brand href="">
            <img
              src={"/assets/images/home/logo.svg"}
              height={50}
              width={120}
              alt="logo"
              className={styles.image}
            />
          </Navbar.Brand>
          <Navbar.Toggle className={styles.logo} onClick={() => setShow(!show)} style={{ outline: 'none', border: 'none' }}>
            {show === true ? <>
              <AiOutlineClose size={26} />
            </> :
              <FiMenu size={26} />}
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="color-white text-sm-center" >
              <div className={styles.liBox} style={{ height: "auto" }}>
                {mobileNav.map((nav) => {
                  return (
                    <Nav.Link
                      href={nav.href}
                      className={`text-white ${styles.liText}`}
                    >
                      {nav.text}
                    </Nav.Link>
                  )
                })}

                <Navbar.Toggle style={{ border: "none" }}>
                  <button className={`text-white ${styles.NavBtn}`} style={{ border: "none" }}>Close</button>
                </Navbar.Toggle>
                <button className={`my-3 ${styles.DownloadApp}`}>
                  Download App
                </button>
                <p className={styles.btntext}>*Availiable for iOS & Android</p>
              </div>
              <div className={`color-white ${styles.DesktopliBox}`} style={{ paddingTop: 10 }}>
                {desktopNav.map((nav) => {
                  return (
                    <div>
                      <Nav.Link
                        href={nav.href}
                        className={`text-white  px-3 ${styles.liText}`}
                      >
                        {nav.text}
                      </Nav.Link>
                      {(route.pathname === nav.href) &&
                        <img src="/assets/images/home/navStar.svg" style={{ marginTop: -14, marginLeft: "38%" }} />}
                    </div>
                  )
                })}

              </div>
            </Nav>
            <div className={styles.desktopButton}>
              {route.pathname === "/blog" ?
                <Nav>
                  <GradiantButton text="Download App" />
                </Nav> :
                <Nav className={styles.getButton}>
                  <GradiantButton text="Get the App" />
                </Nav>
              }
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
