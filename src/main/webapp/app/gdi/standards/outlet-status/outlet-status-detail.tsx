import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './outlet-status.reducer';

export const OutletStatusDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const outletStatusEntity = useAppSelector(state => state.outletStatus.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="outletStatusDetailsHeading">
          <Translate contentKey="gdiStagingApp.outletStatus.detail.title">OutletStatus</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{outletStatusEntity.id}</dd>
          <dt>
            <span id="branchStatusTypeCode">
              <Translate contentKey="gdiStagingApp.outletStatus.branchStatusTypeCode">Branch Status Type Code</Translate>
            </span>
          </dt>
          <dd>{outletStatusEntity.branchStatusTypeCode}</dd>
          <dt>
            <span id="branchStatusType">
              <Translate contentKey="gdiStagingApp.outletStatus.branchStatusType">Branch Status Type</Translate>
            </span>
          </dt>
          <dd>{outletStatusEntity.branchStatusType}</dd>
          <dt>
            <span id="branchStatusTypeDescription">
              <Translate contentKey="gdiStagingApp.outletStatus.branchStatusTypeDescription">Branch Status Type Description</Translate>
            </span>
          </dt>
          <dd>{outletStatusEntity.branchStatusTypeDescription}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.outletStatus.placeholder">Placeholder</Translate>
          </dt>
          <dd>
            {outletStatusEntity.placeholders
              ? outletStatusEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {outletStatusEntity.placeholders && i === outletStatusEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/outlet-status" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/outlet-status/${outletStatusEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default OutletStatusDetail;
