import { FaChevronDown } from "react-icons/fa";
import { HiMiniBars3 } from "react-icons/hi2";

function SmallKanbasHeader({
    subtitle,
    title,
    pathname,
  }: {
    subtitle: string;
    title: string;
    pathname: string;
  }) {

  const showRight = ['Courses', 'Account']
  return (
    <div className="wd-navigation-navbar-sm pos-f-t d-flex d-md-none">
      <nav className="navbar navbar-dark bg-dark flex-fill">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSmallLeft"
          aria-expanded="false"
          aria-controls="collapseSmallLeft"
        >
          <HiMiniBars3 />
        </button>
        <div className="d-block text-center show">
          <p>{title}</p>
          <p>{subtitle}</p>
        </div>
        <span>
          {showRight.some((p) => pathname.includes(p)) &&
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSmallRight"
              aria-expanded="false"
              aria-controls="collapseSmallRight"
            >
              <FaChevronDown />
            </button>
          }
          </span>
      </nav>
    </div>
  );
}

export default SmallKanbasHeader;
