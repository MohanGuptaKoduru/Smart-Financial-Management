import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Reports = () => {
  const categoryChartRef = useRef(null);
  const expenseLineChartRef = useRef(null);

  useEffect(() => {
    // -------------------------
    // PIE CHART: Spending by Category
    // -------------------------
    const categoryCtx = categoryChartRef.current.getContext("2d");
    const categoryChart = new Chart(categoryCtx, {
      type: "pie",
      data: {
        labels: ["Food", "Transport", "Bills", "Entertainment"],
        datasets: [
          {
            label: "Spending by Category",
            data: [300, 100, 200, 150], // Placeholder data
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // -------------------------
    // LINE CHART: Monthly Expenses
    // -------------------------
    const expenseCtx = expenseLineChartRef.current.getContext("2d");
    const expenseLineChart = new Chart(expenseCtx, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April"], // Placeholder months
        datasets: [
          {
            label: "Monthly Expenses",
            data: [500, 700, 450, 600], // Placeholder data
            borderColor: "#36A2EB",
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    // Cleanup function to destroy charts when the component unmounts
    return () => {
      categoryChart.destroy();
      expenseLineChart.destroy();
    };
  }, []);

  // -------------------------
  // EXPORT FUNCTIONS
  // -------------------------
  const exportCSV = () => {
    alert("Export CSV functionality to be implemented.");
  };

  const exportPDF = () => {
    alert("Export PDF functionality to be implemented.");
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Reports</h1>

      {/* Pie Chart: Spending by Category */}
      <div className="my-4">
        <h5>Spending by Category</h5>
        <canvas ref={categoryChartRef} height="150"></canvas>
      </div>

      {/* Line Chart: Monthly Expenses Over Time */}
      <div className="my-4">
        <h5>Monthly Expenses</h5>
        <canvas ref={expenseLineChartRef} height="150"></canvas>
      </div>

      {/* Export Buttons */}
      <button className="btn btn-secondary me-2" onClick={exportCSV}>
        Export CSV
      </button>
      <button className="btn btn-secondary" onClick={exportPDF}>
        Export PDF
      </button>

      {/* Link to go back to the main dashboard (optional) */}
      <a href="/home" className="btn btn-primary mt-3 d-block">
        Back to Dashboard
      </a>
    </div>
  );
};

export default Reports;