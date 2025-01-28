# User Management System

## **Table of Contents**

1. [Project Overview](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
2. [Technologies Used](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
3. [Frontend: React Components](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
    - [RegistrationForm.js](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
    - [GetUser.js](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
    - [ModifyUser.js](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
    - [DeleteUser.js](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
    - [Header.js](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
    - [Signature.js](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
    - [Signature.css](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
4. [Backend: Express API](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
    - [Server Setup](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
    - [Routes](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
        - [POST /api/register](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
        - [GET /api/get/:cin](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
        - [PUT /api/modify/:cin](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
5. [Running the Project](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)
6. [Conclusion](https://www.notion.so/User-Management-System-1860840dfa8d80abb111f815581e74ef?pvs=21)

---

## **Project Overview**

This project is a simple User Management System consisting of two parts:

- **Frontend** built with React for user interface and interaction.
- **Backend** built with Express.js to handle API requests for user registration, retrieval, modification, and deletion.

The project includes the following features:

- Register a new user with a unique CIN (Identification Number).
- Retrieve user details using their CIN.
- Modify a user's details based on their CIN.
- Delete a user from the system using their CIN.

---

## **Technologies Used**

- **Frontend:**
    - React.js (for building the user interface)
    - React Router (for navigation between pages)
    - CSS (for styling)
- **Backend:**
    - Express.js (for handling HTTP requests)
    - Node.js (for running the server)
    - CORS (for enabling cross-origin resource sharing)
    - In-memory storage (for temporarily storing user data)

---

## **Frontend: React Components**

### **RegistrationForm.js**

This component allows users to register with their details (name, prename, age, and CIN).

- **State Management**: Uses `useState` for form data, loading state, and messages.
- **Main Features**:
    - Form fields for `name`, `prename`, `age`, and `cin`.
    - Handles user input with `handleChange` and sends form data to the backend upon form submission with `handleSubmit`.
    - Displays messages (success/error) after registration attempt.

```jsx
// handleSubmit sends data to the backend and displays the result.
```

### **GetUser.js**

This component retrieves a user’s details using their CIN.

- **State Management**: Uses `useState` for CIN input, user data, loading state, and error messages.
- **Main Features**:
    - Input field for CIN.
    - Fetches user details from the backend and displays the result.
    - Displays loading, error, or success messages as appropriate.

```jsx
javascript

// handleGetUser fetches user details based on CIN and displays the result.

```

### **ModifyUser.js**

This component allows users to modify their details.

- **State Management**: Uses `useState` for CIN input, user data (name, prename, age), loading state, and messages.
- **Main Features**:
    - Input fields for modifying the user’s `name`, `prename`, and `age`.
    - Retrieves user details for modification and sends updated data to the backend.
    - Displays messages (success/error) after modification attempt.

```jsx
javascript
CopyEdit
// handleModifyUser sends modified data to the backend and updates the user.

```

### **DeleteUser.js**

This component allows users to delete their account using CIN.

- **State Management**: Uses `useState` for CIN input and message display.
- **Main Features**:
    - Input field for CIN.
    - Deletes user data from the backend and provides feedback (success/error message).

```jsx
javascript
CopyEdit
// handleDeleteUser sends a request to delete the user from the backend.

```

### **Header.js**

This component provides navigation links for the user to register, view, modify, or delete their account.

```jsx
javascript
CopyEdit
// Contains navigation links using React Router.

```

### **Signature.js**

This component displays a fixed signature at the bottom-right corner of the page.

- **Main Features**:
    - Styled with custom CSS for hover and active effects.
    - Displays the text "Fares Latrach."

```jsx
javascript
CopyEdit
// Signature styled with hover and animation effects.

```

### **Signature.css**

This CSS file styles the `Signature` component with a modern, interactive design.

- Includes styles for positioning, colors, hover effects, and animations (shake).

```css
css
CopyEdit
// Custom styles and animations for the signature element.

```

---

## **Backend: Express API**

### **Server Setup**

The backend is built with Express.js to handle HTTP requests. The server is set up to listen on port 5000 and includes middleware for JSON parsing and enabling CORS.

```jsx
javascript
CopyEdit
const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

```

### **Routes**

### **POST /api/register**

Registers a new user with a unique CIN.

- **Input**: User details (`name`, `prename`, `age`, `cin`).
- **Output**: Success message or error if the CIN already exists.

```jsx
javascript
CopyEdit
app.post("/api/register", (req, res) => {
  const { name, prename, age, cin } = req.body;
  // Check if CIN exists and register new user if valid
});

```

### **GET /api/get/:cin**

Retrieves a user's details using their CIN.

- **Input**: CIN in the URL parameter.
- **Output**: User data if found, or error message if not.

```jsx
javascript
CopyEdit
app.get("/api/get/:cin", (req, res) => {
  const { cin } = req.params;
  // Search for the user with the given CIN and return details
});

```

### **PUT /api/modify/:cin**

Modifies an existing user's details based on their CIN.

- **Input**: Updated user data (`name`, `prename`, `age`) in the request body.
- **Output**: Updated user data or error message if user is not found.

```jsx
javascript
CopyEdit
app.put("/api/modify/:cin", (req, res) => {
  const { cin } = req.params;
  // Update user details if found
});

```

### **DELETE /api/delete/:cin**

Deletes a user from the system using their CIN.

- **Input**: CIN in the URL parameter.
- **Output**: Success message or error message if the user is not found.

```jsx
javascript
CopyEdit
app.delete("/api/delete/:cin", (req, res) => {
  const { cin } = req.params;
  // Remove user from the list
});

```

---

## **Running the Project**

### **Prerequisites**

- Node.js (for running both the server and React app)
- NPM or Yarn (for managing dependencies)

### **Steps**

1. **Clone the repository**:
    
    ```bash
    bash
    CopyEdit
    git clone <repository_url>
    cd <project_folder>
    
    ```
    
2. **Install Backend Dependencies**:
    
    ```bash
    bash
    CopyEdit
    cd backend
    npm install
    
    ```
    
3. **Install Frontend Dependencies**:
    
    ```bash
    bash
    CopyEdit
    cd frontend
    npm install
    
    ```
    
4. **Run the Backend Server**:
    
    ```bash
    bash
    CopyEdit
    npm start
    
    ```
    
5. **Run the Frontend Application**:
    
    ```bash
    bash
    CopyEdit
    npm start
    
    ```
    
6. **Access the Application**:
    - Open your browser and go to `http://localhost:3000` to use the front-end application.
    - The backend will be running at `http://localhost:5000`.

---

## **Conclusion**

This User Management System provides a simple interface for user registration, modification, retrieval, and deletion. The front-end, built with React, communicates with a back-end server built with Express.js, and data is temporarily stored in-memory.

This system can be expanded by integrating a database, adding authentication, and implementing additional features like pagination or validation.