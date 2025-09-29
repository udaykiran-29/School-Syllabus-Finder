// server/server.js

const express = require("express");
const cors = require("cors");
const app = express();
const syllabusData = require("./syllabusData");

app.use(cors());
app.use(express.json());

// Get Subjects based on board, class, and state
app.get("/api/subjects", (req, res) => {
  const { board, className, state } = req.query;

  if (board === "CBSE") {
    const subjects = syllabusData.CBSE[className];
    return res.json({ subjects });
  }

  if (board === "SSC" && state) {
    const subjects = syllabusData.SSC[state]?.[className];
    return res.json({ subjects });
  }

  return res.status(400).json({ error: "Invalid request" });
});

// Get Syllabus PDF path
app.get("/api/syllabus", (req, res) => {
  const { board, className, subject, state } = req.query;
  const key = state
    ? `SSC-${state}-${className}-${subject}`
    : `CBSE-${className}-${subject}`;
  const path = syllabusData.syllabusPaths[key];

  if (!path) {
    return res.status(404).json({ error: "Syllabus not found" });
  }

  return res.json({ path });
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
