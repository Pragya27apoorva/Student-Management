import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { StudentContext } from "../context/StudentContext";

function StudentDetails() {
  const { id } = useParams();

  const { students } = useContext(StudentContext);

  const student = students.find(
    (student) => student.id.toString() === id
  );

  if (!student) {
    return (
      <div className="container">
        <h1>Student Not Found</h1>

        <Link to="/students" className="button">
          Back to Students
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Student Details</h1>

      <div className="details-card">
        <h2>{student.name}</h2>

        <p>
          <strong>ID:</strong> {student.id}
        </p>

        <p>
          <strong>Age:</strong> {student.age}
        </p>

        <p>
          <strong>Department:</strong>{" "}
          {student.department}
        </p>

        <p>
          <strong>Email:</strong> {student.email}
        </p>
      </div>

      <Link to="/students" className="button">
        Back to Students
      </Link>
    </div>
  );
}

export default StudentDetails;