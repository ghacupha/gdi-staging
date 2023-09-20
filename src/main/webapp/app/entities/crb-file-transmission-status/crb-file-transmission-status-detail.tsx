import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-file-transmission-status.reducer';

export const CrbFileTransmissionStatusDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbFileTransmissionStatusEntity = useAppSelector(state => state.crbFileTransmissionStatus.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbFileTransmissionStatusDetailsHeading">Crb File Transmission Status</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbFileTransmissionStatusEntity.id}</dd>
          <dt>
            <span id="submittedFileStatusTypeCode">Submitted File Status Type Code</span>
          </dt>
          <dd>{crbFileTransmissionStatusEntity.submittedFileStatusTypeCode}</dd>
          <dt>
            <span id="submittedFileStatusType">Submitted File Status Type</span>
          </dt>
          <dd>{crbFileTransmissionStatusEntity.submittedFileStatusType}</dd>
          <dt>
            <span id="submittedFileStatusTypeDescription">Submitted File Status Type Description</span>
          </dt>
          <dd>{crbFileTransmissionStatusEntity.submittedFileStatusTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/crb-file-transmission-status" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-file-transmission-status/${crbFileTransmissionStatusEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbFileTransmissionStatusDetail;
