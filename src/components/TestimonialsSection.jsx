import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/components/TestimonialSection.css";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'Nivix delivered exactly what we needed. Their attention to detail and professional approach made our project a huge success.',
      initial: 'S'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Digital Ventures',
      text: 'Outstanding work! The team at Nivix exceeded our expectations and delivered on time. Highly recommended for any digital project.',
      initial: 'M'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Creative Solutions',
      text: 'Professional, reliable, and incredibly talented. Nivix transformed our vision into a beautiful, functional website.',
      initial: 'E'
    }
  ];

  return (
    <section id="testimonials" className="section" style={{ background: 'var(--light-gray)' }}>
      <Container>
        <Row>
          <Col>
            <h2 className="section-title text-center mb-5">What Our Clients Say</h2>
          </Col>
        </Row>
        <Row>
          {testimonials.map((testimonial) => (
            <Col key={testimonial.id} lg={4} md={6} className="mb-4">
              <div className="testimonial-card">
                <div className="client-avatar">
                  {testimonial.initial}
                </div>
                <p className="mb-4 fst-italic">"{testimonial.text}"</p>
                <h5 className="mb-1">{testimonial.name}</h5>
                <p className="text-muted small">{testimonial.company}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
