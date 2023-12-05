import React, { useState, useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import db from "../../Database";
import "bootstrap/dist/css/bootstrap.min.css"
import { BsPlusLg } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import {
  setAssignments, addAssignment, deleteAssignment,
  updateAssignment, selectAssignment, initialState
} from "./assignmentsReducer";
import ConfirmationDialog from './ConfirmationDialog'
import * as service from "./service";



function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();

  // const courseAssignments = assignments.filter(
  //   (assignment) => assignment.course === courseId);

  const [showConfirmation, setShowConfirmation] = useState(new Array(assignments.length).fill(false));

  const handleDeleteAssignment = (assignmentId) => {
    service.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  const handleDeleteClick = (index) => {
    const newConfirmationStates = [...showConfirmation];
    newConfirmationStates[index] = true;
    setShowConfirmation(newConfirmationStates);
  };

  const handleConfirmDelete = () => {
    handleDeleteAssignment(assignment._id);
    setShowConfirmation(new Array(assignments.length).fill(false));
  };

  const handleCancelDelete = () => {
    // Cancel the deletion and close the confirmation dialog
    setShowConfirmation(new Array(assignments.length).fill(false));
  };

  useEffect(() => {
    service.findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
      );
  }, [courseId]);

  return (
    <div>
      <div class="d-flex flex-row">
        <div class="flex-grow-1 w-25">
          <input type="text" placeholder="Search for Assignments" className="form-control w-50" />
        </div>
        <button class="btn btn-secondary float-end" style={{ background: "grey" }}>
          <BsPlusLg />
          Group</button>
        <Link
          class="btn btn-danger float-end"
          style={{ background: "red", color: "white" }}
          to={`/Kanbas/Courses/${courseId}/Assignments/New`}
          onClick={() => { dispatch(selectAssignment({ ...initialState.assignment, course: courseId })) }}>
          <BsPlusLg />
          Assignment
        </Link>
        <select class="btn btn-secondary float-end">
          <option selected value="EAD">
            Edit Assignment Dates</option>
        </select>
      </div>

      <hr />

      <ul className="list-group" style={{ background: "#e2e3e5", marginTop: "30px" }}>
        <h2>Assignments for course {courseId}</h2>
        <div>
          {assignments.map((assignment, index) => (
            <div>
              <Link
                key={assignment._id}
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                className="list-group-item"
                onClick={() => dispatch(selectAssignment(assignment))}>
                {assignment.title}
                <button onClick={(e) => {
                  e.preventDefault();
                  handleDeleteClick(index);
                }}
                  className='btn btn-danger'>
                  Delete
                </button>
              </Link>
              <div>{assignment.description}</div>

              <ConfirmationDialog
                isOpen={showConfirmation[index]}
                onConfirm={handleConfirmDelete}
                onCancel={handleCancelDelete}
              />
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
}
export default Assignments;