import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-report-view-band.reducer';

export const CrbReportViewBandDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbReportViewBandEntity = useAppSelector(state => state.crbReportViewBand.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbReportViewBandDetailsHeading">Crb Report View Band</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbReportViewBandEntity.id}</dd>
          <dt>
            <span id="reportViewCode">Report View Code</span>
          </dt>
          <dd>{crbReportViewBandEntity.reportViewCode}</dd>
          <dt>
            <span id="reportViewCategory">Report View Category</span>
          </dt>
          <dd>{crbReportViewBandEntity.reportViewCategory}</dd>
          <dt>
            <span id="reportViewCategoryDescription">Report View Category Description</span>
          </dt>
          <dd>{crbReportViewBandEntity.reportViewCategoryDescription}</dd>
        </dl>
        <Button tag={Link} to="/crb-report-view-band" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-report-view-band/${crbReportViewBandEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbReportViewBandDetail;
