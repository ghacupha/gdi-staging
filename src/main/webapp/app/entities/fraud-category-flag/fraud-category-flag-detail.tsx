import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './fraud-category-flag.reducer';

export const FraudCategoryFlagDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const fraudCategoryFlagEntity = useAppSelector(state => state.fraudCategoryFlag.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fraudCategoryFlagDetailsHeading">Fraud Category Flag</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{fraudCategoryFlagEntity.id}</dd>
          <dt>
            <span id="fraudCategoryFlag">Fraud Category Flag</span>
          </dt>
          <dd>{fraudCategoryFlagEntity.fraudCategoryFlag}</dd>
          <dt>
            <span id="fraudCategoryTypeDetails">Fraud Category Type Details</span>
          </dt>
          <dd>{fraudCategoryFlagEntity.fraudCategoryTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/fraud-category-flag" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/fraud-category-flag/${fraudCategoryFlagEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default FraudCategoryFlagDetail;
