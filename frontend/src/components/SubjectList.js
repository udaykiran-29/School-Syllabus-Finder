import React from "react";

function SubjectList({ subjects, onSubjectClick }) {
  if (!subjects || subjects.length === 0) {
    return <p>No subjects found.</p>;
  }

  return (
    <div className="subjects">
      <h2>Subjects:</h2>
      <ul>
        {subjects.map((subject) => (
          <li key={subject} onClick={() => onSubjectClick(subject)}>
            {subject}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;
