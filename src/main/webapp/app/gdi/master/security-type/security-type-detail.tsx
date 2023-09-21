import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './security-type.reducer';

export const SecurityTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const securityTypeEntity = useAppSelector(state => state.securityType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="securityTypeDetailsHeading">Security Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{securityTypeEntity.id}</dd>
          <dt>
            <span id="securityTypeCode">Security Type Code</span>
          </dt>
          <dd>{securityTypeEntity.securityTypeCode}</dd>
          <dt>
            <span id="securityType">Security Type</span>
          </dt>
          <dd>{securityTypeEntity.securityType}</dd>
          <dt>
            <span id="securityTypeDetails">Security Type Details</span>
          </dt>
          <dd>{securityTypeEntity.securityTypeDetails}</dd>
          <dt>
            <span id="securityTypeDescription">Security Type Description</span>
          </dt>
          <dd>{securityTypeEntity.securityTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/security-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/security-type/${securityTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SecurityTypeDetail;
