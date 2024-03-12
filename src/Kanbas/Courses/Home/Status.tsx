import { Link } from 'react-router-dom';
import './index.css'
import { FaArrowAltCircleRight, FaBan, FaBell, FaBullhorn, FaChartBar, FaCheckCircle, FaCrosshairs, FaFileImport } from 'react-icons/fa';

function HomeStatus() {
    return ( 
        <div className="wd-courses-home-sidebar-status">
        <h2>
          Course Status
        </h2>
        <hr />
        <div className="wd-modules-publish-buttons">
          <button type="button" className="btn btn-outline-secondary wd-modules-publish-button"><FaBan />Unpublish</button><button type="button" className="btn btn-outline-secondary wd-modules-publish-button publish-active"><FaCheckCircle />Published</button>
        </div>
        <ul id="course-status-sidebar" className="wd-courses-home-sidebar-buttons">
          <li className="list-group-item">
          <Link to="">
            <button type="button" className="btn btn-outline-secondary wd-courses-home-sidebar-button">
              <div className="wd-sidebar-button-image-wrapper"><FaFileImport /></div>
              Import Existing Content
            </button>
          </Link>
          </li>
          <li className="list-group-item">
            <Link to="">
            <button type="button" className="btn btn-outline-secondary wd-courses-home-sidebar-button">
              <div className="wd-sidebar-button-image-wrapper"><FaArrowAltCircleRight /></div>
              Import From Commons
            </button>
          </Link></li>
          <li className="list-group-item"><Link to="">
            <button type="button" className="btn btn-outline-secondary wd-courses-home-sidebar-button">
              <div className="wd-sidebar-button-image-wrapper"><FaCrosshairs /></div>
              Choose Home Page
            </button>
          </Link></li>
          <li className="list-group-item"><Link to="">
            <button type="button" className="btn btn-outline-secondary wd-courses-home-sidebar-button">
              <div className="wd-sidebar-button-image-wrapper"><FaChartBar /></div>
              View Course Stream
            </button>
          </Link></li>
          <li className="list-group-item"><Link to="">
            <button type="button" className="btn btn-outline-secondary wd-courses-home-sidebar-button">
              <div className="wd-sidebar-button-image-wrapper"><FaBullhorn /></div>
              New Announcement
            </button>
          </Link></li>
          <li className="list-group-item"><Link to="">
            <button type="button" className="btn btn-outline-secondary wd-courses-home-sidebar-button">
              <div className="wd-sidebar-button-image-wrapper"><FaChartBar /></div>
              New Analytics
            </button>
          </Link></li>
          <li className="list-group-item"><Link to="">
            <button type="button" className="btn btn-outline-secondary wd-courses-home-sidebar-button">
              <div className="wd-sidebar-button-image-wrapper"><FaBell /></div>
              View Course Notifications
            </button>
          </Link></li>
        </ul>
      </div>
    );
}

export default HomeStatus;