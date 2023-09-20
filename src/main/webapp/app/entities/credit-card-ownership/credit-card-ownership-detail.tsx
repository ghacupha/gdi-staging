import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './credit-card-ownership.reducer';

export const CreditCardOwnershipDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const creditCardOwnershipEntity = useAppSelector(state => state.creditCardOwnership.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="creditCardOwnershipDetailsHeading">Credit Card Ownership</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{creditCardOwnershipEntity.id}</dd>
          <dt>
            <span id="creditCardOwnershipCategoryCode">Credit Card Ownership Category Code</span>
          </dt>
          <dd>{creditCardOwnershipEntity.creditCardOwnershipCategoryCode}</dd>
          <dt>
            <span id="creditCardOwnershipCategoryType">Credit Card Ownership Category Type</span>
          </dt>
          <dd>{creditCardOwnershipEntity.creditCardOwnershipCategoryType}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{creditCardOwnershipEntity.description}</dd>
        </dl>
        <Button tag={Link} to="/credit-card-ownership" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/credit-card-ownership/${creditCardOwnershipEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CreditCardOwnershipDetail;
