import {
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

import { Link } from "react-router-dom";
import { StudentContext } from "../context/StudentContext";

function Students() {
  const { students } = useContext(StudentContext);

  const [search, setSearch] = useState("");

  // useRef is used to access the search input
  const searchInputRef = useRef(null);

  // useMemo prevents unnecessary filtering calculations
  const filteredStudents = useMemo(() => {
    return students.filter((student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [students, search]);

  const focusSearch = () => {
    searchInputRef.current.focus();
  };

  return (
    <div className="container">
      <h1>Student List</h1>

      <div className="search-container">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={focusSearch}>
          Focus Search
        </button>
      </div>

      <p>
        Showing {filteredStudents.length} student(s)
      </p>

      <div className="student-list">
        {filteredStudents.length === 0 ? (
          <p>No students found.</p>
        ) : (
          filteredStudents.map((student) => (
            <div
              className="student-card"
              key={student.id}
            >
              <h2>{student.name}</h2>

              <p>
                Department: {student.department}
              </p>

              <p>
                Email: {student.email}
              </p>

              <Link
                to={`/students/${student.id}`}
                className="button"
              >
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Students;