import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './sna-sector-code.reducer';

export const SnaSectorCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const snaSectorCodeEntity = useAppSelector(state => state.snaSectorCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="snaSectorCodeDetailsHeading">Sna Sector Code</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{snaSectorCodeEntity.id}</dd>
          <dt>
            <span id="sectorTypeCode">Sector Type Code</span>
          </dt>
          <dd>{snaSectorCodeEntity.sectorTypeCode}</dd>
          <dt>
            <span id="mainSectorCode">Main Sector Code</span>
          </dt>
          <dd>{snaSectorCodeEntity.mainSectorCode}</dd>
          <dt>
            <span id="mainSectorTypeName">Main Sector Type Name</span>
          </dt>
          <dd>{snaSectorCodeEntity.mainSectorTypeName}</dd>
          <dt>
            <span id="subSectorCode">Sub Sector Code</span>
          </dt>
          <dd>{snaSectorCodeEntity.subSectorCode}</dd>
          <dt>
            <span id="subSectorName">Sub Sector Name</span>
          </dt>
          <dd>{snaSectorCodeEntity.subSectorName}</dd>
          <dt>
            <span id="subSubSectorCode">Sub Sub Sector Code</span>
          </dt>
          <dd>{snaSectorCodeEntity.subSubSectorCode}</dd>
          <dt>
            <span id="subSubSectorName">Sub Sub Sector Name</span>
          </dt>
          <dd>{snaSectorCodeEntity.subSubSectorName}</dd>
        </dl>
        <Button tag={Link} to="/sna-sector-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/sna-sector-code/${snaSectorCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SnaSectorCodeDetail;
