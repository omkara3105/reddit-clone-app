import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
// import SearchBar from "../components/SearchBar";
import InterviewCard from "../components/InterviewCard";
import AddNoteModal from "../components/AddNoteModal";

import companies from "../data/companies";
import interviewData from "../data/interviews.json";

function Dashboard() {
  const [interviews, setInterviews] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Get newly added interviews from localStorage
    const savedInterviews =
      JSON.parse(localStorage.getItem("interviews")) || [];

    // JSON file + locally added interviews
    setInterviews([...interviewData, ...savedInterviews]);
  }, []);

  const addInterview = (newInterview) => {
    // Get existing user-added interviews
    const savedInterviews =
      JSON.parse(localStorage.getItem("interviews")) || [];

    const updatedInterviews = [
      ...savedInterviews,
      newInterview,
    ];

    // Save only newly added interviews
    localStorage.setItem(
      "interviews",
      JSON.stringify(updatedInterviews)
    );

    // Update screen immediately
    setInterviews([
      ...interviewData,
      ...updatedInterviews,
    ]);
  };

  // Search by company
  const filteredInterviews = interviews.filter((item) =>
    item.company
      .toLowerCase()
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

        {/* <SearchBar
          search={search}
          setSearch={setSearch}
          companies={companies}
        /> */}

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