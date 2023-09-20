import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './card-performance-flag.reducer';

export const CardPerformanceFlagDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const cardPerformanceFlagEntity = useAppSelector(state => state.cardPerformanceFlag.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="cardPerformanceFlagDetailsHeading">Card Performance Flag</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{cardPerformanceFlagEntity.id}</dd>
          <dt>
            <span id="cardPerformanceFlag">Card Performance Flag</span>
          </dt>
          <dd>{cardPerformanceFlagEntity.cardPerformanceFlag}</dd>
          <dt>
            <span id="cardPerformanceFlagDescription">Card Performance Flag Description</span>
          </dt>
          <dd>{cardPerformanceFlagEntity.cardPerformanceFlagDescription}</dd>
          <dt>
            <span id="cardPerformanceFlagDetails">Card Performance Flag Details</span>
          </dt>
          <dd>{cardPerformanceFlagEntity.cardPerformanceFlagDetails}</dd>
        </dl>
        <Button tag={Link} to="/card-performance-flag" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/card-performance-flag/${cardPerformanceFlagEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CardPerformanceFlagDetail;
