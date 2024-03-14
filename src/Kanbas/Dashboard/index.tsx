import { Link } from "react-router-dom";
import "./index.css";

function Dashboard({
  courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse}: {
  courses: any[]; course: any; 
  setCourse: (course: any) => void;
  addNewCourse: () => void; 
  deleteCourse: (course: any) => void;
  updateCourse: () => void; 
}) {
  return (
    <div className="wd-kanbas-dashboard-main">
      <h1>Dashboard</h1>
      <h5>Add/Update Course</h5>
      <div className="d-flex dashboard-edit-courses-form">
        <div className="flex-grow-1 dashboard-edit-courses-inputs">
          <span className="d-flex dashboard-edit-courses-input-row">
            <label htmlFor="courseName" className="col-form-label dashboard-edit-courses-label">Course Name</label>
            <input value={course.name} 
                  className="form-control dashboard-edit-courses-input-string"
                  placeholder="Course name"
                  title="Name of the course"
                  id="courseName"
                  onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          </span>
          <span className="d-flex dashboard-edit-courses-input-row">
            <label htmlFor="courseDescription" className="col-form-label dashboard-edit-courses-label">Course Description</label>
            <input value={course.number} 
                  className="form-control dashboard-edit-courses-input-string"
                  placeholder="Course description"
                  title="Course description"
                  id="courseDescription"
                  onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          </span>
          <span className="d-flex dashboard-edit-courses-input-row">
            <label htmlFor="courseStartDate" className="col-form-label dashboard-edit-courses-label">Start Date</label>
            <input value={course.startDate} 
                  className="form-control" 
                  type="date"
                  title="Course start date"
                  id="courseStartDate"
                  onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          </span>
          <span className="d-flex dashboard-edit-courses-input-row">
            <label htmlFor="courseEndDate" className="col-form-label dashboard-edit-courses-label">End Date</label>
            <input value={course.endDate} 
                  className="form-control" 
                  type="date"
                  title="Course end date"
                  id="courseEndDate"
                  onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
            </span> 
        </div>
        <div className="dashboard-edit-courses-buttons">
          <button 
            onClick={addNewCourse} 
            className="btn btn-success d-block show"
          >
            Add
          </button>
          <button 
            onClick={updateCourse}
            className="btn btn-secondary d-block show"
          >
            Update
          </button>
        </div>
      </div>
      <hr />
      <h2>Published Courses ({courses.length})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {courses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300 }}>
              <div className="card">
                <img
                  src={`/images/${course.image}`}
                  className="card-img-top"
                  style={{ height: 150 }}
                />
                <div className="card-body">
                  <Link
                    className="card-title"
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{
                      textDecoration: "none",
                      color: "navy",
                      fontWeight: "bold",
                    }}
                  >
                    {course.name}{" "}
                    <button onClick={(event) => {
                        event.preventDefault();
                        setCourse(course);
                      }}
                      className="btn btn-secondary"
                    >
                      Edit
                    </button>
                    <button onClick={(event) => {
                        event.preventDefault();
                        deleteCourse(course._id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </Link>
                  <p className="card-text">{course.name}</p>
                  <Link
                    to={`/Kanbas/Courses/${course._id}/Home`}
                    className="btn btn-primary"
                  >
                    Go{" "}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
