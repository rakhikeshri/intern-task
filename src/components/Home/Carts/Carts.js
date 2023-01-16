import { Navbar, Button, Container, Form, Nav, NavDropdown } from 'react-bootstrap';

// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

function Cart() {
  return (
    <Container fluid>
      <Navbar bg="light" expand="lg">
        <Container fluid className=''>

          <div>
            <Navbar.Brand href="#">Active Carts</Navbar.Brand>
            <Navbar.Brand href="#">Archived Carts</Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Filter</Button>
            </Form>

          </Navbar.Collapse>

        </Container>
      </Navbar>
    </Container>
  );
}

export default Cart;