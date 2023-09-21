import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './nature-of-customer-complaints.reducer';

export const NatureOfCustomerComplaintsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const natureOfCustomerComplaintsEntity = useAppSelector(state => state.natureOfCustomerComplaints.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="natureOfCustomerComplaintsDetailsHeading">Nature Of Customer Complaints</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{natureOfCustomerComplaintsEntity.id}</dd>
          <dt>
            <span id="natureOfComplaintTypeCode">Nature Of Complaint Type Code</span>
          </dt>
          <dd>{natureOfCustomerComplaintsEntity.natureOfComplaintTypeCode}</dd>
          <dt>
            <span id="natureOfComplaintType">Nature Of Complaint Type</span>
          </dt>
          <dd>{natureOfCustomerComplaintsEntity.natureOfComplaintType}</dd>
          <dt>
            <span id="natureOfComplaintTypeDetails">Nature Of Complaint Type Details</span>
          </dt>
          <dd>{natureOfCustomerComplaintsEntity.natureOfComplaintTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/nature-of-customer-complaints" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/nature-of-customer-complaints/${natureOfCustomerComplaintsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default NatureOfCustomerComplaintsDetail;
