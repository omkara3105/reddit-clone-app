function InterviewCard({ interview }) {
  return (
    <div className="interview-card">

      <div className="card-header">

        <div>
          <span className="company-name">
            {interview.company}
          </span>

          <span className="posted-by">
            Posted by {interview.personName}
          </span>
        </div>

        <span className="date">
          {interview.date}
        </span>

      </div>

      <div className="card-body">

        <h3>Interview Experience</h3>

        <p>
          {interview.question}
        </p>

      </div>

      <div className="card-footer">

        <button>⬆️</button>

        <span>
          {interview.votes || 0}
        </span>

        <button>⬇️</button>

        <button className="comment-btn">
          💬 Comment
        </button>

      </div>

    </div>
  );
}

export default InterviewCard;