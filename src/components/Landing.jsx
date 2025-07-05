import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <div className="auth-container">
      <div className="auth-card glass-card fade-in" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <h1 style={{ 
            fontSize: '3.5rem', 
            fontWeight: '800', 
            marginBottom: 'var(--spacing-md)',
            background: 'var(--primary-gradient)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: '1.2'
          }}>
            Feedback System
          </h1>
          <p style={{ 
            color: 'var(--text-secondary)', 
            fontSize: '1.3rem',
            lineHeight: '1.6',
            marginBottom: 'var(--spacing-lg)'
          }}>
            A sleek, modern platform for collecting and managing user feedback. 
            Built with glassmorphism design and powerful features.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: 'var(--spacing-md)', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: 'var(--spacing-xl)'
          }}>
            <Link to="/register" className="glass-button primary" style={{ fontSize: '1.1rem', padding: 'var(--spacing-md) var(--spacing-xl)' }}>
              🚀 Get Started
            </Link>
            <Link to="/login" className="glass-button" style={{ fontSize: '1.1rem', padding: 'var(--spacing-md) var(--spacing-xl)' }}>
              🔐 Sign In
            </Link>
          </div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-xl)'
        }}>
          <div style={{ 
            padding: 'var(--spacing-lg)',
            background: 'var(--bg-tertiary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 69, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>🌙</div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: 'var(--spacing-sm)' }}>Theme Support</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Switch between dark and light themes with a single click
            </p>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-lg)',
            background: 'var(--bg-tertiary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 69, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>🔒</div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: 'var(--spacing-sm)' }}>Secure</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              JWT authentication with protected routes and secure data handling
            </p>
          </div>
          
          <div style={{ 
            padding: 'var(--spacing-lg)',
            background: 'var(--bg-tertiary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 69, 0, 0.2)',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: 'var(--spacing-sm)' }}>📊</div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: 'var(--spacing-sm)' }}>Admin Panel</h3>
            <p style={{ color: 'var(--text-secondary)' }}>
              Comprehensive admin dashboard to manage and review all feedback submissions
            </p>
          </div>
        </div>

        <div style={{ 
          padding: 'var(--spacing-lg)',
          background: 'var(--bg-tertiary)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(255, 69, 0, 0.2)',
          marginBottom: 'var(--spacing-lg)'
        }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: 'var(--spacing-sm)' }}>
            🎯 Ready to get started?
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--spacing-md)' }}>
            Create an account and start collecting valuable feedback from your users
          </p>
          <Link to="/register" className="glass-button primary">
            Create Account Now
          </Link>
        </div>

        <div style={{ 
          color: 'var(--text-muted)', 
          fontSize: '0.875rem',
          borderTop: '1px solid rgba(255, 69, 0, 0.2)',
          paddingTop: 'var(--spacing-md)'
        }}>
          Built with React, Node.js, and modern web technologies
        </div>
      </div>
    </div>
  );
} 