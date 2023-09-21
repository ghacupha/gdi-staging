import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './card-status-flag.reducer';

export const CardStatusFlagDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const cardStatusFlagEntity = useAppSelector(state => state.cardStatusFlag.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="cardStatusFlagDetailsHeading">Card Status Flag</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{cardStatusFlagEntity.id}</dd>
          <dt>
            <span id="cardStatusFlag">Card Status Flag</span>
          </dt>
          <dd>{cardStatusFlagEntity.cardStatusFlag}</dd>
          <dt>
            <span id="cardStatusFlagDescription">Card Status Flag Description</span>
          </dt>
          <dd>{cardStatusFlagEntity.cardStatusFlagDescription}</dd>
          <dt>
            <span id="cardStatusFlagDetails">Card Status Flag Details</span>
          </dt>
          <dd>{cardStatusFlagEntity.cardStatusFlagDetails}</dd>
        </dl>
        <Button tag={Link} to="/card-status-flag" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/card-status-flag/${cardStatusFlagEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CardStatusFlagDetail;
