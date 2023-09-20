import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './counter-party-category.reducer';

export const CounterPartyCategoryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const counterPartyCategoryEntity = useAppSelector(state => state.counterPartyCategory.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="counterPartyCategoryDetailsHeading">Counter Party Category</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{counterPartyCategoryEntity.id}</dd>
          <dt>
            <span id="counterpartyCategoryCode">Counterparty Category Code</span>
          </dt>
          <dd>{counterPartyCategoryEntity.counterpartyCategoryCode}</dd>
          <dt>
            <span id="counterpartyCategoryCodeDetails">Counterparty Category Code Details</span>
          </dt>
          <dd>{counterPartyCategoryEntity.counterpartyCategoryCodeDetails}</dd>
          <dt>
            <span id="counterpartyCategoryDescription">Counterparty Category Description</span>
          </dt>
          <dd>{counterPartyCategoryEntity.counterpartyCategoryDescription}</dd>
        </dl>
        <Button tag={Link} to="/counter-party-category" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/counter-party-category/${counterPartyCategoryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CounterPartyCategoryDetail;
