import { Link, useParams } from "react-router-dom";
import "./index.css";
import { FaFileAlt } from "react-icons/fa";
import { todos } from "../../Database";

function HomeTodo() {
  const { courseId } = useParams();
  const todoList = todos.filter(
    (todo) => todo.course === courseId);
  return (
    <div className="wd-courses-home-sidebar-todo">
      <h2>To Do</h2>
      <hr />
      <ul className="todo-list">
        {todoList.map((todo) => (
          <li key={todo._id} className="list-group-item">
            <div className="todo-list-item">
              <FaFileAlt />
              <div className="todo-list-item-content">
                <Link to="">{todo.title}</Link>
                <p>{(new Date(todo.dueDate)).toLocaleString()}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeTodo;
