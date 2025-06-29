import { useState, useCallback, useEffect } from "react";
import { FaStar, FaUser, FaBuilding, FaEnvelope, FaCommentDots, FaCamera } from "react-icons/fa"
import "../styles/pages/CollectTestimonialPage.css";

import { db } from "../firebase/firebaseConfig.js";
import { addDoc, collection } from "firebase/firestore";
import { Container, Row, Col } from "react-bootstrap";

export default function CollectTestimonialForm(){
  const [formData, setFormData] = useState({
    fullName: "", company: "", email: "",
    testimonial: "", rating: 0,
    profilePhoto: null, consent: false
  })
  const [hover, setHover] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(()=>{
    document.title = "Testimonial"
  }, [])
  
  const handleInputChange = useCallback((field, value)=>{
    setFormData(prev => ({...prev, [field]: value}));
  }, [])
  const handleSubmit = useCallback( async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try{
      await addDoc(collection(db, "testimonials"), formData);
      alert("Thank you for your feedback!");
      setFormData({
        fullName: "", company: "", email: "",
        testimonial: "", rating: 0,
        profilePhoto: null, consent: false
      })
    }catch(error){
      alert("an error occured: ", error);
    }

    setIsSubmitting(false);

  }, [formData])

  function StarRating(){
    return(
      <div className="star-rating">
        {
          [1, 2, 3, 4, 5].map(star => (
            <button key={star} type="button" className="star-button"
              onClick={() => handleInputChange("rating", star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              <FaStar className={`star-icon ${star <= (hover || formData.rating) ? "star-filled" : "star-empty"}`} />
            </button>
          ))
        }
      </div>
    )
  }
  return <Presenter handleSubmit={handleSubmit} StarRating={StarRating} isSubmitting={isSubmitting} formData={formData} />
}

function Presenter({handleSubmit, StarRating, isSubmitting, formData}){
  return(
    <div className="testimonial-wrapper">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12}>
            <div className="testimonial-container">
              <div className="testimonial-card">
                <div className="testimonial-header">
                  <div className="header-icon">
                    <FaCommentDots />
                  </div>
                  <h1 className="testimonial-title">Share Your Experience</h1>
                  <p className="testimonial-description">
                    Your feedback helps us improve and helps others make informed decisions. We'd love to hear about
                    your experience with Nivinex.
                  </p>
                </div>

                <div className="testimonial-content">
                  <form onSubmit={handleSubmit}>

                    {/* Personal Information */}
                    <div className="form-section">
                      <div className="form-row">

                        <div className="form-group">
                          <label htmlFor="fullName" className="form-label">
                            <FaUser />
                            FullName <span className="text-danger">*</span>
                          </label>
                          <input type="text" id="fullName" className="form-input"
                            value={formData.fullName}
                            onChange={e => handleInputChange("fullName", e.target.value)}
                            placeholder="Enter your full name"
                            required
                            />
                        </div>

                        <div className="form-group">
                          <label htmlFor="company" className="form-label">
                            <FaBuilding />
                            Company / Role <span className="text-danger">*</span>
                          </label>
                          <input type="text" id="company" className="form-input" 
                            value={formData.company} 
                            onChange={e => handleInputChange("company", e.target.value)} 
                            placeholder="Your company or role"
                            required
                          />
                        </div>

                      </div>
                    </div>

                    {/* Email */}
                    <div className="form-section">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          <FaEnvelope />
                          Email (optional, kept private)
                        </label>
                        <input type="email" id="email" className="form-input" value={formData.email} onChange={e => handleInputChange("email", e.target.value)} placeholder="your.email@example.com" />
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="form-section">
                      <div className="form-group">
                        <label htmlFor="testimonial" className="form-label">
                          <FaCommentDots />
                          Your Testimonial <span className="text-danger">*</span>
                        </label>
                        <textarea id="testimonial" className="form-input form-textarea" value={formData.testimonial} onChange={e => handleInputChange("testimonial", e.target.value)} placeholder="Tell us about your experience with Nivinex. What did you like? How did you achieve your goals?" maxLength={250} required></textarea>
                        <div className="character-count">{formData.testimonial.length}/250 characters</div>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="rating-section">
                      <label className="rating-label">Rating <span className="text-danger">*</span></label>
                      <div className="star-rating-container d-flex justify-content-center">
                        <StarRating />
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="consent-section">
                      <input type="checkbox" id="consent" className="consent-checkbox" checked={formData.consent} onChange={e => handleInputChange("consent", e.target.checked)} required/>
                      <label htmlFor="consent" className="consent-label">
                        I allow Nivinex to publish this testimonial on the website and marketing materials. I understand
                        that my name, and company may be displayed publicly.
                      </label>
                    </div>

                    {/* Submit Button */}
                    <div className="submit-section">
                      <button type="submit" disabled={isSubmitting || !formData.consent || formData.rating === 0} className="submit-button">
                        {isSubmitting?(
                          <>
                            <div className="loading-spinner">
                              Submitting....
                            </div>
                          </>
                        ):(
                          "Submit Testimonial"
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              </div>

              {/* Footer */}
              <div className="footer-info">
                <p>
                  Your testimonial will be reviewed before publication. We respect your privacy and will never share
                  your email address.
                </p>
              </div>

            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}