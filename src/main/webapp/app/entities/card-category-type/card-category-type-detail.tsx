import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './card-category-type.reducer';

export const CardCategoryTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const cardCategoryTypeEntity = useAppSelector(state => state.cardCategoryType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="cardCategoryTypeDetailsHeading">Card Category Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{cardCategoryTypeEntity.id}</dd>
          <dt>
            <span id="cardCategoryFlag">Card Category Flag</span>
          </dt>
          <dd>{cardCategoryTypeEntity.cardCategoryFlag}</dd>
          <dt>
            <span id="cardCategoryDescription">Card Category Description</span>
          </dt>
          <dd>{cardCategoryTypeEntity.cardCategoryDescription}</dd>
          <dt>
            <span id="cardCategoryDetails">Card Category Details</span>
          </dt>
          <dd>{cardCategoryTypeEntity.cardCategoryDetails}</dd>
        </dl>
        <Button tag={Link} to="/card-category-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/card-category-type/${cardCategoryTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CardCategoryTypeDetail;
