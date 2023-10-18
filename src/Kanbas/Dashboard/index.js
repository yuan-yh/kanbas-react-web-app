import db from "../Database";
import { Link } from "react-router-dom";
import { FaEllipsisV } from "react-icons/fa";
import "./index.css";

function Dashboard() {
    const courses = db.courses;
    return (
        <div className="container ms-2">
            <h1>Dashboard</h1>
            <hr />
            <h2>Published Courses ({courses.length})</h2>
            <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 justify-content-start g-4">
                {courses.map((course, index) => (
                    <div className="col">
                        <div class="card">
                            <div class="card-head bg-info">
                                <div className="text-end">
                                    {<FaEllipsisV className="wd-icon" />}
                                </div>
                                <img class="card-img-top object-fit-scale border-bottom" src="/logo512.png" alt="..." />
                            </div>
                            <div class="card-body m-0">
                                <Link
                                    key={course._id}
                                    to={`/Kanbas/Courses/${course._id}`}
                                    className="text-decoration-none text-reset"
                                >
                                    <h5 class="card-title">{course.name}</h5>

                                    {course.name}.{course._id}

                                    <p class="card-text">
                                        {course.startDate}. This is a longer card with supporting text below as a natural
                                        lead-in to additional content.
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
