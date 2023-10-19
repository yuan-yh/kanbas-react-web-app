import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
// import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";

function Courses() {
    let { courseId } = useParams();
    const { pathname } = useLocation();
    const [empty, kanbas, courses, id, screen] = pathname.split("/");
    const course = db.courses.find((course) => course._id === courseId);

    return (
        <div className="container ms-0 me-0">
            <div className="row justify-content-between border-bottom ms-3 mt-3">
                <nav aria-label="breadcrumb" className="col fs-5">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">{<FaBars className="wd-icon" />}</li>
                        <li class="breadcrumb-item">{course.name}</li>
                        <li class="breadcrumb-item active" aria-current="page">{screen}</li>
                    </ol>
                </nav>
                <span class="col col-2">
                    <button class=" btn btn-light m-1">Student View</button>
                </span>
            </div>

            <div className="row">
                <div className="d-flex flex-row mt-2">
                    <div className="text-body-secondary">
                        Term. {course.startDate}
                        <CourseNavigation />
                    </div>

                    <div
                        className="overflow-y-scroll position-fixed bottom-0 end-0"
                        style={{
                            left: "360px",
                            top: "100px",
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<Navigate to="Home" />} />
                            <Route path="Home" element={<Home />} />
                            <Route path="Modules" element={<Modules />} />
                            <Route path="Piazza" element={<h1>Piazza</h1>} />
                            <Route path="Zoom" element={<h1>Zoom</h1>} />
                            <Route path="Assignments" element={<Assignments />} />
                            <Route
                                path="Assignments/:assignmentId"
                                element={<AssignmentEditor />}
                            />
                            <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                            <Route path="Grades" element={<Grades />} />
                            <Route path="People" element={<h1>People</h1>} />
                            <Route path="/*" element={<h1>Coming Soon</h1>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;
