import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Newsletter } from "./Newsletter";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Newsletter />
          <Col size={12} sm={6}>
            <img
              src="https://res.cloudinary.com/dtqdflngh/image/upload/v1678393692/logo_zk8ubf.png"
              alt="Logo"
            />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/abdullah-murtaza-7bb409177/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="LinkedIN" />
              </a>
              <a href="https://bit.ly/3mHjrl3" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a href="https://bit.ly/3mFo67i" target="_blank" rel="noreferrer">
                <img src={navIcon3} alt="Insta" />
              </a>
            </div>
            <p>Copyright {year}. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
