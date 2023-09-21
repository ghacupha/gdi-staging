import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './account-ownership-type.reducer';

export const AccountOwnershipTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const accountOwnershipTypeEntity = useAppSelector(state => state.accountOwnershipType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="accountOwnershipTypeDetailsHeading">Account Ownership Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{accountOwnershipTypeEntity.id}</dd>
          <dt>
            <span id="accountOwnershipTypeCode">Account Ownership Type Code</span>
          </dt>
          <dd>{accountOwnershipTypeEntity.accountOwnershipTypeCode}</dd>
          <dt>
            <span id="accountOwnershipType">Account Ownership Type</span>
          </dt>
          <dd>{accountOwnershipTypeEntity.accountOwnershipType}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{accountOwnershipTypeEntity.description}</dd>
        </dl>
        <Button tag={Link} to="/account-ownership-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/account-ownership-type/${accountOwnershipTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AccountOwnershipTypeDetail;
