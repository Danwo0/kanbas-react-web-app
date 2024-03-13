import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import { addModule, deleteModule, setModule, updateModule } from "./reducer";
type LessonType = {
  _id: number,
  name: string,
  description: string, 
  module: string
}
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(moduleList[0]);
  return (
    <div className="wrapper">
      <div className="wd-modules-main-body">
        <div className="module-group">
          <button
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button
            onClick={() => dispatch(updateModule(module))}>
            Update
          </button>
          <input value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
          }/>
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
          }/>

        </div>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module) => (
          <div
            className="module-group"
            onClick={() => setSelectedModule(module)}>
            <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>

            <div className="module-group-title">
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="module-items">
                {module.lessons?.map((lesson: LessonType) => (
                  <li className="module-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
export default ModuleList;