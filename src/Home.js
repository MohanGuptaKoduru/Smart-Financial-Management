import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import './Home.css';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (location.state && location.state.userName) {
      setUserName(location.state.userName);
    } else {
      const user = auth.currentUser;
      if (user) {
        setUserName(user.displayName || 'User');
      }
    }
  }, [location]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const handleStartSubscription = () => {
    navigate('/Sub');
  };

  const handleSmartInvestingClick = () => {
    navigate('/fin');
  };

  const handlesmart = () => {
    navigate('/tax-profile');
  };

  const handleexpend = () => {
    navigate('/exp');
  };

  return (
    <div className={` ${darkMode ? 'dark-mode' : ''} full-width-mod`} style={{margin:"0", width:"100%", padding:"0"}}>
      <header className="header">
        <div className="logo">
          {/* <i className="fa fa-institution"></i> */}
          <span>Welcome, {userName}</span>
        </div>
        <nav className="nav-bar">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li>
              <i
                className={`fas fa-lightbulb ${darkMode ? 'dark' : ''}`}
                style={{ fontSize: '24px', cursor: 'pointer', color: darkMode ? 'yellow' : '#6C757D' }}
                onClick={toggleDarkMode}
              ></i>
            </li>
            <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <h1>Invest Smarter Today</h1>
        <p>Manage your finances effortlessly with expenditure tracking, smart investing, tax management, and bank & loan recommendations—all in one place.</p>
        <div className="hero-buttons">
          <a href="#" className="cta-button">Get Started →</a>
          <a href="#" className="cta-button">Learn More →</a>
        </div>
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">Tracking Accuracy</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1M+</span>
            <span className="stat-label">Loans Managed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">99%</span>
            <span className="stat-label">Tax Compliance</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Bank Partners</span>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2>Why Smart Investing?</h2>
        <p className="features-subtitle">Innovative features designed to simplify investing for everyone.</p>
        <div className="feature-cards">
        <div className="feature-card" onClick={handleexpend} onMouseEnter={(e) => e.currentTarget.classList.add('hover-effect')} onMouseLeave={(e) => e.currentTarget.classList.remove('hover-effect')}>
  {/* <a href="/exp.html" style={{ textDecoration: 'none', color: 'inherit' }}> */}
        <div className="feature-icon">
        <i class="fa fa-pie-chart"></i> 
          </div>
        <h3> Expenditure Tracking</h3>
        <p>Monitor your spending instantly with real-time updates and precise analytics.</p>
      {/* </a> */}
    </div>
          <div className="feature-card" onClick={handleSmartInvestingClick} onMouseEnter={(e) => e.currentTarget.classList.add('hover-effect')} onMouseLeave={(e) => e.currentTarget.classList.remove('hover-effect')}>
            <div className="feature-icon"><i class="fa fa-line-chart"></i></div>
            <h3>Smart Investing</h3>
            <p>Plan with confidence using our intelligent financial tools and insights.</p>
          </div>
          <div className="feature-card" onClick={handlesmart} onMouseEnter={(e) => e.currentTarget.classList.add('hover-effect')} onMouseLeave={(e) => e.currentTarget.classList.remove('hover-effect')}>
            <div className="feature-icon"><i class="fa fa-address-card-o"></i></div>
            <h3>Tax Management</h3>
            <p>Save time with automated tax calculations and filings.</p>
          </div>
          <div className="feature-card" onMouseEnter={(e) => e.currentTarget.classList.add('hover-effect')} onMouseLeave={(e) => e.currentTarget.classList.remove('hover-effect')}>
            <div className="feature-icon">
              {/* <img src="/bank-icon.png" alt="Bank Icon" style={{ width: '100%', height: '100%' }} /> */}
              <i class="fa fa-institution"></i>
            </div>
            <h3>Bank & Loan Recommendation</h3>
            <p>Access tailored banking and loan options anytime, anywhere.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-icon">
              <i className="fa fa-arrow-circle-right"></i>
            </div>
            <h3>Track</h3>
            <p>Monitor your expenses in real time.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <i className="fa fa-arrow-circle-right"></i>
            </div>
            <h3>Plan</h3>
            <p>Create smart financial strategies instantly.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <i className="fa fa-arrow-circle-right"></i>
            </div>
            <h3>Manage</h3>
            <p>Handle taxes with ease.</p>
          </div>
          <div className="step">
            <div className="step-icon">
              <i className="fa fa-arrow-circle-right"></i>
            </div>
            <h3>Borrow</h3>
            <p>Find the best loans securely.</p>
          </div>
        </div>
        <div className="animation-ball"></div>
      </section>

      <section className="testimonials-cta">
        <div className="testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Smart Investing saves me so much time tracking expenses!"</p>
              <div className="user-info">
                <i className="fa fa-user-circle-o"></i>
                <span>John Doe, Regular User</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Managing my taxes has never been easier."</p>
              <div className="user-info">
                <i className="fa fa-user-circle-o"></i>
                <span>Jane Smith, Business Owner</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"Loan recommendations are a game-changer!"</p>
              <div className="user-info">
                <i className="fa fa-user-circle-o"></i>
                <span>Mike Johnson, Daily User</span>
              </div>
            </div>
          </div>
        </div>
        <div className="cta">
          <h1>Ready to Start Investing?</h1>
          <p>Join thousands managing finances effortlessly today.</p>
          <button onClick={handleStartSubscription} className="cta-button">Start Subscription →</button>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            
            <span>Smart Investing</span>
            <p>Smarter investing for a better future.</p>
          </div>
          <div className="footer-support">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#">Pricing</a></li>
            </ul>
          </div>
          <div className="footer-support">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
        </div>
        <p className="footer-copyright">© 2025 Smart Investing. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;