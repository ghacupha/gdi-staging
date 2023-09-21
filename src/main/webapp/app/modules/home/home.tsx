import './home.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import { Row, Col, Alert } from 'reactstrap';

import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);

  return (
    <Row>
      <Col md="9">
        <h2>Granular Data Interface</h2>
        <p className="lead">GDI Datasets Staging</p>
        {account?.login ? (
          <div>
            <Alert color="success">You are logged in as user &quot;{account.login}&quot;.</Alert>
          </div>
        ) : (
          <div>
            <Alert color="warning">
              If you want to
              <span>&nbsp;</span>
              <Link to="/login" className="alert-link">
                sign in
              </Link>
            </Alert>

            {/*<Alert color="warning">
              You don&apos;t have an account yet?&nbsp;
              <Link to="/account/register" className="alert-link">
                Register a new account
              </Link>
            </Alert>*/}
          </div>
        )}
        <p>If you have any question on GDI Staging:</p>

        <ul>
          <li>
            <a href="https://github.com/ghacupha/gdi-staging" target="_blank" rel="noopener noreferrer">
              GDI homepage
            </a>
          </li>
          <li>
            <a href="https://github.com/ghacupha/gdi-staging/issues?state=open" target="_blank" rel="noopener noreferrer">
              GDI Staging bug tracker
            </a>
          </li>
          <li>
            <a href="https://matrix.to/#/#gdi-staging:gitter.im" target="_blank" rel="noopener noreferrer">
              GDI Staging public chat room
            </a>
          </li>
          <li>
            <a href="https://twitter.com/jhipster" target="_blank" rel="noopener noreferrer">
              follow @jhipster on Twitter
            </a>
          </li>
        </ul>

        <p>
          If you like JHipster, don&apos;t forget to give us a star on{' '}
          <a href="https://github.com/jhipster/generator-jhipster" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          !
        </p>
      </Col>
      <Col md="3" className="pad">
        <span className="hipster rounded" />
      </Col>
    </Row>
  );
};

export default Home;
