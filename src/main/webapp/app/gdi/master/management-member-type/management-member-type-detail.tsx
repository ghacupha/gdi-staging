import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './management-member-type.reducer';

export const ManagementMemberTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const managementMemberTypeEntity = useAppSelector(state => state.managementMemberType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="managementMemberTypeDetailsHeading">Management Member Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{managementMemberTypeEntity.id}</dd>
          <dt>
            <span id="managementMemberTypeCode">Management Member Type Code</span>
          </dt>
          <dd>{managementMemberTypeEntity.managementMemberTypeCode}</dd>
          <dt>
            <span id="managementMemberType">Management Member Type</span>
          </dt>
          <dd>{managementMemberTypeEntity.managementMemberType}</dd>
        </dl>
        <Button tag={Link} to="/management-member-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/management-member-type/${managementMemberTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ManagementMemberTypeDetail;
