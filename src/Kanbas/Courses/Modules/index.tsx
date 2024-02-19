import ModuleHeader from "./Header";
import ModuleList from "./List";
import "./index.css";
function Modules() {
  return (
    <div className="wd-modules-main flex-fill">
      <ModuleHeader />
      <ModuleList />
    </div>
  );
}
export default Modules;
