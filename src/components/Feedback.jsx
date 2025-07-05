import React from 'react'
import { useState } from "react";
import axios from "axios";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear messages when user starts typing
    if (error) setError("");
    if (success) setSuccess("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return false;
    }
    
    if (!formData.message.trim()) {
      setError("Please enter your feedback message");
      return false;
    }
    
    if (formData.message.trim().length < 10) {
      setError("Feedback message must be at least 10 characters long");
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    setError("");
    setSuccess("");
    
    try {
      const response = await axios.post("https://feedback-backend-hwa9.onrender.com/feedback", {
        name: formData.name.trim(),
        message: formData.message.trim(),
      });
      
      setSuccess("Thank you! Your feedback has been submitted successfully.");
      setFormData({ name: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccess("");
      }, 5000);
      
    } catch (err) {
      setError(err.response?.data?.message || "Failed to submit feedback. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{ paddingTop: 'var(--spacing-xl)' }}>
      <div className="glass-card fade-in" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>
          <h1 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            marginBottom: 'var(--spacing-sm)',
            background: 'var(--primary-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Share Your Feedback
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            We value your thoughts and suggestions. Help us improve by sharing your experience.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="glass-input"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="message">Feedback Message</label>
            <textarea
              id="message"
              name="message"
              className="glass-input"
              placeholder="Share your thoughts, suggestions, or any issues you've encountered..."
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
              rows="6"
              style={{ 
                resize: 'vertical',
                minHeight: '120px',
                fontFamily: 'inherit'
              }}
            />
            <small style={{ 
              color: 'var(--text-muted)', 
              fontSize: '0.875rem',
              marginTop: 'var(--spacing-xs)',
              display: 'block'
            }}>
              Minimum 10 characters required
            </small>
          </div>

          {error && <div className="form-error">{error}</div>}
          {success && <div className="form-success">{success}</div>}

          <button 
            type="submit" 
            className="glass-button primary" 
            style={{ width: '100%', marginTop: 'var(--spacing-md)' }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="loading"></span>
                Submitting Feedback...
              </>
            ) : (
              'Submit Feedback'
            )}
          </button>
        </form>

        <div style={{ 
          marginTop: 'var(--spacing-lg)',
          padding: 'var(--spacing-md)',
          background: 'var(--bg-tertiary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 69, 0, 0.2)'
        }}>
          <h3 style={{ 
            color: 'var(--text-primary)', 
            marginBottom: 'var(--spacing-sm)',
            fontSize: '1.1rem'
          }}>
            💡 Tips for great feedback:
          </h3>
          <ul style={{ 
            color: 'var(--text-secondary)', 
            paddingLeft: 'var(--spacing-md)',
            lineHeight: '1.6'
          }}>
            <li>Be specific about what you liked or didn't like</li>
            <li>Include suggestions for improvement</li>
            <li>Mention any bugs or issues you encountered</li>
            <li>Share your overall experience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
