import Container from 'react-bootstrap/Container'

function Footer() {
  return (
    <Container className="z-n1 position-absolute bottom-0 start-50 translate-middle-x">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
            Groceries
          </a>
          <span className="mb-3 mb-md-0 text-body-secondary">© 2023 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="/">New order</a></li>
          <li className="ms-3"><a className="text-body-secondary" href="/history">Order history</a></li>
        </ul>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3"><a className="text-body-secondary" href="http://github.com/fabiogoro/react-groceries">Github</a></li>
        </ul>
      </footer>
    </Container>
  );
}

export default Footer;


