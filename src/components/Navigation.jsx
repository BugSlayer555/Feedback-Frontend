import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <Link to="/" className="nav-brand">
          Feedback System
        </Link>
        <div className="nav-links">
          {!isAuthenticated ? (
            <>
              <Link 
                to="/" 
                className={`glass-button ${location.pathname === '/' ? 'primary' : ''}`}
              >
                Home
              </Link>
              <Link 
                to="/register" 
                className={`glass-button ${location.pathname === '/register' ? 'primary' : ''}`}
              >
                Register
              </Link>
              <Link 
                to="/login" 
                className={`glass-button ${location.pathname === '/login' ? 'primary' : ''}`}
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <Link 
                to="/feedback" 
                className={`glass-button ${location.pathname === '/feedback' ? 'primary' : ''}`}
              >
                Submit Feedback
              </Link>
              <Link 
                to="/admin" 
                className={`glass-button ${location.pathname === '/admin' ? 'primary' : ''}`}
              >
                Admin Panel
              </Link>
              <button onClick={handleLogout} className="glass-button">
                Logout
              </button>
            </>
          )}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
} 