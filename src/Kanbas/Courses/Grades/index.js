import db from "../../Database";
import { useParams } from "react-router-dom";
import "./grades-styles.css";

import { FaCog, FaFileExport } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillFunnelFill } from "react-icons/bs";
import { BiSolidFileImport, BiSolidFileExport } from "react-icons/bi";
function Grades() {
  const { courseId } = useParams();
  const users = db.users;
  const assignments = db.assignments.filter(
    (assignment) => assignment.course === courseId
  );
  const enrollments = db.enrollments.filter(
    (enrollment) => enrollment.course === courseId
  );
  const grades = db.grades;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6"></div>
        <div className="col-md-6">
          <div className="float-end">
            <button
              type="button"
              className="btn btn-secondary gradeButtons mx-2"
            >
              <BiSolidFileImport className="icon-size" /> Import
            </button>
            <button
              type="button"
              className="btn btn-secondary gradeButtons mx-2"
            >
              <BiSolidFileExport className="icon-size" /> Export
            </button>
            <button type="button" className="btn btn-secondary gradeButtons">
              <FaCog className="icon-size" />
            </button>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <div className="form-group ">
            <label for="search1">
              <h5 className="fw-bold">Student Names</h5>
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text search-icon">
                  <AiOutlineSearch className="icon-size" />
                </span>
              </div>
              <select className="form-control" id="search1" name="search1">
                <option value="" selected>
                  Tony Stark
                </option>
              </select>
            </div>
          </div>
          <button type="button" className="btn btn-secondary gradeButtons mt-3">
            <BsFillFunnelFill className="icon-size" /> Apply Filters
          </button>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label for="input2">
              <h5 className="fw-bold">Assignment Names</h5>
            </label>
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text search-icon">
                  <AiOutlineSearch className="icon-size" />
                </span>
              </div>
              <select className="form-control" id="search2" name="search2">
                <option value="" selected>
                  Search Assignments
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="table-responsive ">
          <table className="table grades-table">
            <thead>
              <tr>
                <th>Student Name</th>
                {assignments.map((assignment) => (
                  <th>{assignment.title}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {enrollments.map((enrollment) => {
                const user = users.find((user) => user._id === enrollment.user);
                return (
                  <tr className="grade-table-row">
                    <td className="student-name">
                      {user.firstName} {user.lastName}
                    </td>
                    {assignments.map((assignment) => {
                      const grade = grades.find(
                        (grade) =>
                          grade.student === enrollment.user &&
                          grade.assignment === assignment._id
                      );
                      return <td>{grade?.grade || ""}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Grades;
