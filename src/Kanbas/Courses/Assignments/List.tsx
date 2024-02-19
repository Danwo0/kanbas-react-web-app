import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function AssignmentsList({
  courseId,
  assignmentList,
}: {
  courseId: string;
  assignmentList: {
    _id: string;
    title: string;
    course: string;
  }[];
}) {
  return (
    <div className="wrapper wd-assignments-main-body">
      <div className="assignment-group">
        <div className="assignment-group-title">
          <FaEllipsisV className="me-2" /> ASSIGNMENTS
          <span className="float-end">
            <FaCheckCircle className="text-success" />
            <FaPlusCircle className="ms-2" />
            <FaEllipsisV className="ms-2" />
          </span>
        </div>
        <ul className="assignment-items">
          {assignmentList.map((assignment) => (
            <li className="assignment-item">
              <FaEllipsisV className="me-2" />
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
              >
                {assignment.title}
              </Link>
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaEllipsisV className="ms-2" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AssignmentsList;
