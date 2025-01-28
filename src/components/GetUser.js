import React, { useState } from "react";

const GetUser = () => {
  const [cin, setCin] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetUser = async () => {
    if (!cin) {
      setError("Please enter a CIN.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/get/${cin}`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
        setError("");
      } else {
        setError(`User with CIN ${cin} not found`);
        setUser(null);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Error fetching user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="get-user">
      <input
        type="text"
        placeholder="Enter CIN"
        value={cin}
        onChange={(e) => setCin(e.target.value)}
      />
      <button onClick={handleGetUser} disabled={loading}>
        {loading ? "Loading..." : "Get User"}
      </button>

      {error && <p>{error}</p>}

      {user && (
        <div className="user-details">
          <h3>User Details:</h3>
          <p>Name: {user.name}</p>
          <p>Prename: {user.prename}</p>
          <p>Age: {user.age}</p>
          <p>CIN: {user.cin}</p>
        </div>
      )}
    </div>
  );
};

export default GetUser;
