import "./Home.css";
import { Link } from "react-router-dom";

const projects = [
  { name: "Test", path: "/test" },
  { name: "Test", path: "/test" },
  { name: "Test", path: "/test" },
];

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">My Frontend Mentor Projects</h1>
      <ol className="project-list">
        {projects.map((project) => (
          <li key={project.path} className="project-item">
            <Link to={project.path} className="project-link">
              {project.name}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Home;