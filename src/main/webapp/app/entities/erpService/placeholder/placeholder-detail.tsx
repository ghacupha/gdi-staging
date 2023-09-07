import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './placeholder.reducer';

export const PlaceholderDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const placeholderEntity = useAppSelector(state => state.placeholder.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="placeholderDetailsHeading">
          <Translate contentKey="gdiStagingApp.erpServicePlaceholder.detail.title">Placeholder</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{placeholderEntity.id}</dd>
          <dt>
            <span id="description">
              <Translate contentKey="gdiStagingApp.erpServicePlaceholder.description">Description</Translate>
            </span>
          </dt>
          <dd>{placeholderEntity.description}</dd>
          <dt>
            <span id="token">
              <Translate contentKey="gdiStagingApp.erpServicePlaceholder.token">Token</Translate>
            </span>
          </dt>
          <dd>{placeholderEntity.token}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.erpServicePlaceholder.containingPlaceholder">Containing Placeholder</Translate>
          </dt>
          <dd>{placeholderEntity.containingPlaceholder ? placeholderEntity.containingPlaceholder.description : ''}</dd>
        </dl>
        <Button tag={Link} to="/placeholder" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/placeholder/${placeholderEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default PlaceholderDetail;
