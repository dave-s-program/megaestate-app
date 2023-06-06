import React, { useState } from "react";
import "./Projects.css"; // Import the CSS file for styling
import ProjectDetails from "./ProjectDetails";

const Navigation = ({ onSelect, setshowProjectType }) => {
  const [activeNav, setActiveNav] = useState("townhouse");

  const handleNavClick = (nav, setshowProjectType) => {
    setActiveNav(nav);
    onSelect(nav);
    setshowProjectType(false);
  };

  return (
    <div className="navigation">
      <button
        onClick={() => handleNavClick("townhouse", setshowProjectType)}
        className={activeNav === "townhouse" ? "active" : ""}
      >
        Townhouse
      </button>
      <button
        onClick={() => handleNavClick("condominium", setshowProjectType)}
        className={activeNav === "condominium" ? "active" : ""}
      >
        Condominium
      </button>
    </div>
  );
};

const DummyList = ({
  category,
  setListId,
  setshowProjectType,
  setprojectDetails,
}) => {
  // Dummy data for townhouse and condominium
  const townhouseData = [
    {
      id: 1,
      name: "Townhouse 1",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 2,
      name: "Townhouse 2",
      description:
        "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 3,
      name: "Townhouse 3",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    },
  ];

  const condominiumData = [
    {
      id: 1,
      name: "Condominium 1",
      description:
        "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: 2,
      name: "Condominium 2",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    },
    {
      id: 3,
      name: "Condominium 3",
      description:
        "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.10.32.",
    },
  ];

  const dataList = category === "townhouse" ? townhouseData : condominiumData;

  const selectList = (
    itemId,
    category,
    setListId,
    setshowProjectType,
    setprojectDetails
  ) => {
    setListId(itemId);
    setshowProjectType(true);

    const dataList = category === "townhouse" ? townhouseData : condominiumData;
    const projectDetails = dataList.find((item) => item.id === itemId);
    setprojectDetails(projectDetails);
  };

  return (
    <div className="dummy-list">
      {dataList.map((item) => (
        <div
          key={item.id}
          className="dummy-item"
          onClick={() =>
            selectList(
              item.id,
              category,
              setListId,
              setshowProjectType,
              setprojectDetails
            )
          }
        >
          <div className="placeholder-image">600x400</div>
          <h3 style={{ textAlign: "left" }}>{item.name}</h3>
          <p style={{ textAlign: "left" }}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("townhouse");
  const [listId, setListId] = useState();
  const [showProjectType, setshowProjectType] = useState(false);
  const [projectDetails, setprojectDetails] = useState({});

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="projects-container">
      <div>
        <h1>PROJECTS</h1>
      </div>
      <div>
        <Navigation
          onSelect={handleCategorySelect}
          setshowProjectType={setshowProjectType}
        />
        {showProjectType && (
          <ProjectDetails
            projectDetails={projectDetails}
            selectedCategory={selectedCategory}
            listId={listId}
          />
        )}{" "}
        {!showProjectType && (
          <DummyList
            category={selectedCategory}
            setListId={setListId}
            setshowProjectType={setshowProjectType}
            setprojectDetails={setprojectDetails}
          />
        )}{" "}
      </div>
    </div>
  );
};

export default Projects;
