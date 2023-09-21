import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './customer-type.reducer';

export const CustomerTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const customerTypeEntity = useAppSelector(state => state.customerType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="customerTypeDetailsHeading">Customer Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{customerTypeEntity.id}</dd>
          <dt>
            <span id="customerTypeCode">Customer Type Code</span>
          </dt>
          <dd>{customerTypeEntity.customerTypeCode}</dd>
          <dt>
            <span id="customerType">Customer Type</span>
          </dt>
          <dd>{customerTypeEntity.customerType}</dd>
          <dt>
            <span id="customerTypeDescription">Customer Type Description</span>
          </dt>
          <dd>{customerTypeEntity.customerTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/customer-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/customer-type/${customerTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CustomerTypeDetail;
