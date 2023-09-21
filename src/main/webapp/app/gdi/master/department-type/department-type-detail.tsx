import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './department-type.reducer';

export const DepartmentTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const departmentTypeEntity = useAppSelector(state => state.departmentType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="departmentTypeDetailsHeading">Department Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{departmentTypeEntity.id}</dd>
          <dt>
            <span id="departmentTypeCode">Department Type Code</span>
          </dt>
          <dd>{departmentTypeEntity.departmentTypeCode}</dd>
          <dt>
            <span id="departmentType">Department Type</span>
          </dt>
          <dd>{departmentTypeEntity.departmentType}</dd>
          <dt>
            <span id="departmentTypeDetails">Department Type Details</span>
          </dt>
          <dd>{departmentTypeEntity.departmentTypeDetails}</dd>
          <dt>Placeholder</dt>
          <dd>
            {departmentTypeEntity.placeholders
              ? departmentTypeEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.id}</a>
                    {departmentTypeEntity.placeholders && i === departmentTypeEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/department-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/department-type/${departmentTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default DepartmentTypeDetail;
