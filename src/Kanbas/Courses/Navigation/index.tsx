import { useLocation } from "react-router-dom";
import "./index.css";
import SmallCourseNavigation from "./SmallCourseNavigation";
import MainCourseHeader from "./MainCourseHeader";
import { FaBook, FaBullhorn, FaBullseye, FaCircle, FaClipboardCheck, FaClipboardList, FaComments, FaFolder, FaHome, FaListAlt, FaNewspaper, FaPlug, FaProjectDiagram, FaRocket } from "react-icons/fa";
import { HiCog, HiUserGroup } from "react-icons/hi2";
export const links = [
  { label: "Home",            icon: <FaHome />},
  { label: "Modules",         icon: <FaProjectDiagram />},
  { label: "Piazza",          icon: <FaPlug />},
  { label: "Grades",          icon: <FaClipboardCheck />},
  { label: "Assignments",     icon: <FaNewspaper />},
  { label: "Quizzes",         icon: <FaRocket />},
  { label: "People",          icon: <HiUserGroup />},
  { label: "Discussions",     icon: <FaComments />},
  { label: "Announcements",   icon: <FaBullhorn />},
  { label: "Pages",           icon: <FaListAlt />},
  { label: "Files",           icon: <FaFolder />},
  { label: "Rubrics",         icon: <FaClipboardList />},
  { label: "Outcomes",        icon: <FaBullseye />},
  { label: "Collaborations",  icon: <FaCircle />},
  { label: "Syllabus",        icon: <FaBook />},
  { label: "Settings",        icon: <HiCog />},
];

function CourseNavigation({ courseName }: { courseName: string }) {
  const { pathname } = useLocation();
  return (
    <>
      <MainCourseHeader
        pathname={pathname}
        courseName={courseName}
      />
      <SmallCourseNavigation
        links={links}
        pathname={pathname}
        courseName={courseName}
      />
    </>
  );
}
export default CourseNavigation;
