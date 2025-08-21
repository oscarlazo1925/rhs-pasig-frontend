import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Spinner } from "react-bootstrap";

function AppNavbar({ user, handleGoogleLogin, handleLogout, loginText }) {
  // console.log( user.email , 'user')

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Brand */}
        <Navbar.Brand as={Link} to="/">
          RHS-PASIG
        </Navbar.Brand>

        {/* Home beside MyApp */}
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              <>
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
                <Link to="#" className="nav-link" onClick={handleLogout}>
                  Logout
                </Link>
              </>
            ) : (
              <Link
                to="#"
                className={`nav-link ${loginText ? "disabled-link" : ""}`}
                onClick={(e) => {
                  if (loginText) {
                    e.preventDefault(); // ⛔ stop multiple clicks while loading
                    return;
                  }
                  handleGoogleLogin();
                }}
                style={{
                  pointerEvents: loginText ? "none" : "auto", // disable click
                  opacity: loginText ? 0.6 : 1, // dim effect
                }}
              >
                {loginText ? (
                  <>
                    <Spinner
                      animation="grow"
                      style={{ width: "0.75rem", height: "0.75rem" }}
                      className="me-1"
                    />
                    <Spinner
                      animation="grow"
                      style={{ width: "0.75rem", height: "0.75rem" }}
                      className="me-1"
                    />
                    <Spinner
                      animation="grow"
                      style={{ width: "0.75rem", height: "0.75rem" }}
                    />
                  </>
                ) : (
                  "Login"
                )}
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
