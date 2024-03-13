import {useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import CourseBody from "./CourseBody";
function Courses({courses}: {
  courses: any[];
}) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const courseTitle = course?.number! + "." + course?.name!;

  return (
    <>
      <CourseNavigation courseName={courseTitle} />
      <CourseBody courseName={courseTitle}/>
    </>
  );
}

export default Courses;
