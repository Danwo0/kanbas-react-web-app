import { FaEllipsisV, FaPlus } from "react-icons/fa";

function AssignmentsHeader() {
  return (
    <div className="wd-assignments-main-header d-flex">
      <button type="button" className="btn btn-outline-secondary">
        Group
      </button>
      <button type="button" className="btn btn-outline-secondary active">
        <FaPlus /> Assignment
      </button>
      <button type="button" className="btn btn-outline-secondary">
        <FaEllipsisV />
      </button>
    </div>
  );
}

export default AssignmentsHeader;
