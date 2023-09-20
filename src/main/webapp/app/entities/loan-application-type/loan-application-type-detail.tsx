import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './loan-application-type.reducer';

export const LoanApplicationTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const loanApplicationTypeEntity = useAppSelector(state => state.loanApplicationType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="loanApplicationTypeDetailsHeading">Loan Application Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{loanApplicationTypeEntity.id}</dd>
          <dt>
            <span id="loanApplicationTypeCode">Loan Application Type Code</span>
          </dt>
          <dd>{loanApplicationTypeEntity.loanApplicationTypeCode}</dd>
          <dt>
            <span id="loanApplicationType">Loan Application Type</span>
          </dt>
          <dd>{loanApplicationTypeEntity.loanApplicationType}</dd>
          <dt>
            <span id="loanApplicationDetails">Loan Application Details</span>
          </dt>
          <dd>{loanApplicationTypeEntity.loanApplicationDetails}</dd>
        </dl>
        <Button tag={Link} to="/loan-application-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/loan-application-type/${loanApplicationTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default LoanApplicationTypeDetail;
