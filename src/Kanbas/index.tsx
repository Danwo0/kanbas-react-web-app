import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import SmallKanbasHeader from "./Navigation/SmallKanbasHeader";
import { useState } from "react";
import { assignments } from "./Database";
import { courseList } from "./Database";
import { Provider } from "react-redux";
import store from "./store";

function Kanbas() {
  const { pathname } = useLocation();
  const [courses, setCourses] = useState(courseList);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg"
  });
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
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
  let pageTitle = pathname.split('/').pop()!;

  if (pathname.includes("Assignments") && pageTitle !== "Assignments") {
    const assignment = assignments.find((a) => a._id === pageTitle);
    pageTitle = assignment?.title!;
  }
  
  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div style={{ flexGrow: 1 }}>
          <SmallKanbasHeader title={""} subtitle={pageTitle} pathname={pathname} />
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                  />} />
            <Route path="Courses/:courseId/*" element={
              <Courses 
                courses={courses}
              />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
