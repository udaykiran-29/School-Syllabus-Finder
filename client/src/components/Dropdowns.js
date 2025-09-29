import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dropdowns.css"; 

const classes = ["LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
const states = ["Andhra Pradesh", "Telangana"];

function Dropdowns() {
  const [board, setBoard] = useState("");
  const [state, setState] = useState("");
  const [className, setClassName] = useState("");
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  const handleGetSubjects = async () => {
    try {
      let url = `http://localhost:5000/api/subjects?board=${board}&className=${className}`;
      if (board === "SSC") url += `&state=${state}`;

      const res = await axios.get(url);
      setSubjects(res.data.subjects || []);
    } catch (error) {
      alert("Error fetching subjects");
    }
  };

  const handleSubjectClick = async (subject) => {
    try {
      let url = `http://localhost:5000/api/syllabus?board=${board}&className=${className}&subject=${subject}`;
      if (board === "SSC") url += `&state=${state}`;

      const res = await axios.get(url);
      const path = res.data.path;

      navigate("/syllabus", { state: { path } });
    } catch (error) {
      alert("Syllabus not found");
    }
  };

  return (
    <div className="container">
      <h1>📚 Syllabus Finder</h1>
      <div className="form">
        <select onChange={(e) => setBoard(e.target.value)} defaultValue="">
          <option value="" disabled>Select Board</option>
          <option value="CBSE">CBSE</option>
          <option value="SSC">SSC</option>
        </select>

        {board === "SSC" && (
          <select onChange={(e) => setState(e.target.value)} defaultValue="">
            <option value="" disabled>Select State</option>
            {states.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        )}

        <select onChange={(e) => setClassName(e.target.value)} defaultValue="">
          <option value="" disabled>Select Class</option>
          {classes.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>

        <button onClick={handleGetSubjects}>Get Subjects</button>
      </div>

      {subjects.length > 0 && (
        <div className="subjects">
          <h2>Subjects:</h2>
          <ul>
            {subjects.map((sub) => (
              <li key={sub} onClick={() => handleSubjectClick(sub)}>
                {sub}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdowns;
