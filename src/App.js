import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import RegistrationForm from "./components/RegistrationForm";
import GetUser from "./components/GetUser";
import ModifyUser from "./components/ModifyUser";
import DeleteUser from "./components/DeleteUser";
import Signature from "./components/Signature"; // Import the Signature component

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/get" element={<GetUser />} />
          <Route path="/modify" element={<ModifyUser />} />
          <Route path="/delete" element={<DeleteUser />} />
        </Routes>
        <Signature /> {/* Add the Signature component */}
      </div>
    </Router>
  );
}

export default App;
