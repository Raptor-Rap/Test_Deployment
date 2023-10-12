import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

import { NavLink, useNavigate } from "react-router-dom";

export default function NavbarComponent() {
  const [changeColor, setChangeColor] = useState(false);
  const navigate = useNavigate();

  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    changeBackgroundColor();

    window.addEventListener("scroll", changeBackgroundColor);
  });

  return (
    <div>
      {" "}
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href="#home" className="fs-3 fw-bold">
            Travelo.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-center">
              <div className="nav-link">
                <NavLink to="/">Home</NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/destinasi">Destinasi</NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/testimonial">Testimonial</NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/faq">FAQ</NavLink>
              </div>
              <div className="nav-link">
                <NavLink to="/syarat">Syarat & Ketentuan</NavLink>
              </div>
            </Nav>

            <div className="text-center">
              <button
                className="btn btn-outline-danger rounded-1"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
