import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './bank-transaction-type.reducer';

export const BankTransactionTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const bankTransactionTypeEntity = useAppSelector(state => state.bankTransactionType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="bankTransactionTypeDetailsHeading">Bank Transaction Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{bankTransactionTypeEntity.id}</dd>
          <dt>
            <span id="transactionTypeCode">Transaction Type Code</span>
          </dt>
          <dd>{bankTransactionTypeEntity.transactionTypeCode}</dd>
          <dt>
            <span id="transactionTypeDetails">Transaction Type Details</span>
          </dt>
          <dd>{bankTransactionTypeEntity.transactionTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/bank-transaction-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/bank-transaction-type/${bankTransactionTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BankTransactionTypeDetail;
