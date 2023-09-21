import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './issuers-of-securities.reducer';

export const IssuersOfSecuritiesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const issuersOfSecuritiesEntity = useAppSelector(state => state.issuersOfSecurities.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="issuersOfSecuritiesDetailsHeading">Issuers Of Securities</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{issuersOfSecuritiesEntity.id}</dd>
          <dt>
            <span id="issuerOfSecuritiesCode">Issuer Of Securities Code</span>
          </dt>
          <dd>{issuersOfSecuritiesEntity.issuerOfSecuritiesCode}</dd>
          <dt>
            <span id="issuerOfSecurities">Issuer Of Securities</span>
          </dt>
          <dd>{issuersOfSecuritiesEntity.issuerOfSecurities}</dd>
          <dt>
            <span id="issuerOfSecuritiesDescription">Issuer Of Securities Description</span>
          </dt>
          <dd>{issuersOfSecuritiesEntity.issuerOfSecuritiesDescription}</dd>
        </dl>
        <Button tag={Link} to="/issuers-of-securities" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/issuers-of-securities/${issuersOfSecuritiesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default IssuersOfSecuritiesDetail;
