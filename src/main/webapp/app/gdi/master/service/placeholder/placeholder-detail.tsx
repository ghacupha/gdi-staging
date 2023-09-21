import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
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
        <h2 data-cy="placeholderDetailsHeading">Placeholder</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{placeholderEntity.id}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{placeholderEntity.description}</dd>
          <dt>
            <span id="token">Token</span>
          </dt>
          <dd>{placeholderEntity.token}</dd>
          <dt>Containing Placeholder</dt>
          <dd>{placeholderEntity.containingPlaceholder ? placeholderEntity.containingPlaceholder.description : ''}</dd>
        </dl>
        <Button tag={Link} to="/placeholder" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/placeholder/${placeholderEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PlaceholderDetail;
