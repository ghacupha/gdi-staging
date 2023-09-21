import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './card-fraud-incident-category.reducer';

export const CardFraudIncidentCategoryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const cardFraudIncidentCategoryEntity = useAppSelector(state => state.cardFraudIncidentCategory.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="cardFraudIncidentCategoryDetailsHeading">Card Fraud Incident Category</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{cardFraudIncidentCategoryEntity.id}</dd>
          <dt>
            <span id="cardFraudCategoryTypeCode">Card Fraud Category Type Code</span>
          </dt>
          <dd>{cardFraudIncidentCategoryEntity.cardFraudCategoryTypeCode}</dd>
          <dt>
            <span id="cardFraudCategoryType">Card Fraud Category Type</span>
          </dt>
          <dd>{cardFraudIncidentCategoryEntity.cardFraudCategoryType}</dd>
          <dt>
            <span id="cardFraudCategoryTypeDescription">Card Fraud Category Type Description</span>
          </dt>
          <dd>{cardFraudIncidentCategoryEntity.cardFraudCategoryTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/card-fraud-incident-category" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/card-fraud-incident-category/${cardFraudIncidentCategoryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CardFraudIncidentCategoryDetail;
