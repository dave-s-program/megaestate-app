import { NavLink, Outlet } from "react-router-dom";
import "./RootLayout.css";

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <div>
          <h1 style={{ color: "blue" }}>MEGAESTATE</h1>
        </div>
        <nav>
          <NavLink to="/" exact activeClassName="active-link">
            Home
          </NavLink>
          <NavLink to="projects" exact activeClassName="active-link">
            Projects
          </NavLink>
          <NavLink to="about" exact activeClassName="active-link">
            About
          </NavLink>
          <NavLink to="contact" exact activeClassName="active-link">
            Contact
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
