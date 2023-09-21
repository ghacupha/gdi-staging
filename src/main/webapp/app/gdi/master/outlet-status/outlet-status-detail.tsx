import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
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
        <h2 data-cy="outletStatusDetailsHeading">Outlet Status</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{outletStatusEntity.id}</dd>
          <dt>
            <span id="branchStatusTypeCode">Branch Status Type Code</span>
          </dt>
          <dd>{outletStatusEntity.branchStatusTypeCode}</dd>
          <dt>
            <span id="branchStatusType">Branch Status Type</span>
          </dt>
          <dd>{outletStatusEntity.branchStatusType}</dd>
          <dt>
            <span id="branchStatusTypeDescription">Branch Status Type Description</span>
          </dt>
          <dd>{outletStatusEntity.branchStatusTypeDescription}</dd>
          <dt>Placeholder</dt>
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
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/outlet-status/${outletStatusEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default OutletStatusDetail;
