import { Link } from "react-router-dom";

function MainCourseNavigation({
  links,
  pathname,
  courseName,
}: {
  links: {label: string; icon: JSX.Element}[];
  pathname: string;
  courseName: string;
}) {
  return (
    <div className="collapse d-none d-md-block show" id="collapseMain">
      <div className="wd-courses-navigation-bar">
        <ul className="wd-courses-navigation">
          {links.map((link, index) => (
            <li
              key={index}
              className={pathname.includes(link.label) ? "wd-active" : ""}
            >
              <Link to={link.label}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MainCourseNavigation;
