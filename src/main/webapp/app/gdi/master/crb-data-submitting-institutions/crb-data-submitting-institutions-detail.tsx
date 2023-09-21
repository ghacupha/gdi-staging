import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-data-submitting-institutions.reducer';

export const CrbDataSubmittingInstitutionsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbDataSubmittingInstitutionsEntity = useAppSelector(state => state.crbDataSubmittingInstitutions.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbDataSubmittingInstitutionsDetailsHeading">Crb Data Submitting Institutions</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbDataSubmittingInstitutionsEntity.id}</dd>
          <dt>
            <span id="institutionCode">Institution Code</span>
          </dt>
          <dd>{crbDataSubmittingInstitutionsEntity.institutionCode}</dd>
          <dt>
            <span id="institutionName">Institution Name</span>
          </dt>
          <dd>{crbDataSubmittingInstitutionsEntity.institutionName}</dd>
          <dt>
            <span id="institutionCategory">Institution Category</span>
          </dt>
          <dd>{crbDataSubmittingInstitutionsEntity.institutionCategory}</dd>
        </dl>
        <Button tag={Link} to="/crb-data-submitting-institutions" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-data-submitting-institutions/${crbDataSubmittingInstitutionsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbDataSubmittingInstitutionsDetail;
