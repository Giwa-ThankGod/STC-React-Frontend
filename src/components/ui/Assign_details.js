import { event } from "jquery";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Assign_details() {
  const [projectDetails, setProjectDetails] = useState(null); // Initialize as null
  const { projectId } = useParams();
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const storedProjects = localStorage.getItem("postedProjects");
    console.log(storedProjects);
    if (storedProjects) {
      const projects = JSON.parse(storedProjects);
      const project = projects.find((project) => project.id == projectId);
      if (project) {
        setProjectDetails(project);
      }
    }
  }, [projectId]);
 

  

  if (!projectDetails) {
    return  (
      <div className="alert alert-warning d-flex align-items-center m-5 " role="alert">
      {/* <svg className="bi flex-shrink-0 me-2" role="img" aria-label="Danger:"></svg> */}
      <i className="fa-solid fa-circle-exclamation mx-3"></i>
      <div>
      <span>Error invalid project Link</span>  
      </div>
    </div>
    )
  }
 

  const handleFileChange=(event)=>{
    setSelectedFile(event.target.files[0])
  }
  const handleSubmit =(event)=>{
    event.preventDefault();
    if (selectedFile) {
      // Here you can handle the file upload logic
      console.log("Selected file:", selectedFile);
      // Reset the selected file after handling it
      setSelectedFile(null);
    } else {
      console.log("No file selected.");
    }
  }
  return (
    <div className="container mt-4 bg-warning-subtle p-3 rounded">
      <h4 className="my-4">Project title : <span className="h5">{projectDetails.projectName}</span></h4>
      <h4 className="my-4">Project discription : <span className="h5">{projectDetails.projectDes}</span></h4>
      <h4>Project Link: <span className="h5" ><u>lcalhost:3000/Assign_details/{projectDetails.id} </u></span ></h4>
      <p></p>
      {/* Add more project details here */}
      <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Submit project
</button>




<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form  onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Name:</label>
            <input type="text" class="form-control" id="recipient-name"/>
          </div>
          <div className="mb-3">
     
      
        <div className="mb-3">
          <label htmlFor="fileInput" className="form-label">
            Choose File
          </label>
          <input
            type="file"
            className="form-control"
            id="fileInput"
            onChange={handleFileChange}
          />
        </div>
    
     
          </div>
          <div className="mb-3">
            <label for="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>

          <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-warning">Submit</button>
      </div>
        </form>
      </div>
    
    </div>
  </div>
</div>
    </div>




  );
}

export default Assign_details;
