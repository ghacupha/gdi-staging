import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './card-types.reducer';

export const CardTypesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const cardTypesEntity = useAppSelector(state => state.cardTypes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="cardTypesDetailsHeading">Card Types</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{cardTypesEntity.id}</dd>
          <dt>
            <span id="cardTypeCode">Card Type Code</span>
          </dt>
          <dd>{cardTypesEntity.cardTypeCode}</dd>
          <dt>
            <span id="cardType">Card Type</span>
          </dt>
          <dd>{cardTypesEntity.cardType}</dd>
          <dt>
            <span id="cardTypeDetails">Card Type Details</span>
          </dt>
          <dd>{cardTypesEntity.cardTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/card-types" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/card-types/${cardTypesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CardTypesDetail;
