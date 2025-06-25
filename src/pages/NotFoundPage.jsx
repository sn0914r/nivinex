import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/pages/NotFoundPage.css";

export default function NotFoundPage() {
  return (
    <div className="not-found-wrapper">
      {/* Background Text */}
      <div className="not-found-background">NIVINX</div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      {/* Main Content */}
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6}>
            <div className="not-found-content">
              <div className="error-code pulse-animation">404</div>
              <h1 className="not-found-title">PAGE NOT FOUND</h1>
              <h2 className="not-found-subtitle">
                Oops! The page you're looking for doesn't exist.
              </h2>
              <p className="not-found-description">
                The page you are trying to access might have been moved,
                deleted, or you entered the wrong URL. Don't worry, it happens
                to the best of us!
              </p>
              <Link to="/" className="not-found-button">
                Go Back Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};