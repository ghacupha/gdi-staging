import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-report-request-reasons.reducer';

export const CrbReportRequestReasonsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbReportRequestReasonsEntity = useAppSelector(state => state.crbReportRequestReasons.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbReportRequestReasonsDetailsHeading">Crb Report Request Reasons</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbReportRequestReasonsEntity.id}</dd>
          <dt>
            <span id="creditReportRequestReasonTypeCode">Credit Report Request Reason Type Code</span>
          </dt>
          <dd>{crbReportRequestReasonsEntity.creditReportRequestReasonTypeCode}</dd>
          <dt>
            <span id="creditReportRequestReasonType">Credit Report Request Reason Type</span>
          </dt>
          <dd>{crbReportRequestReasonsEntity.creditReportRequestReasonType}</dd>
          <dt>
            <span id="creditReportRequestDetails">Credit Report Request Details</span>
          </dt>
          <dd>{crbReportRequestReasonsEntity.creditReportRequestDetails}</dd>
        </dl>
        <Button tag={Link} to="/crb-report-request-reasons" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-report-request-reasons/${crbReportRequestReasonsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbReportRequestReasonsDetail;
