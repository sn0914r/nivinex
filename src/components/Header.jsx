import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../styles/components/Header.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    // { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <>
      <header className="header">
        <Container>
          <Row className="align-items-center py-3">
            <Col xs={6} md={3}>
              <div 
                className="logo rounded-circle d-flex gap-1"
                onClick={() => scrollToSection('home')}
                style={{width: "50px", aspectRatio: "1"}}
              >
                <img src="images/nivinix_logo_header.jpg" alt="logo" className="w-100 h-100 object-fit-contain rounded-circle"/>
                <span className="d-none d-lg-block">Nivinex</span>
              </div>
            </Col>
            <Col xs={6} md={9} className="text-end">
              {/* Desktop Navigation */}
              <nav className="d-none d-lg-block">
                <ul className="nav-links">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="nav-link"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile/Tablet Hamburger */}
              <Button
                variant="link"
                className="hamburger-btn d-lg-none"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation"
              >
                <FiMenu size={24} />
              </Button>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header d-flex justify-content-between align-items-center px-3 py-2">
          <div className="logo">Nivinex</div>
          <Button
            variant="link"
            className="close-btn"
            onClick={toggleMobileMenu}
            aria-label="Close navigation"
          >
            <FiX size={24} />
          </Button>
        </div>
        <nav>
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="position-fixed w-100 h-100"
          style={{
            top: 0,
            left: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
          }}
          onClick={toggleMobileMenu}
        />
      )}
    </>
  );
};
