import { Link } from "react-router-dom";

function MainKanbasNavigation({
    links,
    pathname,
  }: {
    links: {label: string; icon: JSX.Element}[];
    pathname: string;
  }) {
  return (
    <div className="wd-kanbas-navigation-bar d-none d-md-block show">
      <ul className="wd-kanbas-navigation">
        {links.map((link, index) => (
          <li
            key={index}
            className={pathname.includes(link.label) ? "wd-active" : ""}
          >
            <Link to={`/Kanbas/${link.label}`}>
              {" "}
              {link.icon} {link.label}{" "}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainKanbasNavigation;
