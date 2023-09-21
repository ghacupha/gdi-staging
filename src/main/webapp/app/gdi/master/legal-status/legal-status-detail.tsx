import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './legal-status.reducer';

export const LegalStatusDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const legalStatusEntity = useAppSelector(state => state.legalStatus.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="legalStatusDetailsHeading">Legal Status</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{legalStatusEntity.id}</dd>
          <dt>
            <span id="legalStatusCode">Legal Status Code</span>
          </dt>
          <dd>{legalStatusEntity.legalStatusCode}</dd>
          <dt>
            <span id="legalStatusType">Legal Status Type</span>
          </dt>
          <dd>{legalStatusEntity.legalStatusType}</dd>
          <dt>
            <span id="legalStatusDescription">Legal Status Description</span>
          </dt>
          <dd>{legalStatusEntity.legalStatusDescription}</dd>
        </dl>
        <Button tag={Link} to="/legal-status" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/legal-status/${legalStatusEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default LegalStatusDetail;
