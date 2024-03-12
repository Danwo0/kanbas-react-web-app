import { FaGreaterThan } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";
import { assignments } from "../../Database";
function MainCourseHeader({
  pathname,
  courseName,
}: {
  pathname: string;
  courseName: string;
}) {
  let pageTitle = pathname.split('/').pop();

  if (pathname.includes("Assignments") && pageTitle !== "Assignments") {
    const assignment = assignments.find((a) => a._id === pageTitle);
    pageTitle = assignment?.title;
  }

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
        <p>{pageTitle}</p>
      </nav>
    </div>
  );
}

export default MainCourseHeader;
