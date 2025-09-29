// import React from "react";
// import { useLocation } from "react-router-dom";

// function SyllabusPage() {
//   const location = useLocation();
//   const path = location.state?.path;

//   return (
//     <div className="syllabus-page">
//       <h2 style={{ textAlign: "center" }}>Syllabus Document</h2>
//       {path ? (
//         <iframe
//           src={path}
//           title="Syllabus PDF"
//           width="100%"
//           height="600px"
//           frameBorder="0"
//         />
//       ) : (
//         <p>No syllabus selected.</p>
//       )}
//     </div>
//   );
// }

// export default SyllabusPage;
import React from "react";
import { useLocation } from "react-router-dom";
import "./SyllabusPage.css"; 

function SyllabusPage() {
  const location = useLocation();
  const path = location.state?.path;

  return (
    <div className="syllabus-page">
      <h2 style={{ textAlign: "center" }}>Syllabus Document</h2>
      {path ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <a
            href={path}
            target="_blank"
            rel="noopener noreferrer"
            className="view-pdf-button"
          >
            Click here to view the PDF
          </a>
        </div>
      ) : (
        <p>No syllabus selected.</p>
      )}
    </div>
  );
}

export default SyllabusPage;

