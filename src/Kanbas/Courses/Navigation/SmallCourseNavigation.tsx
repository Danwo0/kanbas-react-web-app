import { Link } from "react-router-dom";

function SmallCourseNavigation({
  links,
  pathname,
  courseName,
}: {
  links: { label: string; icon: JSX.Element }[];
  pathname: string;
  courseName: string;
}) {
  return (
    <>
      <div className="collapse d-block d-md-none" id="collapseSmallRight">
        <div className="wd-courses-navigation-bar-sm">
          <ul className="wd-courses-navigation-sm">
            {links.map((link, index) => (
              <li
                key={index}
                className={pathname.includes(link.label) ? "wd-active" : ""}
              >
                <Link to={link.label}>
                  <span
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSmallRight"
                    aria-expanded="false"
                    aria-controls="collapseSmallRight"
                  >
                    {link.icon}
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default SmallCourseNavigation;
