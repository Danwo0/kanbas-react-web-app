import { Routes, Route, Navigate, useLocation } from "react-router";
import Assignments from "./Assignments";
import Home from "./Home";
import Modules from "./Modules";
import './index.css'
import MainCourseNavigation from "./Navigation/MainCourseNavigation";
import { links } from "./Navigation";

function CourseBody({ courseName }: { courseName: string }) {
  const { pathname } = useLocation();
  return (
    <div className="wd-course-body d-flex">
      <MainCourseNavigation links={links} pathname={pathname} courseName={courseName} />
      <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Assignments" element={<Assignments />} />
        <Route
          path="Assignments/:assignmentId"
          element={<h1>Assignment Editor</h1>}
        />
        <Route path="Grades" element={<h1>Grades</h1>} />
      </Routes>
    </div>
  );
}

export default CourseBody;
