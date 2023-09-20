import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './gender-type.reducer';

export const GenderTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const genderTypeEntity = useAppSelector(state => state.genderType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="genderTypeDetailsHeading">Gender Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{genderTypeEntity.id}</dd>
          <dt>
            <span id="genderCode">Gender Code</span>
          </dt>
          <dd>{genderTypeEntity.genderCode}</dd>
          <dt>
            <span id="genderType">Gender Type</span>
          </dt>
          <dd>{genderTypeEntity.genderType}</dd>
          <dt>
            <span id="genderDescription">Gender Description</span>
          </dt>
          <dd>{genderTypeEntity.genderDescription}</dd>
        </dl>
        <Button tag={Link} to="/gender-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/gender-type/${genderTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default GenderTypeDetail;
