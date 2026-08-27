import { createContext, useEffect, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState(() => {
    const savedStudents = localStorage.getItem("students");

    return savedStudents
      ? JSON.parse(savedStudents)
      : [
          {
            id: 1,
            name: "Apoorva",
            age: 21,
            department: "Computer Science",
            email: "apoorva@example.com",
          },
          {
            id: 2,
            name: "Rahul",
            age: 20,
            department: "Information Technology",
            email: "rahul@example.com",
          },
          {
            id: 3,
            name: "Priya",
            age: 21,
            department: "Electronics",
            email: "priya@example.com",
          },
        ];
  });

  // useEffect saves students whenever the student list changes
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: Date.now(),
    };

    setStudents((prevStudents) => [
      ...prevStudents,
      newStudent,
    ]);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        addStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
}