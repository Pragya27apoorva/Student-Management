import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";
import { Link } from "react-router-dom";

function Home() {
  const { students } = useContext(StudentContext);

  return (
    <div className="container">
      <h1>Student Management System</h1>

      <p>
        Welcome to the Student Management System.
      </p>

      <div className="dashboard">
        <div className="card">
          <h2>{students.length}</h2>
          <p>Total Students</p>
        </div>

        <div className="card">
          <h2>3</h2>
          <p>Departments</p>
        </div>
      </div>

      <Link to="/students" className="button">
        View Students
      </Link>
    </div>
  );
}

export default Home;