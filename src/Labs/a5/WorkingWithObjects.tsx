import axios from "axios";
import React, { useEffect, useState } from "react";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: 1,
    name: "NodeJS Module",
    description: "Create a module object to pass",
    course: "CS4550",
  })
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
  const MODULE_URL = "http://localhost:4000/a5/module";
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>

      <input
        className="input"
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>Update Title</a>
      <br />
      <input
        type="number"
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
        value={assignment.score}
      />
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>Update Score</a>
      <br />
      <input
        type="checkbox"
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
        checked={assignment.completed}
      />
      <a className="btn btn-primary" href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>Update Completed</a>
      <br />
      <a className="btn btn-primary" href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>
      <a
        className="btn btn-primary"
        href="http://localhost:4000/a5/assignment/title"
      >
        Get Title
      </a>
      <h5>Modules</h5>
      <input
        type="text"
        onChange={(e) =>
          setModule({ ...module, name: e.target.value })
        }
        value={module.name}
      />
      <a className="btn btn-primary" href={`${MODULE_URL}/name/${module.name}`}>Update Name</a>
      <a className="btn btn-primary" href="http://localhost:4000/a5/module">
        Get Module
      </a>
      <a
        className="btn btn-primary"
        href="http://localhost:4000/a5/module/name"
      >
        Get Name
      </a>
    </div>
  );
}
export default WorkingWithObjects;
