import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './customer-complaint-status-type.reducer';

export const CustomerComplaintStatusTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const customerComplaintStatusTypeEntity = useAppSelector(state => state.customerComplaintStatusType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="customerComplaintStatusTypeDetailsHeading">Customer Complaint Status Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{customerComplaintStatusTypeEntity.id}</dd>
          <dt>
            <span id="customerComplaintStatusTypeCode">Customer Complaint Status Type Code</span>
          </dt>
          <dd>{customerComplaintStatusTypeEntity.customerComplaintStatusTypeCode}</dd>
          <dt>
            <span id="customerComplaintStatusType">Customer Complaint Status Type</span>
          </dt>
          <dd>{customerComplaintStatusTypeEntity.customerComplaintStatusType}</dd>
          <dt>
            <span id="customerComplaintStatusTypeDetails">Customer Complaint Status Type Details</span>
          </dt>
          <dd>{customerComplaintStatusTypeEntity.customerComplaintStatusTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/customer-complaint-status-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/customer-complaint-status-type/${customerComplaintStatusTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CustomerComplaintStatusTypeDetail;
