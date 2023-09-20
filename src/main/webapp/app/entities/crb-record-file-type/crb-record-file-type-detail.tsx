import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-record-file-type.reducer';

export const CrbRecordFileTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbRecordFileTypeEntity = useAppSelector(state => state.crbRecordFileType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbRecordFileTypeDetailsHeading">Crb Record File Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbRecordFileTypeEntity.id}</dd>
          <dt>
            <span id="recordFileTypeCode">Record File Type Code</span>
          </dt>
          <dd>{crbRecordFileTypeEntity.recordFileTypeCode}</dd>
          <dt>
            <span id="recordFileType">Record File Type</span>
          </dt>
          <dd>{crbRecordFileTypeEntity.recordFileType}</dd>
          <dt>
            <span id="recordFileTypeDetails">Record File Type Details</span>
          </dt>
          <dd>{crbRecordFileTypeEntity.recordFileTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/crb-record-file-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-record-file-type/${crbRecordFileTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbRecordFileTypeDetail;
