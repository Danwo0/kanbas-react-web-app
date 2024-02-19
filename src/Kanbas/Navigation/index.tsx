import { useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaBookOpen, FaQuestionCircle, FaCuttlefish } from "react-icons/fa";
import MainKanbasNavigation from "./MainKanbasNavigation";
import SmallKanbasNavigation from "./SmallKanbasNavigation";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2 white"/> },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />      },
    { label: "Courses",   icon: <FaBook className="fs-2" />               },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" />     },
    { label: "Inbox",     icon: <FaInbox className="fs-2" />     },
    { label: "History",   icon: <FaClock className="fs-2" />     },
    { label: "Studio",    icon: <FaBookOpen className="fs-2" />     },
    { label: "Commons",   icon: <FaCuttlefish className="fs-2" />     },
    { label: "Help",      icon: <FaQuestionCircle className="fs-2" />     },
  ];
  const { pathname } = useLocation();
  return (
    <>
      <MainKanbasNavigation links={links} pathname={pathname} />
      <SmallKanbasNavigation links={links} pathname={pathname} />
    </>
  );
}
export default KanbasNavigation;