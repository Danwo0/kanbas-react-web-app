import { FaEllipsisV } from "react-icons/fa";
import "./index.css";

function ModuleHeader() {
  return (
    <div className="wd-modules-main-header d-flex">
      <button type="button" className="btn btn-outline-secondary">
        Collapse All
      </button>
      <button type="button" className="btn btn-outline-secondary">
        View Progress
      </button>
      <select id="publish-status" className="form-select module-dropdown">
        <option value="ALL">Publish All</option>
        <option value="NONE">Unpublish All</option>
      </select>
      <button type="button" className="btn btn-outline-secondary active">
        <i className="fa fa-plus"></i> Module
      </button>
      <button type="button" className="btn btn-outline-secondary">
        <FaEllipsisV />
      </button>
    </div>
  );
}

export default ModuleHeader;
