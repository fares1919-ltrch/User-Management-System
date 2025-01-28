import React, { useState } from "react";

const ModifyUser = () => {
  const [cin, setCin] = useState("");
  const [userData, setUserData] = useState({ name: "", prename: "", age: "" });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetchUser = async () => {
    if (!cin) {
      setMessage("Please enter a CIN.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/get/${cin}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setMessage("");
      } else {
        setMessage(`User with CIN ${cin} not found`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error fetching user");
    } finally {
      setLoading(false);
    }
  };

  const handleModifyUser = async () => {
    if (!cin) {
      setMessage("Please enter a CIN.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/modify/${cin}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const updatedUser = await response.json();
        setMessage(`User modified: ${JSON.stringify(updatedUser)}`);
      } else {
        setMessage(`User with CIN ${cin} not found`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error modifying user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modify-user">
      <input
        type="text"
        placeholder="Enter CIN"
        value={cin}
        onChange={(e) => setCin(e.target.value)}
      />
      <button onClick={handleFetchUser} disabled={loading}>
        {loading ? "Fetching..." : "Fetch User"}
      </button>

      <input
        type="text"
        placeholder="New Name"
        value={userData.name}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="New Prename"
        value={userData.prename}
        onChange={(e) => setUserData({ ...userData, prename: e.target.value })}
      />
      <input
        type="number"
        placeholder="New Age"
        value={userData.age}
        onChange={(e) => setUserData({ ...userData, age: e.target.value })}
      />
      <button onClick={handleModifyUser} disabled={loading}>
        {loading ? "Modifying..." : "Modify User"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ModifyUser;
