import React, { useState } from "react";
import FileUpload from "./FileUpload";
import "./TaxProfile.css";

const TaxProfile = () => {
  const [files, setFiles] = useState({
    pan: null,
    aadhaar: null,
    bank: null,
    salary: null,
    itReturn: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleFileChange = (field, file) => {
    setFiles((prev) => ({ ...prev, [field]: file }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(files).some((file) => !file)) {
      setError("⚠️ Please upload all required documents.");
      return;
    }

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="app-container">
      <div className="upload-card">
        <h2>TAX PROFILE</h2>

        <div className="form-group">
          <label className="form-label">PAN Card</label>
          <FileUpload onFileChange={(file) => handleFileChange("pan", file)} />
        </div>

        <div className="form-group">
          <label className="form-label">Aadhaar Card</label>
          <FileUpload onFileChange={(file) => handleFileChange("aadhaar", file)} />
        </div>

        <div className="form-group">
          <label className="form-label">Bank Statement</label>
          <FileUpload onFileChange={(file) => handleFileChange("bank", file)} />
        </div>

        <div className="form-group">
          <label className="form-label">Salary Slip</label>
          <FileUpload onFileChange={(file) => handleFileChange("salary", file)} />
        </div>

        <div className="form-group">
          <label className="form-label">IT Return</label>
          <FileUpload onFileChange={(file) => handleFileChange("itReturn", file)} />
        </div>

        {error && <p className="error-message">{error}</p>}

        <button className="submit-btn" onClick={handleSubmit}>Submit</button>

        {submitted && <p className="success-message">✅ Form Submitted Successfully!</p>}
      </div>
    </div>
  );
};

export default TaxProfile;