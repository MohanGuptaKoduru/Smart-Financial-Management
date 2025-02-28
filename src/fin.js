import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./fin.css";

const Fin = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [monthlyExpenses, setMonthlyExpenses] = useState("");
  const [savingsDuration, setSavingsDuration] = useState("");
  const [currentSavings, setCurrentSavings] = useState("");
  const [debtCommitments, setDebtCommitments] = useState("");
  const [insuranceCoverage, setInsuranceCoverage] = useState("");
  const [investmentPreferences, setInvestmentPreferences] = useState("");
  const [emergencyFundGoal, setEmergencyFundGoal] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = () => {
    console.log("Form Submitted!", {
      monthlyIncome,
      monthlyExpenses,
      savingsDuration,
      currentSavings,
      debtCommitments,
      insuranceCoverage,
      investmentPreferences,
      emergencyFundGoal,
    });
    setIsSubmitted(true);
  };

  const handleResubmit = () => {
    setIsSubmitted(false);
  };

  const handleHomeClick = () => {
    navigate("/Home"); // Navigate to the home page
  };

  return (
    <div className="fin-background">
      <div className="fin-container">
        <nav className="fin-navbar">
          <div className="navbar-content">
            <button className="fin-home-button" onClick={handleHomeClick}>
              Home
            </button>
          </div>
          <button className="fin-report-button">Reports</button>
        </nav>

        <div className="fin-card">
          {isSubmitted ? (
            <>
              <h1 className="fin-title">AI Generated Report</h1>
              <div className="fin-button-group">
                <button className="fin-custom-button">Expense Categorization</button>
                <button className="fin-custom-button">Personalized Insurance Planning</button>
                <button className="fin-custom-button">Emergency Fund Recommendations</button>
              </div>
              <button className="fin-submit-button" onClick={handleResubmit}>
                Re-submit Details
              </button>
            </>
          ) : (
            <>
              <h1 className="fin-title">AI Financial Management Recommendation System</h1>
              <div className="fin-form-grid">
                <input
                  type="text"
                  className="fin-form-input"
                  placeholder="Enter Monthly Income"
                  value={monthlyIncome}
                  onChange={(e) => setMonthlyIncome(e.target.value)}
                />
                <input
                  type="text"
                  className="fin-form-input"
                  placeholder="Enter Monthly Essential Expenses"
                  value={monthlyExpenses}
                  onChange={(e) => setMonthlyExpenses(e.target.value)}
                />
                <input
                  type="text"
                  className="fin-form-input"
                  placeholder="Enter Target Savings Duration"
                  value={savingsDuration}
                  onChange={(e) => setSavingsDuration(e.target.value)}
                />
                <input
                  type="text"
                  className="fin-form-input"
                  placeholder="Enter Current Savings Amount"
                  value={currentSavings}
                  onChange={(e) => setCurrentSavings(e.target.value)}
                />
                <input
                  type="text"
                  className="fin-form-input"
                  placeholder="Enter Debt or Loan Commitments"
                  value={debtCommitments}
                  onChange={(e) => setDebtCommitments(e.target.value)}
                />
                <input
                  type="text"
                  className="fin-form-input"
                  placeholder="Enter Insurance Coverage (if any)"
                  value={insuranceCoverage}
                  onChange={(e) => setInsuranceCoverage(e.target.value)}
                />
                <input
                  type="text"
                  className="fin-form-input"
                  placeholder="Enter Investment Preferences"
                  value={investmentPreferences}
                  onChange={(e) => setInvestmentPreferences(e.target.value)}
                />
                <input
                  type="text"
                  className="fin-form-input"
                  placeholder="Enter Emergency Fund Goal"
                  value={emergencyFundGoal}
                  onChange={(e) => setEmergencyFundGoal(e.target.value)}
                />
              </div>
              <button className="fin-submit-button" onClick={handleSubmit}>
                Submit Details
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fin;