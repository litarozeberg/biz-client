import { FunctionComponent, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

interface NavbarProps {
  isLogged: boolean;
  isAdmin: boolean;
}

const Navbar: FunctionComponent<NavbarProps> = ({ isLogged, isAdmin }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.setItem("Islogged", "false");
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <img src="https://scontent.ftlv6-1.fna.fbcdn.net/v/t39.30808-6/309637349_472664501571389_8967032265800683388_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=e3sESsCHKDUAX_5wE2c&_nc_ht=scontent.ftlv6-1.fna&oh=00_AT-B-1QjD6K_wlvnJwmsF294d30_u8x2ZOR-2Cxdokocww&oe=635DB39E" width="50" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isLogged ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/home"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    {isAdmin ? (
                      <NavLink
                        className="nav-link"
                        aria-current="page"
                        to="/newcard"
 >
                        New Card
                      </NavLink>
                    ) : null}
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/myCards"
                    >
                      My Cards
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      aria-current="page"
                      to="/allcards"
                    >
                      All Cards
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/SignIn">
                    Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/SignUp">
                    Sign Up
                  </NavLink>
                </li>
                </>
              )}
            </ul>
          </div>
          {isLogged ? (
            <button className="btn btn-outline-warning" onClick={handleLogout}>
              Sign Out
            </button>
          ) : null}
        </div>
      </nav>
    </>
  );
};

export default Navbar;