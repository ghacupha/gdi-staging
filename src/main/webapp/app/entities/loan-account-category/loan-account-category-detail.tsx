import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './loan-account-category.reducer';

export const LoanAccountCategoryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const loanAccountCategoryEntity = useAppSelector(state => state.loanAccountCategory.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="loanAccountCategoryDetailsHeading">Loan Account Category</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{loanAccountCategoryEntity.id}</dd>
          <dt>
            <span id="loanAccountMutationCode">Loan Account Mutation Code</span>
          </dt>
          <dd>{loanAccountCategoryEntity.loanAccountMutationCode}</dd>
          <dt>
            <span id="loanAccountMutationType">Loan Account Mutation Type</span>
          </dt>
          <dd>{loanAccountCategoryEntity.loanAccountMutationType}</dd>
          <dt>
            <span id="loanAccountMutationDetails">Loan Account Mutation Details</span>
          </dt>
          <dd>{loanAccountCategoryEntity.loanAccountMutationDetails}</dd>
          <dt>
            <span id="loanAccountMutationDescription">Loan Account Mutation Description</span>
          </dt>
          <dd>{loanAccountCategoryEntity.loanAccountMutationDescription}</dd>
        </dl>
        <Button tag={Link} to="/loan-account-category" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/loan-account-category/${loanAccountCategoryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default LoanAccountCategoryDetail;
