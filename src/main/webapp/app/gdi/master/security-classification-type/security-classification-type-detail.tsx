import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './security-classification-type.reducer';

export const SecurityClassificationTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const securityClassificationTypeEntity = useAppSelector(state => state.securityClassificationType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="securityClassificationTypeDetailsHeading">Security Classification Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{securityClassificationTypeEntity.id}</dd>
          <dt>
            <span id="securityClassificationTypeCode">Security Classification Type Code</span>
          </dt>
          <dd>{securityClassificationTypeEntity.securityClassificationTypeCode}</dd>
          <dt>
            <span id="securityClassificationType">Security Classification Type</span>
          </dt>
          <dd>{securityClassificationTypeEntity.securityClassificationType}</dd>
          <dt>
            <span id="securityClassificationDetails">Security Classification Details</span>
          </dt>
          <dd>{securityClassificationTypeEntity.securityClassificationDetails}</dd>
        </dl>
        <Button tag={Link} to="/security-classification-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/security-classification-type/${securityClassificationTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SecurityClassificationTypeDetail;
