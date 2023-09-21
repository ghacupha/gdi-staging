import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './loan-decline-reason.reducer';

export const LoanDeclineReasonDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const loanDeclineReasonEntity = useAppSelector(state => state.loanDeclineReason.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="loanDeclineReasonDetailsHeading">Loan Decline Reason</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{loanDeclineReasonEntity.id}</dd>
          <dt>
            <span id="loanDeclineReasonTypeCode">Loan Decline Reason Type Code</span>
          </dt>
          <dd>{loanDeclineReasonEntity.loanDeclineReasonTypeCode}</dd>
          <dt>
            <span id="loanDeclineReasonType">Loan Decline Reason Type</span>
          </dt>
          <dd>{loanDeclineReasonEntity.loanDeclineReasonType}</dd>
          <dt>
            <span id="loanDeclineReasonDetails">Loan Decline Reason Details</span>
          </dt>
          <dd>{loanDeclineReasonEntity.loanDeclineReasonDetails}</dd>
        </dl>
        <Button tag={Link} to="/loan-decline-reason" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/loan-decline-reason/${loanDeclineReasonEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default LoanDeclineReasonDetail;
