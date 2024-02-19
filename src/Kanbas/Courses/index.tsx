import { courses } from "../../Kanbas/Database";
import {useParams } from "react-router-dom";
import CourseNavigation from "./Navigation";
import CourseBody from "./CourseBody";
import { useEffect } from "react";
function Courses({setTitle}: {
  setTitle: React.Dispatch<React.SetStateAction<string>>
}) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId)?.name!;
  
  useEffect(() => {
    setTitle(course);
  }, [])
  
  return (
    <>
      <CourseNavigation courseName={course} />
      <CourseBody courseName={course}/>
    </>
  );
}

export default Courses;
