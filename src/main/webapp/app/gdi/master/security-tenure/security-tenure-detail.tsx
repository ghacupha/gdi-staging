import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './security-tenure.reducer';

export const SecurityTenureDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const securityTenureEntity = useAppSelector(state => state.securityTenure.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="securityTenureDetailsHeading">Security Tenure</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{securityTenureEntity.id}</dd>
          <dt>
            <span id="securityTenureCode">Security Tenure Code</span>
          </dt>
          <dd>{securityTenureEntity.securityTenureCode}</dd>
          <dt>
            <span id="securityTenureType">Security Tenure Type</span>
          </dt>
          <dd>{securityTenureEntity.securityTenureType}</dd>
          <dt>
            <span id="securityTenureDetails">Security Tenure Details</span>
          </dt>
          <dd>{securityTenureEntity.securityTenureDetails}</dd>
        </dl>
        <Button tag={Link} to="/security-tenure" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/security-tenure/${securityTenureEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SecurityTenureDetail;
