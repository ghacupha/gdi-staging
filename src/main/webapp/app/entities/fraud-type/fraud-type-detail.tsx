import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './fraud-type.reducer';

export const FraudTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const fraudTypeEntity = useAppSelector(state => state.fraudType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fraudTypeDetailsHeading">Fraud Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{fraudTypeEntity.id}</dd>
          <dt>
            <span id="fraudTypeCode">Fraud Type Code</span>
          </dt>
          <dd>{fraudTypeEntity.fraudTypeCode}</dd>
          <dt>
            <span id="fraudType">Fraud Type</span>
          </dt>
          <dd>{fraudTypeEntity.fraudType}</dd>
          <dt>
            <span id="fraudTypeDetails">Fraud Type Details</span>
          </dt>
          <dd>{fraudTypeEntity.fraudTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/fraud-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/fraud-type/${fraudTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default FraudTypeDetail;
