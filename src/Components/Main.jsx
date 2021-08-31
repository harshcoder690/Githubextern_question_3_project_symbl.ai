import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Main() {

  const image={height:"300px", width:"400px"};
  const cont={margin:"150px auto"};
  const spanColor={color:'#dc3545'};

  return (
      <Container style={cont}>
          <Row>
              <Col md="6" className="px-5">
                  <h1 className="mb-5" style={spanColor}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </h1>
                  <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                      totam rem aperiam, eaque ipsa quae ab explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur 
                      aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                  </p>
              </Col>

              <Col md="6">
                  <img src="./assets/images/abc.png" style={image} className="d-block mx-auto" />
              </Col>
          </Row>
      </Container>
  );
}

export default Main;