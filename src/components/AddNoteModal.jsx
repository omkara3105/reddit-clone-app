import { useState } from "react";

function AddNoteModal({ companies, onClose, onAdd }) {
  const [company, setCompany] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!company || !question.trim()) {
      alert("Please select company and enter interview question.");
      return;
    }

    const user =
      JSON.parse(localStorage.getItem("user")) || {};

    const newInterview = {
      id: Date.now(),
      personName: user.name || "Anonymous",
      company: company,
      question: question.trim(),
      date: new Date().toISOString().split("T")[0]
    };

    onAdd(newInterview);

    setCompany("");
    setQuestion("");

    onClose();
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        <div className="modal-header">

          <h2>Add Interview Experience</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <label>Select Company</label>

          <select
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          >
            <option value="">
              -- Select Company --
            </option>

            {companies.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <label>
            Interview Question / Experience
          </label>

          <textarea
            rows="7"
            placeholder="Write the interview question or experience you faced..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <button
            type="submit"
            className="submit-btn"
          >
            Add Interview
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddNoteModal;