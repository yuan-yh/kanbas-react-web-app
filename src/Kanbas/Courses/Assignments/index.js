import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
// import db from "../../Database";
import "./index.css";
import { FaPlus, FaEllipsisV, FaCheckCircle, FaRegEdit } from "react-icons/fa";
import { RxDragHandleDots2, RxChevronDown } from "react-icons/rx";

import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment, setAssignment } from "./assignmentsReducer";
import DeleteConfirmation from "./DeleteConfirmation";

function Assignments() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignmentsForCurrentCourse = assignments.filter((ass) => ass.course === courseId);
  const dispatch = useDispatch();

  const handleAddAssignment = () => {
    const newAssignment = {
      title: "New Assingment",
      description: "New Assignment Description",
      course: courseId,
      _id: new Date().getTime().toString(),
    };
    dispatch(setAssignment(newAssignment));
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${newAssignment._id}`);
  }

  const [deleteConfirmation, setDeleteConfirmation] = useState(null);
  const handleDeleteConfirmation = (assignmentId) => {
    setDeleteConfirmation(assignmentId);
  };
  const handleDeleteAssignment = () => {
    if (deleteConfirmation) {
      dispatch(deleteAssignment(deleteConfirmation));
      setDeleteConfirmation(null);
    }
  };

  return (
    <div className="assignments">
      <div className="d-flex justify-content-between">
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search for Assignment"
        />
        <div className="assignments-buttons">
          <button className="btn btn-light assignments-button">
            <FaPlus className="wd-icon" />
            Group
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/AssignmentEditorNew`}>
            <button className="btn btn-danger assignments-button" onClick={handleAddAssignment}>
              <FaPlus className="wd-icon" />
              Assignment
            </button>
          </Link>
          <button className="btn btn-light assignments-button">
            <FaEllipsisV className="wd-icon" />
          </button>
        </div>
      </div>
      <hr />

      <div className="assignment-list">
        <ul className="list-group">
          <li className="list-group-item list-group-item-secondary courses-assignment-list-item ">
            <div className="d-flex flex-row align-items-center">
              <RxDragHandleDots2 className="wd-icon" />
              <RxChevronDown className="wd-icon" />
              <div className="assignments-text fs-6">ASSIGNMENTS</div>
            </div>
            <div className="d-flex flex-row align-items-center">
              <button className="btn rounded-pill assignments-title-total icon-margin">40% of Total</button>
              <FaPlus className="wd-icon" />
              <FaEllipsisV className="wd-icon" />
            </div>
          </li>
          {assignmentsForCurrentCourse.map((assignment) => (
            <li className="list-group-item courses-assignment-list-item courses-assignments-list-item-green-border">
              <div className="d-flex flex-row align-items-center">
                <RxDragHandleDots2 className="wd-icon" />
                <FaRegEdit className="wd-icon" />
                <div className="assignment-title ms-2">
                  <Link
                    key={assignment._id} onClick={() => dispatch(setAssignment(assignment))}
                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                    <b>{assignment.title}</b>
                  </Link>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <button className="btn btn-danger icon-margin" onClick={() => handleDeleteConfirmation(assignment._id)}>
                  Delete
                </button>
                <FaCheckCircle className="wd-icon" />
                <FaEllipsisV className="wd-icon" />
              </div>
            </li>
          ))}
        </ul>
      </div>
      {deleteConfirmation && (
        <div className="delete-confirmation-overlay">
          <DeleteConfirmation
            onCancel={() => setDeleteConfirmation(null)}
            onConfirm={handleDeleteAssignment}
          />
        </div>
      )}
    </div>
  );
}
export default Assignments;