import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './agricultural-enterprise-activity-type.reducer';

export const AgriculturalEnterpriseActivityTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const agriculturalEnterpriseActivityTypeEntity = useAppSelector(state => state.agriculturalEnterpriseActivityType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="agriculturalEnterpriseActivityTypeDetailsHeading">Agricultural Enterprise Activity Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{agriculturalEnterpriseActivityTypeEntity.id}</dd>
          <dt>
            <span id="agriculturalEnterpriseActivityTypeCode">Agricultural Enterprise Activity Type Code</span>
          </dt>
          <dd>{agriculturalEnterpriseActivityTypeEntity.agriculturalEnterpriseActivityTypeCode}</dd>
          <dt>
            <span id="agriculturalEnterpriseActivityType">Agricultural Enterprise Activity Type</span>
          </dt>
          <dd>{agriculturalEnterpriseActivityTypeEntity.agriculturalEnterpriseActivityType}</dd>
          <dt>
            <span id="agriculturalEnterpriseActivityTypeDescription">Agricultural Enterprise Activity Type Description</span>
          </dt>
          <dd>{agriculturalEnterpriseActivityTypeEntity.agriculturalEnterpriseActivityTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/agricultural-enterprise-activity-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button
          tag={Link}
          to={`/agricultural-enterprise-activity-type/${agriculturalEnterpriseActivityTypeEntity.id}/edit`}
          replace
          color="primary"
        >
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AgriculturalEnterpriseActivityTypeDetail;
