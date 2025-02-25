import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary  bg-dark"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link active ${isActive ? "active" : ""} `
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    `nav-link active ${isActive ? "active" : ""}`
                  }
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="about"
                  className={({ isActive }) =>
                    `nav-link active ${isActive ? "active" : ""}`
                  }
                >
                  About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
