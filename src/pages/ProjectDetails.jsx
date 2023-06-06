import React, { useState } from "react";
import "./ProjectDetails.css"; // Import the CSS file for styling
import Breadcrumb from "./Breadcrumb";

const ProjectDetails = ({ projectDetails, selectedCategory, listId }) => {
  const [breadcrumb, setbreadcrumb] = useState({
    id: listId,
    category: selectedCategory,
  });
  return (
    <div>
      <Breadcrumb breadcrumb={breadcrumb} />
      <div className="parent-container">
        <div className="dummy-list-type" style={{ height: "100%" }}>
          <div className="dummy-item-type">
            <div className="placeholder-image-type">Image</div>
            <h3 style={{ textAlign: "left" }}>{projectDetails.name}</h3>
            <p style={{ textAlign: "left" }}>{projectDetails.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
