import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();
  // const assignments = db.assignments;
  const [assignments, setAssignments] = useState([]);
  const [assignment, setAssignment] = useState({});
  // const courseAssignments = assignments.filter(
  //   (assignment) => assignment.course === courseId);

  const addAssignment = async () => {
    const newAssignment = await client.addAssignment(courseId, assignment);
    setAssignments([newAssignment, ...assignment]);
  };

  const fetchAssignments = async () => {
    const assignments = await client.findAssignmentsForCourse(courseId);
    setAssignments(assignments);
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button onClick={addAssignment}>Add</button>
        <input
          value={assignment.name}
          onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
          className="form-control"
          placeholder="Assignment Name"
        />
      </li>
      {assignments
        .filter((assignment) => assignment.course === courseId)
        .map((assignment, index) => (
          <li key={index} className="list-group-item">
            <h3>{assignment.name}</h3>
            <p>{assignment.description}</p>
            {assignment.lessons && (
              <ul className="list-group">
                {assignment.lessons.map((lesson, index) => (
                  <li key={index} className="list-group-item">
                    <h4>{lesson.name}</h4>
                    <p>{lesson.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
    </ul>
  );
}
export default Assignments;