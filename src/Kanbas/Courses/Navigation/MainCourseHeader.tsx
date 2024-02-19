import { FaGreaterThan } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";

function MainCourseHeader({
  pathname,
  courseName,
}: {
  pathname: string;
  courseName: string;
}) {
  return (
    <div className="wd-courses-navigation-navbar pos-f-t d-none d-md-block show">
      <nav className="navbar">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseMain"
          aria-expanded="false"
          aria-controls="collapseMain"
        >
          <HiMiniBars3 />
        </button>
        <h4>{courseName}</h4>
        <FaGreaterThan />
        <p>{pathname.split('/').pop()}</p>
      </nav>
    </div>
  );
}

export default MainCourseHeader;
