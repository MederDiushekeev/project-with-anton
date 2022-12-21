import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand
              className={
                location.pathname === "/"
                  ? "btn btn-warning text-light"
                  : "btn btn-dark text-light"
              }
            >
              Products
            </Navbar.Brand>
          </Link>

          <Link to="/add-product">
            <Navbar.Brand
              className={
                location.pathname === "/add-product"
                  ? "btn btn-warning text-light"
                  : "btn btn-dark text-light"
              }
            >
              Add Product
            </Navbar.Brand>
          </Link>

          <Link to="/edit-product">
            <Navbar.Brand
              className={
                location.pathname === "/edit-product"
                  ? "btn btn-warning text-light"
                  : "btn btn-dark text-light"
              }
            >
              Edit Product
            </Navbar.Brand>
          </Link>

          <Link to="/contacts">
            <Navbar.Brand
              className={
                location.pathname === "/contacts"
                  ? "btn btn-warning text-light"
                  : "btn btn-dark text-light"
              }
            >
              Contact Us
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
