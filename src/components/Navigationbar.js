import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <Navbar variant="dark">
      <Container>
        <Navbar.Brand href="/">Nonton Pilem</Navbar.Brand>
        <Nav>
          <Nav.Link href="#trending">Trending</Nav.Link>
          <Nav.Link href="#superhero">SuperHero</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
