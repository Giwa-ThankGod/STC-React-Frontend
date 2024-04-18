import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
export const Project=[]
function Assignment() {
  const [ProjectData, setProjectData] = useState({
    projectName: "",
    projectDes: "",
    tagStudent: [],
  });
  const [postedProjects, setPostedProjects] = useState([]);
  // const [completedProjects, setCompletedProjects] = useState([]);

  useEffect(() => { 
    const storedProjects = localStorage.getItem("postedProjects");
    if (storedProjects) {
      setPostedProjects(JSON.parse(storedProjects));
      // console.log(storedProjects);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("postedProjects", JSON.stringify(postedProjects));
  }, [postedProjects]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjectData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const postProject = (event) => {
    event.preventDefault();
    const newProject = {
      id: Date.now(), // Assign a unique ID to each project
      projectName: ProjectData.projectName,
      projectDes: ProjectData.projectDes,
      completed: false, // New property to track completion status
    };
    setPostedProjects([...postedProjects, newProject]);
    setProjectData({
      projectName: "john doe",
      projectDes: "",
      tagStudent: [],
    });
    
  };

  const toggleCompletion = (id) => {
    const updatedProjects = postedProjects.map((project) =>
      project.id === id
        ? { ...project, completed: !project.completed }
        : project
    );
    setPostedProjects(updatedProjects);
  };

  const deleteProject = (id) => {
    const updatedProjects = postedProjects.filter(
      (project) => project.id !== id
    );
    setPostedProjects(updatedProjects);
  };

  const notify = () =>
    toast.success("Posted!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  //   useEffect(() => {
  //     setPostedProjects(Project)
  //     console.log(Project);
  // }, [])
  
  return (
    <>
      <div className="container mt-4">
   
        <ToastContainer />

        <button
          type="button"
          className="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Create Project
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create Project
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={postProject}>
                  <div className="mb-3">
                    <label htmlFor="projectName" className="form-label">
                      Project Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="projectName"
                      name="projectName"
                      value={ProjectData.projectName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="projectDes" className="form-label">
                      Project Description
                    </label>
                    <textarea
                      className="form-control"
                      id="projectDes"
                      name="projectDes"
                      value={ProjectData.projectDes}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={notify}
                  >
                    Post Project
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        {postedProjects.map((project) => (
          <div key={project.id} className="col-md-4 mb-4 ">
            <div className="card bg-warning-subtle">
              <div className="card-body">
                <Link to={`/Assign_details/${project.id}`}>
                  <h5 className="card-title text-dark ">
                    {project.projectName}
                  </h5>
                </Link>
                <h6>
                  {" "}
                  referal code:{" "}
                  <samp>
                    <code> {project.id}</code>
                  </samp>
                </h6>

                <p className="card-text">{project.projectDes}</p>
                <button
                  onClick={() => toggleCompletion(project.id)} // Toggle completion status
                  className={`btn btn-success me-5 ${
                    project.completed ? "completed" : "" // Add 'completed' class if completed
                  }`}
                >
                  {project.completed ? (
                    <i class="fa-solid fa-check"></i> // Arrow icon for completed projects
                  ) : (
                    "Completed"
                  )}
                </button>
                <button
                  onClick={() => deleteProject(project.id)}
                  className="btn btn-danger align-items-end"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Outlet />
    </>
  );
}

export default Assignment;
