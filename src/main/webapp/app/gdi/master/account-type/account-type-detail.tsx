import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './account-type.reducer';

export const AccountTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const accountTypeEntity = useAppSelector(state => state.accountType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="accountTypeDetailsHeading">Account Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{accountTypeEntity.id}</dd>
          <dt>
            <span id="accountTypeCode">Account Type Code</span>
          </dt>
          <dd>{accountTypeEntity.accountTypeCode}</dd>
          <dt>
            <span id="accountType">Account Type</span>
          </dt>
          <dd>{accountTypeEntity.accountType}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{accountTypeEntity.description}</dd>
        </dl>
        <Button tag={Link} to="/account-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/account-type/${accountTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AccountTypeDetail;
