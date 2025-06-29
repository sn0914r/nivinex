import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FiTarget, FiUsers, FiAward, FiGlobe } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../styles/components/AboutSection.css";

const AboutSection = () => {
  const skillsRef = useRef(null);

  const stats = [
    { icon: <FiUsers />, number: "150+", label: "Happy Clients" },
    { icon: <FiTarget />, number: "300+", label: "Projects Completed" },
    { icon: <FiAward />, number: "5+", label: "Years Experience" },
  ];


  const developers = [
    {
      name: "Sivananda Reddy",
      role: "Front End Developer",
      avatar: "S",
      bio: "Building modern web apps with React and Firebase. Passionate about creating digital experiences that last.",
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
      ],
      socialLinks: [
        {
          icon: <FaGithub />,
          url: "https://github.com/sn0914r",
          label: "GitHub",
        },
        // {
        //   icon: <FaLinkedin />,
        //   url: "#",
        //   label: "LinkedIn",
        // },
        // {
        //   icon: <FiGlobe />,
        //   url: "#",
        //   label: "Portfolio",
        // },
      ],
    },
    {
      name: "Vinod Kumar",
      role: "UI/UX Designer",
      avatar: "V",
      bio: "Crafting beautiful and intuitive user interfaces. Specializing in modern design systems and user experience optimization.",
      skills: [
        { name: "HTML", icon: "🌐" },
        { name: "CSS", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "Bootstrap", icon: "🅱️" },
        { name: "Figma", icon: "🎨"}
      ],
      socialLinks: [
        {
          icon: <FaGithub />,
          url: "https://github.com/nani986690",
          label: "GitHub",
        },
        {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/vinod-kumar-4b0b532ab",
          label: "LinkedIn",
        },
        // {
        //   icon: <FiGlobe />,
        //   url: "#",
        //   label: "Portfolio",
        // },
      ],
    },
  ];

  useEffect(() => {
    const containers = document.querySelectorAll(".skills-container.about-us");
    const scrollSpeed = 1;

    // Keep references to scroll positions per container
    const scrollStates = Array.from(containers).map(() => ({
      scrollAmount: 0,
    }));

    const interval = setInterval(() => {
      containers.forEach((container, index) => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        scrollStates[index].scrollAmount += scrollSpeed;

        if (scrollStates[index].scrollAmount >= maxScroll) {
          scrollStates[index].scrollAmount = 0;
        }

        container.scrollLeft = scrollStates[index].scrollAmount;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="section-title text-center mb-5 fs-1">About Nivinex</h1>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col lg={12} className="mb-4 mb-lg-0 text-center"> {/* make col lg=6 for adding devs and remove text-center */}
            <div className="about-content">
              <h3 className="h2 mb-4">We Build Digital Excellence</h3>
              <p className="mb-4">
                At Nivinex, we're passionate about creating digital solutions that
                make a difference. Our team of experienced developers,
                designers, and strategists work together to deliver exceptional
                results that exceed expectations.
              </p>
              <p className="mb-4">
                From stunning websites to complex web applications, we leverage
                the latest technologies and best practices to ensure your
                project is built for success, scalability, and outstanding
                performance.
              </p>
              <Row className="d-none" >
                {stats.map((stat, index) => (
                  <Col key={index} xs={4} className="text-center">
                    <div className="service-icon mb-3">{stat.icon}</div>
                    <h4
                      className="h3 text-primary mb-1"
                      style={{ color: "var(--primary-orange)" }}
                    >
                      {stat.number}
                    </h4>
                    <p className="small text-muted">{stat.label}</p>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
          <Col lg={12}>
            <div className="developers-section">
              <h3 className="h2 mb-4 text-center">Our Developers</h3>
              <div className="developers-grid">
                {developers.map((developer, index) => (
                  <div key={index} className="developer-card">
                    <div className="developer-profile">
                      <div className="profile-avatar">{developer.avatar}</div>
                      <div className="developer-info">
                        <h4 className="developer-name">{developer.name}</h4>
                        <p className="developer-role">{developer.role}</p>
                      </div>
                    </div>

                    <div className="developer-bio">
                      <p>{developer.bio}</p>
                    </div>

                    {
                      <div className="skills-section">
                        <h6 className="skills-title">Skills</h6>
                        <div className="skills-container about-us">
                          {[...developer.skills, ...developer.skills].map(
                            (skill, skillIndex) => (
                              <div key={skillIndex} className="skill-item">
                                <span className="skill-icon">{skill.icon}</span>
                                <span className="skill-name">{skill.name}</span>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    }

                    <div className="social-links-section">
                      <div className="developer-social-links">
                        {developer.socialLinks.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="developer-social-link"
                            aria-label={link.label}
                          >
                            {link.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
