import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import db from "../../../Database";
import { Link } from "react-router-dom";
import "./assignment-editor-styles.css";
import { FaEllipsisV, FaBars } from "react-icons/fa";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  selectAssignment,
} from "../assignmentReducer";
import * as client from "../client";
import { wait } from "@testing-library/user-event/dist/utils";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const newAssignment = useSelector(
    (state) => state.assignmentReducer.newAssignment
  );

  const { courseId } = useParams();
  const navigate = useNavigate();

  const handleAddAssignment = () => {
    client.createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };

  const handleUpdateAssignment = async () => {
    client.updateAssignment(assignment).then((assignment) => {
      dispatch(updateAssignment(assignment));
    });
  };

  const handleSave = () => {
    if (newAssignment) {
      console.log("Creating New Assignment");
      handleAddAssignment(assignment);
    } else {
      console.log("Updating assignment");
      handleUpdateAssignment(assignment);
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const dispatch = useDispatch();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-flex flex-column-reverse align-items-end mt-3">
          <div className="publishArea fw-bold">
            <AiOutlineCheckCircle /> Published
            <button className="btn btn-secondary publishedButton generalButtonColor">
              <FaEllipsisV />
            </button>
          </div>
        </div>
        <hr className="horizontal-line mt-2" />
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="form-group">
            <label htmlFor="inputText">
              <h5>Assignment Name</h5>
            </label>
            <input
              type="text"
              className="form-control"
              id="inputText"
              value={assignment.title}
              onChange={(e) =>
                dispatch(
                  selectAssignment({ ...assignment, title: e.target.value })
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <div className="form-group">
            <textarea
              className="form-control"
              id="exampleTextarea"
              rows="4"
              placeholder="Enter your text here..."
              onChange={(e) =>
                dispatch(
                  selectAssignment({
                    ...assignment,
                    description: e.target.value,
                  })
                )
              }
            >
              {assignment.description ? assignment.description : ""}
            </textarea>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-3 float">
          <h5 className="float-end">Points</h5>
        </div>
        <div className="col-9">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="inputText"
              value="100"
            />
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-3">
          <h5 className="float-end">Assignment Groups</h5>
        </div>
        <div className="col-9">
          <select className="form-select">
            <option selected>ASSIGNMENTS</option>
          </select>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-3">
          <h5 className="float-end">Display Grade as</h5>
        </div>
        <div className="col-9">
          <select className="form-select">
            <option selected>Percentage</option>
          </select>
          <div className="mt-3">
            <input
              className="form-check-input"
              type="radio"
              name="gridRadios"
              id="r3"
              value="option1"
            />
            <label className="form-check-label" htmlFor="r3">
              Do not count this assignment towards the final grade
            </label>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-3">
          <h5 className="float-end">Submission Type</h5>
        </div>
        <div className="col-9 submissionAndAssignBorder">
          <select className="form-select mt-2">
            <option selected>Online</option>
          </select>
          <div>
            <div className="mt-3">
              <b>Online Entry Options</b>
            </div>
            <div className="mt-2">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="onlineRadio1"
                value="option1"
              />
              <label className="form-check-label" htmlFor="onlineRadio1">
                Do not count this assignment towards the final grade
              </label>
            </div>
            <div className="mt-2">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="onlineRadio2"
                value="option1"
              />
              <label className="form-check-label" htmlFor="onlineRadio2">
                Do not count this assignment towards the final grade
              </label>
            </div>
            <div className="mt-2">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="onlineRadio3"
                value="option1"
              />
              <label className="form-check-label" htmlFor="onlineRadio3">
                Do not count this assignment towards the final grade
              </label>
            </div>
            <div className="mt-2">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="onlineRadio4"
                value="option1"
              />
              <label className="form-check-label" htmlFor="onlineRadio4">
                Do not count this assignment towards the final grade
              </label>
            </div>
            <div className="mt-2">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="onlineRadio5"
                value="option1"
              />
              <label className="form-check-label" htmlFor="onlineRadio5">
                Do not count this assignment towards the final grade
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-3">
          <h5 className="float-end">Assign</h5>
        </div>
        <div className="col-9 submissionAndAssignBorder">
          <div className="form-group">
            <label htmlFor="assignTo">
              <h5>Assign To</h5>
            </label>
            <input
              type="text"
              className="form-control"
              id="assignTo"
              value="Everyone"
            />
          </div>

          <div>
            <div className="form-group">
              <label htmlFor="datepicker">Due:</label>
              <input
                type="date"
                id="datepicker"
                className="form-control"
                onChange={(e) =>
                  dispatch(
                    selectAssignment({ ...assignment, due: e.target.value })
                  )
                }
                value={assignment.due ? assignment.due : ""}
              />
            </div>
          </div>

          <div>
            <div className="row mt-3">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="datepickerFrom">Available from</label>
                  <input
                    type="date"
                    id="datepickerFrom"
                    className="form-control"
                    value={
                      assignment.availableFrom ? assignment.availableFrom : ""
                    }
                    onChange={(e) =>
                      dispatch(
                        selectAssignment({
                          ...assignment,
                          availableFrom: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="datepickerUntil">Until</label>
                  <input
                    type="date"
                    id="datepickerUntil"
                    className="form-control"
                    value={
                      assignment.availableUntil ? assignment.availableUntil : ""
                    }
                    onChange={(e) =>
                      dispatch(
                        selectAssignment({
                          ...assignment,
                          availableUntil: e.target.value,
                        })
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="btn btn-secondary mt-3 assign-add-button generalButtonColor"
          >
            + Add
          </button>
        </div>
      </div>

      <hr className="horizontal-line" />
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <input
            className="form-check-input"
            type="radio"
            name="gridRadios"
            id="endRadioButton"
            value="option1"
          />
          <label className="form-check-label" htmlFor="endRadioButton">
            Notify users that this content has changed
          </label>
        </div>

        <div>
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger"
          >
            Cancel
          </Link>
          <button onClick={handleSave} className="btn btn-success me-2">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;
