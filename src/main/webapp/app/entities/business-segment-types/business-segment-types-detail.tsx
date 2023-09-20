import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './business-segment-types.reducer';

export const BusinessSegmentTypesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const businessSegmentTypesEntity = useAppSelector(state => state.businessSegmentTypes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="businessSegmentTypesDetailsHeading">Business Segment Types</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{businessSegmentTypesEntity.id}</dd>
          <dt>
            <span id="businessEconomicSegmentCode">Business Economic Segment Code</span>
          </dt>
          <dd>{businessSegmentTypesEntity.businessEconomicSegmentCode}</dd>
          <dt>
            <span id="businessEconomicSegment">Business Economic Segment</span>
          </dt>
          <dd>{businessSegmentTypesEntity.businessEconomicSegment}</dd>
          <dt>
            <span id="details">Details</span>
          </dt>
          <dd>{businessSegmentTypesEntity.details}</dd>
        </dl>
        <Button tag={Link} to="/business-segment-types" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/business-segment-types/${businessSegmentTypesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BusinessSegmentTypesDetail;
