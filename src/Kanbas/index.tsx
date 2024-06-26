import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import SmallKanbasHeader from "./Navigation/SmallKanbasHeader";
import { useEffect, useState } from "react";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store";

const API_BASE = process.env.REACT_APP_API_BASE;

function Kanbas() {
  const { pathname } = useLocation();
  const [courses, setCourses] = useState<any[]>([]);

  const COURSES_API = `${API_BASE}/api/courses`;
  const addNewCourse = async () => {
    const response = await axios.post(COURSES_API, course);
    setCourses([...courses, response.data]);
  };
  const deleteCourse = async (courseId: string) => {
    const response = await axios.delete(`${COURSES_API}/${courseId}`);
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const findAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/logo192.png",
  });
  
  const updateCourse = async () => {
    const response = await axios.put(
      `${COURSES_API}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  let pageTitle = pathname.split("/").pop()!;

  /* if (pathname.includes("Assignments") && pageTitle !== "Assignments") {
    const assignment = assignments.find((a) => a._id === pageTitle);
    pageTitle = assignment?.title!;
  } */

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>
          <SmallKanbasHeader
            title={""}
            subtitle={pageTitle}
            pathname={pathname}
          />
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
