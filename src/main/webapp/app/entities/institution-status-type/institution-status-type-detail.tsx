import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './institution-status-type.reducer';

export const InstitutionStatusTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const institutionStatusTypeEntity = useAppSelector(state => state.institutionStatusType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="institutionStatusTypeDetailsHeading">Institution Status Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{institutionStatusTypeEntity.id}</dd>
          <dt>
            <span id="institutionStatusCode">Institution Status Code</span>
          </dt>
          <dd>{institutionStatusTypeEntity.institutionStatusCode}</dd>
          <dt>
            <span id="institutionStatusType">Institution Status Type</span>
          </dt>
          <dd>{institutionStatusTypeEntity.institutionStatusType}</dd>
          <dt>
            <span id="insitutionStatusTypeDescription">Insitution Status Type Description</span>
          </dt>
          <dd>{institutionStatusTypeEntity.insitutionStatusTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/institution-status-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/institution-status-type/${institutionStatusTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default InstitutionStatusTypeDetail;
