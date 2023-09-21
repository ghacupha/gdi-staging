import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './loan-restructure-flag.reducer';

export const LoanRestructureFlagDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const loanRestructureFlagEntity = useAppSelector(state => state.loanRestructureFlag.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="loanRestructureFlagDetailsHeading">Loan Restructure Flag</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{loanRestructureFlagEntity.id}</dd>
          <dt>
            <span id="loanRestructureFlagCode">Loan Restructure Flag Code</span>
          </dt>
          <dd>{loanRestructureFlagEntity.loanRestructureFlagCode}</dd>
          <dt>
            <span id="loanRestructureFlagType">Loan Restructure Flag Type</span>
          </dt>
          <dd>{loanRestructureFlagEntity.loanRestructureFlagType}</dd>
          <dt>
            <span id="loanRestructureFlagDetails">Loan Restructure Flag Details</span>
          </dt>
          <dd>{loanRestructureFlagEntity.loanRestructureFlagDetails}</dd>
        </dl>
        <Button tag={Link} to="/loan-restructure-flag" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/loan-restructure-flag/${loanRestructureFlagEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default LoanRestructureFlagDetail;
