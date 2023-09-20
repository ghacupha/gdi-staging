import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-complaint-type.reducer';

export const CrbComplaintTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbComplaintTypeEntity = useAppSelector(state => state.crbComplaintType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbComplaintTypeDetailsHeading">Crb Complaint Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbComplaintTypeEntity.id}</dd>
          <dt>
            <span id="complaintTypeCode">Complaint Type Code</span>
          </dt>
          <dd>{crbComplaintTypeEntity.complaintTypeCode}</dd>
          <dt>
            <span id="complaintType">Complaint Type</span>
          </dt>
          <dd>{crbComplaintTypeEntity.complaintType}</dd>
          <dt>
            <span id="complaintTypeDetails">Complaint Type Details</span>
          </dt>
          <dd>{crbComplaintTypeEntity.complaintTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/crb-complaint-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-complaint-type/${crbComplaintTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbComplaintTypeDetail;
