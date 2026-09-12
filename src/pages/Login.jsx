import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your full name.");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({
        name: name.trim(),
      })
    );

    navigate("/dashboard");
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          💬
        </div>

        <h1>InterviewHub</h1>

        <p>
          Share and explore real interview experiences.
        </p>

        <form onSubmit={handleLogin}>

          <label>Full Name</label>

          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button type="submit">
            Continue
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;