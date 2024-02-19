import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import SmallKanbasHeader from "./Navigation/SmallKanbasHeader";
import { useState } from "react";

function Kanbas() {
  const { pathname } = useLocation();
  const [ title, setTitle ] = useState<string>("");

  const currentPage = pathname.split("/").pop()!;
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div style={{ flexGrow: 1 }}>
        <SmallKanbasHeader title={title} subtitle={currentPage} pathname={pathname} />
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard setTitle={setTitle} />} />
          <Route path="Courses/:courseId/*" element={<Courses setTitle={setTitle} />} />
        </Routes>
      </div>
    </div>
  );
}
export default Kanbas;
