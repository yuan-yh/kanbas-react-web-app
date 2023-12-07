import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import "./kanbas-styles.css";
import db from "./Database";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import axios from "axios";
import Signin from "./users/signin";
import Signup from "./users/signup";
import Account from "./users/account";
import UserTable from "./users/table";
function Kanbas() {
  // const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
  });
  const [courses, setCourses] = useState([]);

  // const URL = "http://localhost:4000/api/courses";
  const API_BASE = process.env.REACT_APP_API_BASE;

  const URL = `${API_BASE}/courses`;
  // const URL = "https://kanbas-node-server-app-qkhh.onrender.com/api/courses";
  // const API_BASE = process.env.REACT_APP_API_BASE;
  // const URL = `${API_BASE}/courses`;

  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const addCourse = async () => {
    console.log(course);
    const response = await axios.post(URL, course);

    setCourses([...courses, response.data]);
  };

  const deleteCourse = async (course) => {
    const response = await axios.delete(`${URL}/${course._id}`);
    setCourses(courses.filter((c) => c._id !== course._id));
  };

  const updateCourse = async () => {
    try {
      const response = await axios.put(`${URL}/${course._id}`, course);
      console.log(response.data);
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return response.data;
          }
          return c;
        })
      );
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <Provider store={store}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-auto kanbas-navigation-col">
            <KanbasNavigation />
          </div>
          <div className="col">
            <Routes>
              <Route path="/" element={<Navigate to="Dashboard" />} />
              <Route
                path="Dashboard"
                element={
                  <Dashboard
                    courses={courses}
                    course={course}
                    setCourse={setCourse}
                    addNewCourse={addCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                  />
                }
              />
              <Route
                path="Courses/:courseId/*"
                element={<Courses courses={courses} />}
              />

              <Route path="/SignIn" element={<Signin />} />
              <Route path="/SignUp" element={<Signup />} />
              <Route path="/Account" element={<Account />} />
              <Route path="/Account/:id" element={<Account />} />
              <Route path="/Account/admin/users" element={<UserTable />} />
            </Routes>
          </div>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
