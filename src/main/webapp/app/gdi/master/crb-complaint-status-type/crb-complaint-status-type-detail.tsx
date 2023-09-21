import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-complaint-status-type.reducer';

export const CrbComplaintStatusTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbComplaintStatusTypeEntity = useAppSelector(state => state.crbComplaintStatusType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbComplaintStatusTypeDetailsHeading">Crb Complaint Status Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbComplaintStatusTypeEntity.id}</dd>
          <dt>
            <span id="complaintStatusTypeCode">Complaint Status Type Code</span>
          </dt>
          <dd>{crbComplaintStatusTypeEntity.complaintStatusTypeCode}</dd>
          <dt>
            <span id="complaintStatusType">Complaint Status Type</span>
          </dt>
          <dd>{crbComplaintStatusTypeEntity.complaintStatusType}</dd>
          <dt>
            <span id="complaintStatusDetails">Complaint Status Details</span>
          </dt>
          <dd>{crbComplaintStatusTypeEntity.complaintStatusDetails}</dd>
        </dl>
        <Button tag={Link} to="/crb-complaint-status-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-complaint-status-type/${crbComplaintStatusTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbComplaintStatusTypeDetail;
