import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './academic-qualification.reducer';

export const AcademicQualificationDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const academicQualificationEntity = useAppSelector(state => state.academicQualification.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="academicQualificationDetailsHeading">Academic Qualification</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{academicQualificationEntity.id}</dd>
          <dt>
            <span id="academicQualificationsCode">Academic Qualifications Code</span>
          </dt>
          <dd>{academicQualificationEntity.academicQualificationsCode}</dd>
          <dt>
            <span id="academicQualificationType">Academic Qualification Type</span>
          </dt>
          <dd>{academicQualificationEntity.academicQualificationType}</dd>
          <dt>
            <span id="academicQualificationTypeDetail">Academic Qualification Type Detail</span>
          </dt>
          <dd>{academicQualificationEntity.academicQualificationTypeDetail}</dd>
        </dl>
        <Button tag={Link} to="/academic-qualification" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/academic-qualification/${academicQualificationEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AcademicQualificationDetail;
