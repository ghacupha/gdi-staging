import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './bank-branch-code.reducer';

export const BankBranchCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const bankBranchCodeEntity = useAppSelector(state => state.bankBranchCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="bankBranchCodeDetailsHeading">Bank Branch Code</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{bankBranchCodeEntity.id}</dd>
          <dt>
            <span id="bankCode">Bank Code</span>
          </dt>
          <dd>{bankBranchCodeEntity.bankCode}</dd>
          <dt>
            <span id="bankName">Bank Name</span>
          </dt>
          <dd>{bankBranchCodeEntity.bankName}</dd>
          <dt>
            <span id="branchCode">Branch Code</span>
          </dt>
          <dd>{bankBranchCodeEntity.branchCode}</dd>
          <dt>
            <span id="branchName">Branch Name</span>
          </dt>
          <dd>{bankBranchCodeEntity.branchName}</dd>
          <dt>
            <span id="notes">Notes</span>
          </dt>
          <dd>{bankBranchCodeEntity.notes}</dd>
          <dt>Placeholder</dt>
          <dd>
            {bankBranchCodeEntity.placeholders
              ? bankBranchCodeEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {bankBranchCodeEntity.placeholders && i === bankBranchCodeEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/bank-branch-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/bank-branch-code/${bankBranchCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BankBranchCodeDetail;
