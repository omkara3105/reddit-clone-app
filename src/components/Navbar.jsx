import { useNavigate } from "react-router-dom";

function Navbar({ search, setSearch }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="logo" onClick={() => navigate("/dashboard")}>
          InterviewHub
        </h2>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search company..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="nav-right">
        <span className="username">
          👤 {user?.name || "User"}
        </span>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;