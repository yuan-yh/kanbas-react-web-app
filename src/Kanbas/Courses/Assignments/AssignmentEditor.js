import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { FaEllipsisV, FaCheckCircle } from "react-icons/fa";

import db from "../../Database";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);

    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div class="container">
            <div class="row pb-2 border-bottom">
                <div class="d-flex flex-row justify-content-end align-items-center">
                    <span style={{ color: "green" }}>{<FaCheckCircle className="wd-icon" />} Published</span>
                    <button class="btn btn-light m-1">{<FaEllipsisV className="wd-icon" />}</button>
                </div>
            </div>

            <div class="row mt-2 border-bottom">
                <h2>Assignment Name</h2>
                <input value={assignment.title}
                    className="form-control mb-4" />
                <hr />
                <div class="d-flex flex-row justify-content-end align-items-center mb-2">
                    <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-light me-2">
                        Cancel
                    </Link>
                    <Link onClick={handleSave}
                        to={`/Kanbas/Courses/${courseId}/Assignments`}
                        className="btn btn-danger me-2">
                        Save
                    </Link>
                </div>
            </div>
        </div>
    );
}


export default AssignmentEditor;