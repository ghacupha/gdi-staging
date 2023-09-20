import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './fx-transaction-type.reducer';

export const FxTransactionTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const fxTransactionTypeEntity = useAppSelector(state => state.fxTransactionType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fxTransactionTypeDetailsHeading">Fx Transaction Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{fxTransactionTypeEntity.id}</dd>
          <dt>
            <span id="fxTransactionTypeCode">Fx Transaction Type Code</span>
          </dt>
          <dd>{fxTransactionTypeEntity.fxTransactionTypeCode}</dd>
          <dt>
            <span id="fxTransactionType">Fx Transaction Type</span>
          </dt>
          <dd>{fxTransactionTypeEntity.fxTransactionType}</dd>
          <dt>
            <span id="fxTransactionTypeDescription">Fx Transaction Type Description</span>
          </dt>
          <dd>{fxTransactionTypeEntity.fxTransactionTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/fx-transaction-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/fx-transaction-type/${fxTransactionTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default FxTransactionTypeDetail;
