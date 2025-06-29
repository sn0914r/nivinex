import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import "../styles/components/Footer.css";

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-light pt-5">
      <Container>
        <Row>
          <Col lg={4} className="mb-4 mb-lg-0">
            <div className="footer-logo">Nivinex</div>
            <p className="mb-4">
                We design and develop powerful web apps that are fast, functional, and future-ready.
            </p>
            <div className="social-links d-flex gap-3">
              {/* <a href="#" className="social-link" aria-label="Facebook">
                <FiFacebook />
              </a> */}
              {/* <a href="#" className="social-link" aria-label="Twitter">
                <FiTwitter />
              </a> */}
              <a href="https://www.linkedin.com/in/vinod-kumar-4b0b532ab" className="social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href="https://www.instagram.com/nivinex_agency?igsh=bjh6cWdwbDN5N2dj" className="social-link" aria-label="Instagram">
                <FiInstagram />
              </a>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4 mb-lg-0">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {['home', 'about', 'services', 'portfolio'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="text-light text-decoration-none"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(section);
                    }}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={3} md={6} className="mb-4 mb-lg-0">
            <h5 className="text-white mb-3">Services</h5>
            <ul className="list-unstyled">
              <li><span className="text-light">Web Development</span></li>
              <li><span className="text-light">E-Commerce</span></li>
              <li><span className="text-light">SEO Optimization</span></li>
            </ul>
          </Col>

          <Col lg={3} md={12}>
            <h5 className="text-white mb-3">Contact Info</h5>
            <ul className="list-unstyled">
              <li><span className="text-light">vinod93810@gmail.com</span></li>
              {/* <li><span className="text-light">9999999999</span></li> */}
            </ul>
          </Col>
        </Row>

        <hr className="my-4 border-secondary" />

        <Row>
          <Col className="text-center">
            <p className="mb-0">
              {/* © {currentYear} Nivix. All rights reserved. | */}
               Built with passion for digital excellence.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
