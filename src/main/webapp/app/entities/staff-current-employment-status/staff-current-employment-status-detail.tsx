import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './staff-current-employment-status.reducer';

export const StaffCurrentEmploymentStatusDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const staffCurrentEmploymentStatusEntity = useAppSelector(state => state.staffCurrentEmploymentStatus.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="staffCurrentEmploymentStatusDetailsHeading">Staff Current Employment Status</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{staffCurrentEmploymentStatusEntity.id}</dd>
          <dt>
            <span id="staffCurrentEmploymentStatusTypeCode">Staff Current Employment Status Type Code</span>
          </dt>
          <dd>{staffCurrentEmploymentStatusEntity.staffCurrentEmploymentStatusTypeCode}</dd>
          <dt>
            <span id="staffCurrentEmploymentStatusType">Staff Current Employment Status Type</span>
          </dt>
          <dd>{staffCurrentEmploymentStatusEntity.staffCurrentEmploymentStatusType}</dd>
          <dt>
            <span id="staffCurrentEmploymentStatusTypeDetails">Staff Current Employment Status Type Details</span>
          </dt>
          <dd>{staffCurrentEmploymentStatusEntity.staffCurrentEmploymentStatusTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/staff-current-employment-status" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/staff-current-employment-status/${staffCurrentEmploymentStatusEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default StaffCurrentEmploymentStatusDetail;
