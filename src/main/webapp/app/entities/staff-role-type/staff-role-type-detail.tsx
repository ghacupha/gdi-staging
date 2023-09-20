import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './staff-role-type.reducer';

export const StaffRoleTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const staffRoleTypeEntity = useAppSelector(state => state.staffRoleType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="staffRoleTypeDetailsHeading">Staff Role Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{staffRoleTypeEntity.id}</dd>
          <dt>
            <span id="staffRoleTypeCode">Staff Role Type Code</span>
          </dt>
          <dd>{staffRoleTypeEntity.staffRoleTypeCode}</dd>
          <dt>
            <span id="staffRoleType">Staff Role Type</span>
          </dt>
          <dd>{staffRoleTypeEntity.staffRoleType}</dd>
          <dt>
            <span id="staffRoleTypeDetails">Staff Role Type Details</span>
          </dt>
          <dd>{staffRoleTypeEntity.staffRoleTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/staff-role-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/staff-role-type/${staffRoleTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default StaffRoleTypeDetail;
