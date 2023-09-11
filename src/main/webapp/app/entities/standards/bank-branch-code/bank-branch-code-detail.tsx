import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <h2 data-cy="bankBranchCodeDetailsHeading">
          <Translate contentKey="gdiStagingApp.standardsBankBranchCode.detail.title">BankBranchCode</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{bankBranchCodeEntity.id}</dd>
          <dt>
            <span id="bankCode">
              <Translate contentKey="gdiStagingApp.standardsBankBranchCode.bankCode">Bank Code</Translate>
            </span>
          </dt>
          <dd>{bankBranchCodeEntity.bankCode}</dd>
          <dt>
            <span id="bankName">
              <Translate contentKey="gdiStagingApp.standardsBankBranchCode.bankName">Bank Name</Translate>
            </span>
          </dt>
          <dd>{bankBranchCodeEntity.bankName}</dd>
          <dt>
            <span id="branchCode">
              <Translate contentKey="gdiStagingApp.standardsBankBranchCode.branchCode">Branch Code</Translate>
            </span>
          </dt>
          <dd>{bankBranchCodeEntity.branchCode}</dd>
          <dt>
            <span id="branchName">
              <Translate contentKey="gdiStagingApp.standardsBankBranchCode.branchName">Branch Name</Translate>
            </span>
          </dt>
          <dd>{bankBranchCodeEntity.branchName}</dd>
          <dt>
            <span id="notes">
              <Translate contentKey="gdiStagingApp.standardsBankBranchCode.notes">Notes</Translate>
            </span>
          </dt>
          <dd>{bankBranchCodeEntity.notes}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.standardsBankBranchCode.placeholder">Placeholder</Translate>
          </dt>
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
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/bank-branch-code/${bankBranchCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default BankBranchCodeDetail;
