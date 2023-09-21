import './footer.scss';

import React from 'react';

import { Col, Row } from 'reactstrap';

const Footer = () => (
  <div className="footer page-content">
    <Row>
      <Col md="12">
        <p>
          GDI Staging client ver: Mark IV no1 (D series) 0.0.1-SNAPSHOT Node Ver 18.17.1 Npm Ver 9.6.7 Typescript Ver 4.8.2 React Ver 18.2.0
          Redux ver 4.2.0 Bootstrap Ver 5.2.0 Axios 0.27.2 JHipster Ver 7.9.4
        </p>
      </Col>
    </Row>
  </div>
);

export default Footer;
