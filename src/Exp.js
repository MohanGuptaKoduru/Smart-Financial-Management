import React, { useState } from "react";
import "./Exp.css"; // Custom CSS for this component

const Exp = () => {
  // State for dark mode
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // State for form inputs
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");
  const [customCategory, setCustomCategory] = useState("");
  const [date, setDate] = useState("");
  const [showCustomCategory, setShowCustomCategory] = useState(false);

  // State for expenses table
  const [expenses, setExpenses] = useState([]);

  // State for editing
  const [editIndex, setEditIndex] = useState(null);

  // State for toast notifications
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
  };

  // Handle category change
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);
    setShowCustomCategory(selectedCategory === "Custom");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!expenseName || !amount || !date) {
      alert("Please fill in all required fields");
      return;
    }

    if (category === "Custom" && !customCategory.trim()) {
      alert("Please enter a custom category");
      return;
    }

    const newExpense = {
      name: expenseName,
      amount: amount,
      category: category === "Custom" ? customCategory : category,
      date: date,
    };

    if (editIndex !== null) {
      // Update existing expense
      const updatedExpenses = [...expenses];
      updatedExpenses[editIndex] = newExpense;
      setExpenses(updatedExpenses);
      setEditIndex(null);
      setToastMessage("Expense updated successfully!");
    } else {
      // Add new expense
      setExpenses([...expenses, newExpense]);
      setToastMessage("Expense added successfully!");
    }

    // Reset form
    setExpenseName("");
    setAmount("");
    setCategory("Food");
    setCustomCategory("");
    setDate("");
    setShowCustomCategory(false);

    // Show toast
    setShowToast(true);
  };

  // Handle edit expense
  const handleEdit = (index) => {
    const expense = expenses[index];
    setExpenseName(expense.name);
    setAmount(expense.amount);
    setCategory(expense.category);
    setDate(expense.date);
    setEditIndex(index);

    // Check if the category is custom
    const predefined = ["Food", "Transport", "Bills", "Entertainment"];
    if (!predefined.includes(expense.category)) {
      setCategory("Custom");
      setCustomCategory(expense.category);
      setShowCustomCategory(true);
    }
  };

  // Handle delete expense
  const handleDelete = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    setToastMessage("Expense deleted successfully!");
    setShowToast(true);

    // Reset form if editing
    if (editIndex === index) {
      setEditIndex(null);
      setExpenseName("");
      setAmount("");
      setCategory("Food");
      setCustomCategory("");
      setDate("");
      setShowCustomCategory(false);
    }
  };

  return (
    <div className={`exp-container ${darkMode ? "exp-dark-mode" : ""}`}>
      {/* Sidebar */}
      <nav className="exp-sidebar">
        <div className="logo">
          <h4>Expense Tracker</h4>
        </div>
        <a href="#" className="exp-nav-link">
          Dashboard
        </a>
        <a href="reports.html" className="exp-nav-link">
          Reports
        </a>
        <div className="exp-dropdown">
          <button className="exp-dropdown-toggle">Settings</button>
          <div className="exp-dropdown-menu">
            <button onClick={toggleDarkMode}>Change Theme</button>
            <button>Enable Reminders</button>
            <button>Data Backup</button>
            <div className="dropdown-divider"></div>
            <button>Logout</button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="exp-main-content">
        {/* Header */}
        <div className="exp-header">
          <h2>Dashboard</h2>
          <div className="exp-header-buttons">
            <button className="exp-btn-primary">Add New Expense</button>
            <i className="exp-user-icon"></i>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="exp-summary-cards">
          <div className="exp-card">
            <h5>Total Expenses</h5>
            <p>$5,000</p>
          </div>
          <div className="exp-card">
            <h5>Monthly Expenses</h5>
            <p>$1,200</p>
          </div>
          <div className="exp-card">
            <h5>Remaining Budget</h5>
            <p>$3,800</p>
          </div>
        </div>

        {/* Expense Form */}
        <div className="exp-expense-form">
          <h3>Add Expense</h3>
          <form onSubmit={handleSubmit}>
            <div className="exp-form-group">
              <label>Expense Name</label>
              <input
                type="text"
                placeholder="e.g. Grocery"
                value={expenseName}
                onChange={(e) => setExpenseName(e.target.value)}
              />
            </div>
            <div className="exp-form-group">
              <label>Amount ($)</label>
              <input
                type="number"
                placeholder="e.g. 50"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="exp-form-group">
              <label>Category</label>
              <select value={category} onChange={handleCategoryChange}>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Bills">Bills</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Custom">Custom</option>
              </select>
            </div>
            {showCustomCategory && (
              <div className="exp-form-group">
                <label>Custom Category</label>
                <input
                  type="text"
                  placeholder="Enter custom category"
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                />
              </div>
            )}
            <div className="exp-form-group">
              <label>Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <button type="submit" className="exp-btn-success">
              {editIndex !== null ? "Update Expense" : "Add Expense"}
            </button>
          </form>
        </div>

        {/* Expense Table */}
        <div className="exp-expense-table">
          <h3>Recent Expenses</h3>
          <table className="exp-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount ($)</th>
                <th>Category</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.name}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.category}</td>
                  <td>{expense.date}</td>
                  <td>
                    <button
                      className="exp-btn-edit"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="exp-btn-delete"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Toast Notification */}
      {showToast && (
        <div className="exp-toast">
          <div className="exp-toast-header">
            <strong>Expense Tracker</strong>
            <small>Now</small>
            <button onClick={() => setShowToast(false)}>×</button>
          </div>
          <div className="exp-toast-body">{toastMessage}</div>
        </div>
      )}
    </div>
  );
};

export default Exp;