import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './fx-transaction-rate-type.reducer';

export const FxTransactionRateTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const fxTransactionRateTypeEntity = useAppSelector(state => state.fxTransactionRateType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fxTransactionRateTypeDetailsHeading">Fx Transaction Rate Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{fxTransactionRateTypeEntity.id}</dd>
          <dt>
            <span id="fxTransactionRateTypeCode">Fx Transaction Rate Type Code</span>
          </dt>
          <dd>{fxTransactionRateTypeEntity.fxTransactionRateTypeCode}</dd>
          <dt>
            <span id="fxTransactionRateType">Fx Transaction Rate Type</span>
          </dt>
          <dd>{fxTransactionRateTypeEntity.fxTransactionRateType}</dd>
          <dt>
            <span id="fxTransactionRateTypeDetails">Fx Transaction Rate Type Details</span>
          </dt>
          <dd>{fxTransactionRateTypeEntity.fxTransactionRateTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/fx-transaction-rate-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/fx-transaction-rate-type/${fxTransactionRateTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default FxTransactionRateTypeDetail;
