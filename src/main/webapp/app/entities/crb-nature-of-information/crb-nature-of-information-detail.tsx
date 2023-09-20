import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-nature-of-information.reducer';

export const CrbNatureOfInformationDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbNatureOfInformationEntity = useAppSelector(state => state.crbNatureOfInformation.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbNatureOfInformationDetailsHeading">Crb Nature Of Information</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbNatureOfInformationEntity.id}</dd>
          <dt>
            <span id="natureOfInformationTypeCode">Nature Of Information Type Code</span>
          </dt>
          <dd>{crbNatureOfInformationEntity.natureOfInformationTypeCode}</dd>
          <dt>
            <span id="natureOfInformationType">Nature Of Information Type</span>
          </dt>
          <dd>{crbNatureOfInformationEntity.natureOfInformationType}</dd>
          <dt>
            <span id="natureOfInformationTypeDescription">Nature Of Information Type Description</span>
          </dt>
          <dd>{crbNatureOfInformationEntity.natureOfInformationTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/crb-nature-of-information" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-nature-of-information/${crbNatureOfInformationEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbNatureOfInformationDetail;
