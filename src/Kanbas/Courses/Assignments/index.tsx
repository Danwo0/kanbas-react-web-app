import React from "react";
import { useParams } from "react-router-dom";
import { assignments } from "../../Database";
import './index.css';
import AssignmentsList from "./List";
import AssignmentsHeader from "./Header";
import AssignmentsSearchbar from "./SearchBar";

function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="wd-assignments-main flex-fill">
      <span>
      <AssignmentsSearchbar />
      <AssignmentsHeader />
      </span>
      <AssignmentsList courseId={courseId!} assignmentList={assignmentList} />
    </div>
);}
export default Assignments;