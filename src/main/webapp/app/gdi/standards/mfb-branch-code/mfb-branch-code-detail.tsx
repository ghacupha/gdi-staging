import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './mfb-branch-code.reducer';

export const MfbBranchCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const mfbBranchCodeEntity = useAppSelector(state => state.mfbBranchCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="mfbBranchCodeDetailsHeading">
          <Translate contentKey="gdiStagingApp.mfbBranchCode.detail.title">MfbBranchCode</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{mfbBranchCodeEntity.id}</dd>
          <dt>
            <span id="bankCode">
              <Translate contentKey="gdiStagingApp.mfbBranchCode.bankCode">Bank Code</Translate>
            </span>
          </dt>
          <dd>{mfbBranchCodeEntity.bankCode}</dd>
          <dt>
            <span id="bankName">
              <Translate contentKey="gdiStagingApp.mfbBranchCode.bankName">Bank Name</Translate>
            </span>
          </dt>
          <dd>{mfbBranchCodeEntity.bankName}</dd>
          <dt>
            <span id="branchCode">
              <Translate contentKey="gdiStagingApp.mfbBranchCode.branchCode">Branch Code</Translate>
            </span>
          </dt>
          <dd>{mfbBranchCodeEntity.branchCode}</dd>
          <dt>
            <span id="branchName">
              <Translate contentKey="gdiStagingApp.mfbBranchCode.branchName">Branch Name</Translate>
            </span>
          </dt>
          <dd>{mfbBranchCodeEntity.branchName}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.mfbBranchCode.placeholder">Placeholder</Translate>
          </dt>
          <dd>
            {mfbBranchCodeEntity.placeholders
              ? mfbBranchCodeEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {mfbBranchCodeEntity.placeholders && i === mfbBranchCodeEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/mfb-branch-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/mfb-branch-code/${mfbBranchCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default MfbBranchCodeDetail;
