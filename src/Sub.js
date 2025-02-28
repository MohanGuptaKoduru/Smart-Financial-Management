import React, { useState } from 'react';
import './Sub.css'; // Ensure the correct path

const Sub = () => {
  const [selectedTab, setSelectedTab] = useState('Basic');
  const [isYearly, setIsYearly] = useState(true);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  // Pricing based on monthly or yearly
  const pricing = {
    Basic: {
      monthly: 9.99,
      yearly: 99.99,
    },
    Pro: {
      monthly: 19.99,
      yearly: 199.99,
    },
    Premium: {
      monthly: 29.99,
      yearly: 299.99,
    },
  };

  // Features for each plan
  const features = {
    Basic: [
      'Expenditure Tracking',
      'Smart Investing (Limited)',
      'Tax Management (Manual)',
      'Bank & Loan Recommendations (Basic)',
    ],
    Pro: [
      'Expenditure Tracking',
      'Smart Investing (Advanced)',
      'Tax Management (Semi-Automated)',
      'Bank & Loan Recommendations (Tailored)',
    ],
    Premium: [
      'Expenditure Tracking',
      'Smart Investing (Full Access)',
      'Tax Management (Fully Automated)',
      'Bank & Loan Recommendations (Premium)',
    ],
  };

  return (
    <div className="sub-container">
      {/* Header & Subheader */}
      <div className="header">
        <h1>Our Subscription Plans</h1>
        <p className="subheader">
          Unlock Your Smart Financial Future – Subscribe Today!
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs">
        <button
          className={`tab ${selectedTab === 'Basic' ? 'active' : ''}`}
          onClick={() => handleTabClick('Basic')}
        >
          Basic
        </button>
        <button
          className={`tab ${selectedTab === 'Pro' ? 'active' : ''}`}
          onClick={() => handleTabClick('Pro')}
        >
          Pro
        </button>
        <button
          className={`tab ${selectedTab === 'Premium' ? 'active' : ''}`}
          onClick={() => handleTabClick('Premium')}
        >
          Premium
        </button>
      </div>

      {/* Pricing & Toggle */}
      <div className="pricing-toggle">
        <div className="toggle-container">
          <span className={!isYearly ? 'active' : ''}>Monthly</span>
          <div className="toggle-switch" onClick={handleToggle}>
            <div className={`slider ${isYearly ? 'yearly' : 'monthly'}`}></div>
          </div>
          <span className={isYearly ? 'active' : ''}>Yearly</span>
        </div>
        <div className="pricing">
          <h2>
            ${pricing[selectedTab][isYearly ? 'yearly' : 'monthly']}{' '}
            <span>/{isYearly ? 'year' : 'month'}</span>
          </h2>
        </div>
      </div>

      {/* Features List */}
      <div className="features">
        <h3>What's Included:</h3>
        <ul>
          {features[selectedTab].map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Suggested Plan */}
      <div className="suggested-plan">
        <h3>Suggested Plan:</h3>
        <p>
          Based on your usage of <strong>Expenditure Tracking</strong>,{' '}
          <strong>Smart Investing</strong>, <strong>Tax Management</strong>, and{' '}
          <strong>Bank & Loan Recommendations</strong>, we recommend the{' '}
          <strong>Pro Plan</strong> for the best value.
        </p>
      </div>

      {/* Select Button */}
      <div className="select-button">
        <button className="select">Select {selectedTab} Plan</button>
      </div>
    </div>
  );
};

export default Sub;