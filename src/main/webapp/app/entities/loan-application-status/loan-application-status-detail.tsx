import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './loan-application-status.reducer';

export const LoanApplicationStatusDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const loanApplicationStatusEntity = useAppSelector(state => state.loanApplicationStatus.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="loanApplicationStatusDetailsHeading">Loan Application Status</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{loanApplicationStatusEntity.id}</dd>
          <dt>
            <span id="loanApplicationStatusTypeCode">Loan Application Status Type Code</span>
          </dt>
          <dd>{loanApplicationStatusEntity.loanApplicationStatusTypeCode}</dd>
          <dt>
            <span id="loanApplicationStatusType">Loan Application Status Type</span>
          </dt>
          <dd>{loanApplicationStatusEntity.loanApplicationStatusType}</dd>
          <dt>
            <span id="loanApplicationStatusDetails">Loan Application Status Details</span>
          </dt>
          <dd>{loanApplicationStatusEntity.loanApplicationStatusDetails}</dd>
        </dl>
        <Button tag={Link} to="/loan-application-status" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/loan-application-status/${loanApplicationStatusEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default LoanApplicationStatusDetail;
