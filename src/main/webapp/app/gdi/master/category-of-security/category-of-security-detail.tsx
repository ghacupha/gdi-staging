import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './category-of-security.reducer';

export const CategoryOfSecurityDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const categoryOfSecurityEntity = useAppSelector(state => state.categoryOfSecurity.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="categoryOfSecurityDetailsHeading">Category Of Security</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{categoryOfSecurityEntity.id}</dd>
          <dt>
            <span id="categoryOfSecurity">Category Of Security</span>
          </dt>
          <dd>{categoryOfSecurityEntity.categoryOfSecurity}</dd>
          <dt>
            <span id="categoryOfSecurityDetails">Category Of Security Details</span>
          </dt>
          <dd>{categoryOfSecurityEntity.categoryOfSecurityDetails}</dd>
          <dt>
            <span id="categoryOfSecurityDescription">Category Of Security Description</span>
          </dt>
          <dd>{categoryOfSecurityEntity.categoryOfSecurityDescription}</dd>
        </dl>
        <Button tag={Link} to="/category-of-security" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/category-of-security/${categoryOfSecurityEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CategoryOfSecurityDetail;
