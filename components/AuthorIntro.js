import { Row, Col, Media, Image } from 'react-bootstrap';

const AuthorIntro = () => (
  <Row>
    <Col md="8">
      <Media className="mb-4 admin-intro">
        <Image
          roundedCircle
          width={64}
          height={64}
          className="mr-3"
          src="https://leejackson.dev/profilepicjp.jpg"
          alt="Profile Picture"
        />
        <Media.Body>
          <h5 className="font-weight-bold mb-0">Welcome to my blog</h5>
          <p className="welcome-text">
            My name is Lee Jackson and I am a Front End Developer. This is my
            Development Blog, created with Next.js and Sanity!
          </p>
        </Media.Body>
      </Media>
    </Col>
  </Row>
);

export default AuthorIntro;
