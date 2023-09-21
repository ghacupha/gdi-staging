import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './loan-performance-classification.reducer';

export const LoanPerformanceClassificationDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const loanPerformanceClassificationEntity = useAppSelector(state => state.loanPerformanceClassification.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="loanPerformanceClassificationDetailsHeading">Loan Performance Classification</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{loanPerformanceClassificationEntity.id}</dd>
          <dt>
            <span id="loanPerformanceClassificationCode">Loan Performance Classification Code</span>
          </dt>
          <dd>{loanPerformanceClassificationEntity.loanPerformanceClassificationCode}</dd>
          <dt>
            <span id="loanPerformanceClassificationType">Loan Performance Classification Type</span>
          </dt>
          <dd>{loanPerformanceClassificationEntity.loanPerformanceClassificationType}</dd>
          <dt>
            <span id="commercialBankDescription">Commercial Bank Description</span>
          </dt>
          <dd>{loanPerformanceClassificationEntity.commercialBankDescription}</dd>
          <dt>
            <span id="microfinanceDescription">Microfinance Description</span>
          </dt>
          <dd>{loanPerformanceClassificationEntity.microfinanceDescription}</dd>
        </dl>
        <Button tag={Link} to="/loan-performance-classification" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/loan-performance-classification/${loanPerformanceClassificationEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default LoanPerformanceClassificationDetail;
