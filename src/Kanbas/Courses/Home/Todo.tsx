import { Link } from "react-router-dom";
import "./index.css";
import { FaFileAlt } from "react-icons/fa";

function HomeTodo() {
  return (
    <div className="wd-courses-home-sidebar-todo">
      <h2>To Do</h2>
      <hr />
      <ul className="todo-list">
        <li className="list-group-item">
          <div className="todo-list-item">
            <FaFileAlt />
            <div className="todo-list-item-content">
              <Link to="">WD A2 CSS+BOOTSTRAP SP24</Link>
              <p>Feb 6th at 11:59PM</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HomeTodo;
