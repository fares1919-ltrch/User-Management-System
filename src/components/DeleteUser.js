import React, { useState } from "react";

const DeleteUser = () => {
  const [cin, setCin] = useState("");
  const [message, setMessage] = useState("");

  const handleDeleteUser = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/delete/${cin}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setMessage("User deleted successfully");
      } else {
        setMessage(`User with CIN ${cin} not found`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error deleting user");
    }
  };

  return (
    <div className="delete-user">
      <input
        type="text"
        placeholder="Enter CIN"
        value={cin}
        onChange={(e) => setCin(e.target.value)}
      />
      <button onClick={handleDeleteUser}>Delete User</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteUser;
