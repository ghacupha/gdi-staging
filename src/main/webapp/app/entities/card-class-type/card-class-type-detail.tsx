import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './card-class-type.reducer';

export const CardClassTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const cardClassTypeEntity = useAppSelector(state => state.cardClassType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="cardClassTypeDetailsHeading">Card Class Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{cardClassTypeEntity.id}</dd>
          <dt>
            <span id="cardClassTypeCode">Card Class Type Code</span>
          </dt>
          <dd>{cardClassTypeEntity.cardClassTypeCode}</dd>
          <dt>
            <span id="cardClassType">Card Class Type</span>
          </dt>
          <dd>{cardClassTypeEntity.cardClassType}</dd>
          <dt>
            <span id="cardClassDetails">Card Class Details</span>
          </dt>
          <dd>{cardClassTypeEntity.cardClassDetails}</dd>
        </dl>
        <Button tag={Link} to="/card-class-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/card-class-type/${cardClassTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CardClassTypeDetail;
