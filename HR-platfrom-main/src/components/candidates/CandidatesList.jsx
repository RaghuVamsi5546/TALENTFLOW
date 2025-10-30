import "./CandidatesList.css"

const STAGES = {
  applied: { label: "Applied" },
  screen: { label: "Screening" },
  tech: { label: "Technical" },
  offer: { label: "Offer" },
  hired: { label: "Hired" },
  rejected: { label: "Rejected" },
};

export default function CandidatesList({
  candidates = [],
  isLoading,
  onSelect,
  onStageChange,
}) {
  if (isLoading) {
    return <div className="candidates-loading">Loading candidates...</div>;
  }
  if (!candidates.length) {
    return <div className="candidates-empty">No candidates found</div>;
  }

  return (
    <div className="candidates-table-container">
      <table className="candidates-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Stage</th>
            <th>Applied Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map(candidate => (
            <tr key={candidate.id} className="candidates-table-row">
              <td>{candidate.name}</td>
              <td>{candidate.email}</td>
              <td>
                <select
                  value={candidate.stage}
                  onChange={e => onStageChange(candidate.id, e.target.value)}
                  className="stage-dropdown"
                >
                  {Object.entries(STAGES).map(([value, {label}]) => (
                    <option key={value} value={value}>{label}</option>
                  ))}
                </select>
              </td>
              <td>{new Date(candidate.createdAt).toLocaleDateString()}</td>
              <td>
                <button className="btn btn-secondary btn-sm" onClick={() => onSelect(candidate)}>
                  View/Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
