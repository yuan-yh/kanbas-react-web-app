import { Link, useParams, useLocation } from "react-router-dom";
import "./course-navigation-styles.css";

function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Assignments",
    "Grades",
    "Piazza",
    "Zoom-Meetings",
    "Quizzes",
    "People",
    "Panopto-Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Settings",
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div
      className="list-group course-navigation-list-group"
      style={{ width: 150 }}
    >
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item subContentLink ${
            pathname.includes(link) && "active"
          }`}
        >
          <div className="list-group-item-text">{link}</div>
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;
