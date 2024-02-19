import { Link, useParams } from "react-router-dom";
import "./index.css";
import { FaCalendar } from "react-icons/fa";
import { calendar } from "../../Database";

function HomeCalendar() {
  const { courseId } = useParams();
  const calendarList = calendar.filter(
    (calendarItem) => calendarItem.course === courseId
  );
  return (
    <div className="wd-courses-home-sidebar-calendar">
      <div className="wd-courses-home-sidebar-calendar-title">
        <h2>Coming Up</h2>
        <Link to="">View Calendar</Link>
      </div>
      <hr />
      <ul className="calendar-list">
        {calendarList.map((calendarItem) => (
          <li className="list-group-item">
            <div className="calendar-list-item">
              <FaCalendar />
              <div className="calendar-list-item-content">
                <Link to="">{calendarItem.title}</Link>
                <p>{(new Date(calendarItem.dueDate)).toLocaleString()}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeCalendar;
