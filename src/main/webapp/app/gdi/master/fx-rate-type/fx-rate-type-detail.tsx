import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './fx-rate-type.reducer';

export const FxRateTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const fxRateTypeEntity = useAppSelector(state => state.fxRateType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fxRateTypeDetailsHeading">Fx Rate Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{fxRateTypeEntity.id}</dd>
          <dt>
            <span id="fxRateCode">Fx Rate Code</span>
          </dt>
          <dd>{fxRateTypeEntity.fxRateCode}</dd>
          <dt>
            <span id="fxRateType">Fx Rate Type</span>
          </dt>
          <dd>{fxRateTypeEntity.fxRateType}</dd>
          <dt>
            <span id="fxRateDetails">Fx Rate Details</span>
          </dt>
          <dd>{fxRateTypeEntity.fxRateDetails}</dd>
        </dl>
        <Button tag={Link} to="/fx-rate-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/fx-rate-type/${fxRateTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default FxRateTypeDetail;
