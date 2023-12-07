import { useState, useEffect } from "react";
import axios from "axios";
import db from "../../Kanbas/Database";
import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./courses-styles.css";
import { PiListBold } from "react-icons/pi";

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState({});
  // const URL = "http://localhost:4000/api/courses";
  const API_BASE = process.env.REACT_APP_API_BASE;

  const URL = `${API_BASE}/courses`;
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);

    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const location = useLocation();

  const pathParts = location.pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];

  const routeNames = {
    Home: "> Home",
    Modules: "> Modules",
    Assignments: "> Assignments",
    Grades: "> Grades",
    Piazza: "> Piazza",
    "Zoom-Meetings": "> Zoom-Meetings",
    Quizzes: "> Quizzes",
    People: "> People",
    "Panopto-Video": "> Panopto-Videos",
    Discussions: "> Discussions",
    Announcements: "> Announcements",
    Pages: "> Pages",
    Files: "> Files",
    Rubrics: "> Rubrics",
    Outcomes: "> Outcomes",
    Collaborations: "> Collaborations",
    Syllabus: "> Syllabus",
    Settings: "> Settings",
  };

  const title = routeNames[lastPart] || "";
  return (
    <div>
      <div className="container-fluid">
        <div className="row breadcrumbRow">
          <h1 className="breadcrumb-title">
            <PiListBold className="breadcrumb-icon" />{" "}
            <span className="breadcrumb-course-name">
              {course.number} {course._id}
            </span>{" "}
            {title}
          </h1>
          <hr className="horizontal-line" />
        </div>
        <div className="row">
          <div className="col-auto">
            <CourseNavigation />
          </div>
          <div className="col overflow-y-scroll ">
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments />} />
              <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor />}
              />
              <Route path="Grades" element={<Grades />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Courses;
