import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    prename: "",
    age: "",
    cin: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); // Parse response as JSON

      if (response.ok) {
        setMessage(data.message); // Show success message
        setFormData({ name: "", prename: "", age: "", cin: "" });
      } else {
        setMessage(
          `Failed to register user: ${data.message || response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage(`Error registering user: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label>Prename</label>
      <input
        type="text"
        name="prename"
        value={formData.prename}
        onChange={handleChange}
        required
      />
      <label>Age</label>
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <label>CIN (Unique ID)</label>
      <input
        type="text"
        name="cin"
        value={formData.cin}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default RegistrationForm;
