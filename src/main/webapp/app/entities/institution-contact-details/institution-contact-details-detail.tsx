import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './institution-contact-details.reducer';

export const InstitutionContactDetailsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const institutionContactDetailsEntity = useAppSelector(state => state.institutionContactDetails.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="institutionContactDetailsDetailsHeading">Institution Contact Details</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{institutionContactDetailsEntity.id}</dd>
          <dt>
            <span id="entityId">Entity Id</span>
          </dt>
          <dd>{institutionContactDetailsEntity.entityId}</dd>
          <dt>
            <span id="entityName">Entity Name</span>
          </dt>
          <dd>{institutionContactDetailsEntity.entityName}</dd>
          <dt>
            <span id="contactType">Contact Type</span>
          </dt>
          <dd>{institutionContactDetailsEntity.contactType}</dd>
          <dt>
            <span id="contactLevel">Contact Level</span>
          </dt>
          <dd>{institutionContactDetailsEntity.contactLevel}</dd>
          <dt>
            <span id="contactValue">Contact Value</span>
          </dt>
          <dd>{institutionContactDetailsEntity.contactValue}</dd>
          <dt>
            <span id="contactName">Contact Name</span>
          </dt>
          <dd>{institutionContactDetailsEntity.contactName}</dd>
          <dt>
            <span id="contactDesignation">Contact Designation</span>
          </dt>
          <dd>{institutionContactDetailsEntity.contactDesignation}</dd>
        </dl>
        <Button tag={Link} to="/institution-contact-details" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/institution-contact-details/${institutionContactDetailsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default InstitutionContactDetailsDetail;
