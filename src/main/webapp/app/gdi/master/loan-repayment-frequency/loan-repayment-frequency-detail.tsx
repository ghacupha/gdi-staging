import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './loan-repayment-frequency.reducer';

export const LoanRepaymentFrequencyDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const loanRepaymentFrequencyEntity = useAppSelector(state => state.loanRepaymentFrequency.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="loanRepaymentFrequencyDetailsHeading">Loan Repayment Frequency</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{loanRepaymentFrequencyEntity.id}</dd>
          <dt>
            <span id="frequencyTypeCode">Frequency Type Code</span>
          </dt>
          <dd>{loanRepaymentFrequencyEntity.frequencyTypeCode}</dd>
          <dt>
            <span id="frequencyType">Frequency Type</span>
          </dt>
          <dd>{loanRepaymentFrequencyEntity.frequencyType}</dd>
          <dt>
            <span id="frequencyTypeDetails">Frequency Type Details</span>
          </dt>
          <dd>{loanRepaymentFrequencyEntity.frequencyTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/loan-repayment-frequency" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/loan-repayment-frequency/${loanRepaymentFrequencyEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default LoanRepaymentFrequencyDetail;
