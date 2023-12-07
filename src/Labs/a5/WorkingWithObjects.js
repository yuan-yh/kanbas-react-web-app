import React, { useState, useEffect } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const URL = "http://localhost:4000/a5/assignment";
  const fetchAssignment = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };

  const updateScore = async () => {
    const response = await axios.get(`${URL}/score/${assignment.score}`);
    setAssignment(response.data);
  };
  const fetchScore = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  const updateCompleted = async () => {
    const response = await axios.get(
      `${URL}/completed/${assignment.completed}`
    );
    setAssignment(response.data);
  };
  const fetchCompleted = async () => {
    const response = await axios.get(`${URL}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
    fetchScore();
    fetchCompleted();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a
        href="http://localhost:4000/a5/assignment"
        className="btn btn-primary me-2"
      >
        Get Assignment
      </a>
      <h4>Retrieving Properties</h4>
      <a
        href="http://localhost:4000/a5/assignment/title"
        className="btn btn-primary me-2"
      >
        Get Title
      </a>
      <h4>Modifying Properties</h4>
      <a
        href={`http://localhost:4000/a5/assignment/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>
      <input
        className="form-control mb-2 w-75"
        type="text"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <button onClick={updateTitle} className="w-100 btn btn-primary mb-2">
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} className="w-100 btn btn-danger mb-2">
        Fetch Assignment
      </button>

      <h4>Extra Credit Score</h4>
      <input
        className="form-control mb-2 w-75"
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: e.target.value })
        }
      />
      <button onClick={updateScore} className="w-100 btn btn-primary mb-2">
        Update Score to: {assignment.score}
      </button>
      <button onClick={fetchScore} className="w-100 btn btn-danger mb-2">
        Fetch Score
      </button>

      <h4>Extra Credit completed</h4>
      <input
        className=""
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <button onClick={updateCompleted} className="w-100 btn btn-primary mb-2">
        Update Completed to: {assignment.completed}
      </button>
      <button onClick={fetchCompleted} className="w-100 btn btn-danger mb-2">
        Fetch Completed
      </button>
    </div>
  );
}
export default WorkingWithObjects;
