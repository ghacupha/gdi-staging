import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-customer-type.reducer';

export const CrbCustomerTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbCustomerTypeEntity = useAppSelector(state => state.crbCustomerType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbCustomerTypeDetailsHeading">Crb Customer Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbCustomerTypeEntity.id}</dd>
          <dt>
            <span id="customerTypeCode">Customer Type Code</span>
          </dt>
          <dd>{crbCustomerTypeEntity.customerTypeCode}</dd>
          <dt>
            <span id="customerType">Customer Type</span>
          </dt>
          <dd>{crbCustomerTypeEntity.customerType}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{crbCustomerTypeEntity.description}</dd>
        </dl>
        <Button tag={Link} to="/crb-customer-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-customer-type/${crbCustomerTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbCustomerTypeDetail;
