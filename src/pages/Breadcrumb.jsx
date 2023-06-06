import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumb = ({ breadcrumb }) => {
  return (
    <nav className="breadcrumb">
      <ul>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <span className="breadcrumb-separator">{">"}</span>
        </li>
        <li key={breadcrumb.id}>
          <Link>
            {breadcrumb.category.charAt(0).toUpperCase() +
              breadcrumb.category.slice(1)}
          </Link>
        </li>
        <li>
          <span className="breadcrumb-separator">{">"}</span>
        </li>
        <li key={breadcrumb.id}>
          <Link>{breadcrumb.id}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Breadcrumb;
