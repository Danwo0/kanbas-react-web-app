import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
import CourseBody from "./CourseBody";
import CourseNavigation from "./Navigation";
function Courses() {
  const { courseId } = useParams();
  const COURSES_API = "http://localhost:4000/api/courses";
  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };

  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  const courseTitle = course?.number! + "." + course?.name!;

  return (
    <>
      <CourseNavigation courseName={courseTitle} />
      <CourseBody courseName={courseTitle}/>
    </>
  );
}

export default Courses;
