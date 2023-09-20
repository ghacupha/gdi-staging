import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './account-status-type.reducer';

export const AccountStatusTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const accountStatusTypeEntity = useAppSelector(state => state.accountStatusType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="accountStatusTypeDetailsHeading">Account Status Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{accountStatusTypeEntity.id}</dd>
          <dt>
            <span id="accountStatusCode">Account Status Code</span>
          </dt>
          <dd>{accountStatusTypeEntity.accountStatusCode}</dd>
          <dt>
            <span id="accountStatusType">Account Status Type</span>
          </dt>
          <dd>{accountStatusTypeEntity.accountStatusType}</dd>
          <dt>
            <span id="accountStatusDescription">Account Status Description</span>
          </dt>
          <dd>{accountStatusTypeEntity.accountStatusDescription}</dd>
        </dl>
        <Button tag={Link} to="/account-status-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/account-status-type/${accountStatusTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AccountStatusTypeDetail;
