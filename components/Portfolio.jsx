import React, { useState } from "react";
import { IoMdEye, IoMdClose } from "react-icons/io";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { projectcategories } from "@/public/assets/Data";

const Portfolio = () => {
  const [activeCate, setActiveCate] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [loadingStates, setLoadingStates] = useState({});

  // Function to handle category click
  const handleClick = (category) => {
    setActiveCate(category);
    setVisibleProjects(6); // Reset visible projects when changing category
  };

  // Function to open project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  // Function to close project modal
  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  // Function to handle image load
  const handleImageLoad = (projectId) => {
    setLoadingStates(prev => ({
      ...prev,
      [projectId]: false
    }));
  };

  // Function to load more projects
  const loadMoreProjects = () => {
    setVisibleProjects(prev => prev + 6);
  };

  // Get filtered projects
  const getFilteredProjects = () => {
    let projects = [];
    projectcategories.forEach(item => {
      if (activeCate === "All" || item.category === activeCate) {
        if (item.projectDetail) {
          projects = [...projects, ...item.projectDetail];
        }
      }
    });
    return projects;
  };

  const filteredProjects = getFilteredProjects();
  const hasMoreProjects = visibleProjects < filteredProjects.length;

  return (
    <>
      <article className="portfolio active">
        <header>
          <h2 className="h2 article-title mt20">Portfolio</h2>
        </header>

        <section className="projects">
          {/* Category Filter Buttons */}
          <ul className="filter-list">
            {projectcategories.map((item) => (
              <li className="filter-item" key={item.category}>
                <button
                  className={`${item.category === activeCate ? "active" : ""}`}
                  onClick={() => handleClick(item.category)}
                >
                  {item.category}
                </button>
              </li>
            ))}
          </ul>

          {/* Project List */}
          <ul className="project-list">
            {filteredProjects.slice(0, visibleProjects).map((project, index) => (
              <li className="project-item active" key={index}>
                <div className="project-content">
                  <div className="project-img">
                    <div className="project-item-icon-box">
                      <IoMdEye />
                    </div>
                    <div className="image-container">
                      {loadingStates[project.id] !== false && (
                        <div className="image-placeholder" />
                      )}
                      <Image
                        src={project.src}
                        alt={project.name}
                        height={400}
                        width={800}
                        className={`project-image ${loadingStates[project.id] === false ? 'loaded' : ''}`}
                        loading="lazy"
                        onLoad={() => handleImageLoad(project.id)}
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LS0yMi4qLjgyPj4+Ojo4Ojo4Ojo4Ojo4Ojo4Ojo4Ojo4Ojr/2wBDAR4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHr/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                      />
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-category">{project.category}</p>
                    <div className="project-links">
                      <button
                        onClick={() => openProjectModal(project)}
                        className="view-details-btn"
                      >
                        View Details
                      </button>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-demo-btn"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Show More Button */}
          {hasMoreProjects && (
            <div className="show-more-container">
              <button onClick={loadMoreProjects} className="show-more-btn">
                Show More Projects
              </button>
            </div>
          )}
        </section>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="project-modal-overlay" onClick={closeProjectModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-btn" onClick={closeProjectModal}>
                <IoMdClose />
              </button>
              
              <div className="modal-content">
                <h2 className="modal-title">{selectedProject.name}</h2>
                
                <div className="modal-section">
                  <h3>Description</h3>
                  <p>{selectedProject.description || "No description available."}</p>
                </div>

                <div className="modal-section">
                  <h3>Technologies Used</h3>
                  <div className="tech-tags">
                    {selectedProject.technologies?.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    )) || "No technologies specified."}
                  </div>
                </div>

                <div className="modal-section">
                  <h3>Project Links</h3>
                  <div className="project-links">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-demo-btn"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-btn"
                      >
                        <FaExternalLinkAlt /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          .project-content {
            background: var(--eerie-black-2);
            border-radius: 16px;
            overflow: hidden;
            transition: var(--transition-1);
          }

          .project-content:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-3);
          }

          .project-info {
            padding: 1.5rem;
          }

          .project-links {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
          }

          .view-details-btn,
          .live-demo-btn,
          .github-btn {
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: var(--fs-6);
            font-weight: var(--fw-500);
            transition: var(--transition-1);
            display: flex;
            align-items: center;
            gap: 0.5rem;
            cursor: pointer;
            border: none;
          }

          .view-details-btn {
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
          }

          .live-demo-btn,
          .github-btn {
            background: var(--jet);
            color: var(--light-gray);
            text-decoration: none;
          }

          .view-details-btn:hover,
          .live-demo-btn:hover,
          .github-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-2);
          }

          /* Image Loading Styles */
          .image-container {
            position: relative;
            width: 100%;
            height: 400px;
            overflow: hidden;
          }

          .image-placeholder {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--jet);
            animation: pulse 1.5s infinite;
          }

          .project-image {
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }

          .project-image.loaded {
            opacity: 1;
          }

          @keyframes pulse {
            0% { opacity: 0.6; }
            50% { opacity: 0.8; }
            100% { opacity: 0.6; }
          }

          /* Show More Button Styles */
          .show-more-container {
            display: flex;
            justify-content: center;
            margin-top: 2rem;
          }

          .show-more-btn {
            padding: 0.75rem 1.5rem;
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            border: none;
            border-radius: 8px;
            font-size: var(--fs-6);
            font-weight: var(--fw-500);
            cursor: pointer;
            transition: var(--transition-1);
          }

          .show-more-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-2);
          }

          /* Modal Styles */
          .project-modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            padding: 1rem;
          }

          .project-modal {
            background: var(--eerie-black-2);
            border-radius: 16px;
            width: 100%;
            max-width: 600px;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            padding: 2rem;
          }

          .modal-close-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: var(--jet);
            border: none;
            color: var(--light-gray);
            width: 32px;
            height: 32px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: var(--transition-1);
          }

          .modal-close-btn:hover {
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
          }

          .modal-content {
            color: var(--light-gray);
          }

          .modal-title {
            color: var(--white-2);
            font-size: var(--fs-2);
            font-weight: var(--fw-500);
            margin-bottom: 1.5rem;
          }

          .modal-section {
            margin-bottom: 1.5rem;
          }

          .modal-section h3 {
            color: var(--white-2);
            font-size: var(--fs-4);
            font-weight: var(--fw-500);
            margin-bottom: 0.75rem;
          }

          .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .tech-tag {
            background: var(--orange-yellow-crayola);
            color: var(--smoky-black);
            padding: 0.25rem 0.75rem;
            border-radius: 8px;
            font-size: var(--fs-7);
            font-weight: var(--fw-500);
          }

          @media (max-width: 640px) {
            .project-links {
              flex-direction: column;
            }

            .project-modal {
              padding: 1.5rem;
            }
          }
        `}</style>
      </article>
    </>
  );
};

export default Portfolio;
