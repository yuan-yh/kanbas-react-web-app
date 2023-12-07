import { Link } from "react-router-dom";
import db from "../Database";
import "./dashboard-styles.css";
import CoureCard from "./CourseCard";
import { React, useState } from "react";

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1>Dashboard</h1>

        <hr className="horizontal-line" />
      </div>
      <div className="row mx-3">
        <h3>Published Courses ({db.courses.length})</h3>

        <hr className="horizontal-line" />
      </div>
      <div className="row mx-3 mb-3">
        <div className="form-group">
          <label for="courseName">Course Name</label>
          <input
            className="form-control"
            type="text"
            id="courseName"
            placeholder="Course Name"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label for="courseNumber">Course Number</label>
          <input
            className="form-control"
            type="text"
            id="courseNumber"
            placeholder="Course Number"
            value={course.number}
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label for="courseDate">Course Start Date</label>
          <input
            className="form-control"
            type="date"
            id="courseDate"
            placeholder="Course Date"
            value={course.startDate}
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label for="courseEndDate">Course End Date</label>
          <input
            className="form-control"
            type="date"
            id="courseEndDate"
            placeholder="Course End Date"
            value={course.endDate}
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
        </div>

        <button className="btn btn-primary mt-2" onClick={addNewCourse}>
          Add
        </button>
        <button className="btn btn-success mt-2" onClick={updateCourse}>
          Update
        </button>
      </div>
      <div className="row mx-1">
        <div className="d-flex flex-wrap">
          {courses.map((course) => (
            <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>
              <button
                className="btn btn-primary ms-3"
                onClick={(event) => {
                  event.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-danger ms-3"
                onClick={(event) => {
                  event.preventDefault();
                  deleteCourse(course);
                }}
              >
                Delete
              </button>

              <CoureCard course={course} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
