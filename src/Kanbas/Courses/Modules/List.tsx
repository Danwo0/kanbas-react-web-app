import React, { useEffect, useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../store";
import {
  addModule,
  deleteModule,
  setModule,
  updateModule,
  setModules,
} from "./reducer";
import * as client from "./client";
type LessonType = {
  _id: number;
  name: string;
  description: string;
  module: string;
};
function ModuleList() {
  const dispatch = useDispatch();
  const { courseId } = useParams();

  useEffect(() => {
    client
      .findModulesForCourse(courseId!)
      .then((modules) => dispatch(setModules(modules)));
  }, []);

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleAddModule = () => {
    client.createModule(courseId!, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );

  const [selectedModule, setSelectedModule] = useState(module);
  return (
    <div className="wrapper">
      <div className="wd-modules-main-body">
        <div className="module-edit-group">
          <h5>Add/Update Module</h5>
          <div className="d-flex modules-edit-form">
            <div className="flex-grow-1 modules-edit-inputs">
              <span className="d-flex modules-edit-input-row">
                <label
                  htmlFor="moduleName"
                  className="col-form-label modules-edit-label"
                >
                  Module Name
                </label>
                <input
                  value={module.name}
                  className="form-control modules-edit-input-string"
                  placeholder="Module Name"
                  title="Name of the module"
                  id="moduleName"
                  onChange={(e) =>
                    dispatch(setModule({ ...module, name: e.target.value }))
                  }
                />
              </span>
              <span className="d-flex modules-edit-input-row">
                <label
                  htmlFor="moduleDescription"
                  className="col-form-label modules-edit-label"
                >
                  Module Description
                </label>
                <textarea
                  value={module.description}
                  className="form-control modules-edit-input-string"
                  placeholder="Module Description"
                  title="Description of the module"
                  id="moduleDescription"
                  onChange={(e) =>
                    dispatch(
                      setModule({ ...module, description: e.target.value })
                    )
                  }
                />
              </span>
            </div>
            <div className="modules-edit-buttons d-block show">
              <button className="btn btn-success" onClick={handleAddModule}>
                Add
              </button>
              <button
                className="btn btn-secondary d-block show"
                onClick={handleUpdateModule}
              >
                Update
              </button>
            </div>
          </div>
        </div>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module) => (
            <div
              key={module._id}
              className="module-group"
              onClick={() => setSelectedModule(module)}
            >
              <button
                className="btn btn-secondary"
                onClick={() => dispatch(setModule(module))}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDeleteModule(module._id)}
              >
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
                    <li key={lesson._id} className="module-item">
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
