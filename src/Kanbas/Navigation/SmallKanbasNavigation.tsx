import { HiXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";

function SmallKanbasNavigation({
  links,
  pathname,
}: {
  links: { label: string; icon: JSX.Element }[];
  pathname: string;
}) {
  return (
    <div className="collapse d-block d-md-none" id="collapseSmallLeft">
      <div className="wd-kanbas-navigation-bar-sm">
        <div className="wd-kanbas-navigation-sm-header d-flex">
        <Link to="/Kanbas/Dashboard">
          <span data-bs-toggle="collapse" data-bs-target="#collapseSmallLeft" aria-expanded="false" aria-controls="collapseSmallLeft">
            <img src="/images/logo.png" className="wd-kanbas-navigation-logo" style={{ height: 80 }}/>
            K A N B A S
          </span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSmallLeft" aria-expanded="false" aria-controls="collapseSmallLeft">
        <HiXMark />
        </button>
        </div>
        <ul className="wd-kanbas-navigation-sm">
          {links.map((link, index) => (
            <li
              key={index}
              className={pathname.includes(link.label) ? "wd-active" : ""}
            >
              <Link to={`/Kanbas/${link.label}`}>
                <span data-bs-toggle="collapse" data-bs-target="#collapseSmallLeft" aria-expanded="false" aria-controls="collapseSmallLeft">
                  {" "}
                  {link.icon} {link.label}{" "}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SmallKanbasNavigation;
