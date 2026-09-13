
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import InterviewCard from "../components/InterviewCard";
import AddNoteModal from "../components/AddNoteModal";

import companies from "../data/companies";

function Dashboard() {
  const [interviews, setInterviews] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  const API_URL ="https://m8om4lnbfc.execute-api.ap-south-1.amazonaws.com/comments";

  useEffect(() => {
  fetch(API_URL)
    .then((res) => {
      console.log("API status:", res.status);
      return res.json();
    })
    .then((data) => {
      console.log("API data:", data);
      setInterviews(data);
    })
    .catch((error) => {
      console.error("API ERROR:", error);
    });
    }, []);

  // Add new interview to DynamoDB
  const addInterview = async (newInterview) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newInterview),
      });

      if (!response.ok) {
        throw new Error("Failed to save interview");
      }

      const savedInterview = await response.json();

      // Add newly saved interview to screen
      setInterviews((prev) => [
        savedInterview,
        ...prev,
      ]);

      // Close modal
      setShowModal(false);

    } catch (error) {
      console.error("Error saving interview:", error);
    }
  };

  // Search by company
  const filteredInterviews = interviews.filter((item) =>
    item.company
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  // Random order
  const randomInterviews = [...filteredInterviews].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="dashboard">

      <Navbar
        search={search}
        setSearch={setSearch}
      />

      <main className="main-content">

        <div className="dashboard-header">

          <div>
            <h1>Interview Experiences</h1>

            <p>
              Explore questions asked in real interviews.
            </p>
          </div>

          <button
            className="add-btn"
            onClick={() => setShowModal(true)}
          >
            + Add Interview
          </button>

        </div>

        <div className="interview-list">

          {randomInterviews.length > 0 ? (
            randomInterviews.map((interview) => (
              <InterviewCard
                key={interview.id}
                interview={interview}
              />
            ))
          ) : (
            <div className="empty-state">

              <h2>No interviews found</h2>

              <p>
                No interview experience found for "{search}".
              </p>

            </div>
          )}

        </div>

      </main>

      {showModal && (
        <AddNoteModal
          companies={companies}
          onClose={() => setShowModal(false)}
          onAdd={addInterview}
        />
      )}

    </div>
  );
}

export default Dashboard;
