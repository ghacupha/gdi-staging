import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-source-of-information-type.reducer';

export const CrbSourceOfInformationTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbSourceOfInformationTypeEntity = useAppSelector(state => state.crbSourceOfInformationType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbSourceOfInformationTypeDetailsHeading">Crb Source Of Information Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbSourceOfInformationTypeEntity.id}</dd>
          <dt>
            <span id="sourceOfInformationTypeCode">Source Of Information Type Code</span>
          </dt>
          <dd>{crbSourceOfInformationTypeEntity.sourceOfInformationTypeCode}</dd>
          <dt>
            <span id="sourceOfInformationTypeDescription">Source Of Information Type Description</span>
          </dt>
          <dd>{crbSourceOfInformationTypeEntity.sourceOfInformationTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/crb-source-of-information-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-source-of-information-type/${crbSourceOfInformationTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbSourceOfInformationTypeDetail;
