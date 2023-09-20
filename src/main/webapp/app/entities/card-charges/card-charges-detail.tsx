import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './card-charges.reducer';

export const CardChargesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const cardChargesEntity = useAppSelector(state => state.cardCharges.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="cardChargesDetailsHeading">Card Charges</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{cardChargesEntity.id}</dd>
          <dt>
            <span id="cardChargeType">Card Charge Type</span>
          </dt>
          <dd>{cardChargesEntity.cardChargeType}</dd>
          <dt>
            <span id="cardChargeTypeName">Card Charge Type Name</span>
          </dt>
          <dd>{cardChargesEntity.cardChargeTypeName}</dd>
          <dt>
            <span id="cardChargeDetails">Card Charge Details</span>
          </dt>
          <dd>{cardChargesEntity.cardChargeDetails}</dd>
        </dl>
        <Button tag={Link} to="/card-charges" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/card-charges/${cardChargesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CardChargesDetail;
