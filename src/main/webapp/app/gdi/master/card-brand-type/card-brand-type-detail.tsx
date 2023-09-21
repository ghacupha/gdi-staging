import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './card-brand-type.reducer';

export const CardBrandTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const cardBrandTypeEntity = useAppSelector(state => state.cardBrandType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="cardBrandTypeDetailsHeading">Card Brand Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{cardBrandTypeEntity.id}</dd>
          <dt>
            <span id="cardBrandTypeCode">Card Brand Type Code</span>
          </dt>
          <dd>{cardBrandTypeEntity.cardBrandTypeCode}</dd>
          <dt>
            <span id="cardBrandType">Card Brand Type</span>
          </dt>
          <dd>{cardBrandTypeEntity.cardBrandType}</dd>
          <dt>
            <span id="cardBrandTypeDetails">Card Brand Type Details</span>
          </dt>
          <dd>{cardBrandTypeEntity.cardBrandTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/card-brand-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/card-brand-type/${cardBrandTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CardBrandTypeDetail;
