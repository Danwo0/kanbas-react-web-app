import { Link } from "react-router-dom";
import "./index.css";
import { FaCalendar } from "react-icons/fa";

function HomeCalendar() {
  return (
    <div className="wd-courses-home-sidebar-calendar">
      <div className="wd-courses-home-sidebar-calendar-title">
        <h2>Coming Up</h2>
        <Link to="">View Calendar</Link>
      </div>
      <hr />
      <ul className="calendar-list">
        <li className="list-group-item">
          <div className="calendar-list-item">
            <FaCalendar />
            <div className="calendar-list-item-content">
              <Link to="">Lecture CS4590 12631.202410</Link>
              <p>Sep 7 at 11:45am</p>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="calendar-list-item">
            <FaCalendar />
            <div className="calendar-list-item-content">
              <Link to="">Lecture CS4590 12631.202410</Link>
              <p>Sep 11 at 11:45am</p>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="calendar-list-item">
            <FaCalendar />
            <div className="calendar-list-item-content">
              <Link to="">CS5610 06 SP23 Lecture</Link>
              <p>Sep 11 at 06:00pm</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default HomeCalendar;
