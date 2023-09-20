import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './professional-qualification.reducer';

export const ProfessionalQualificationDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const professionalQualificationEntity = useAppSelector(state => state.professionalQualification.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="professionalQualificationDetailsHeading">Professional Qualification</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{professionalQualificationEntity.id}</dd>
          <dt>
            <span id="professionalQualificationsCode">Professional Qualifications Code</span>
          </dt>
          <dd>{professionalQualificationEntity.professionalQualificationsCode}</dd>
          <dt>
            <span id="professionalQualificationsType">Professional Qualifications Type</span>
          </dt>
          <dd>{professionalQualificationEntity.professionalQualificationsType}</dd>
          <dt>
            <span id="professionalQualificationsDetails">Professional Qualifications Details</span>
          </dt>
          <dd>{professionalQualificationEntity.professionalQualificationsDetails}</dd>
        </dl>
        <Button tag={Link} to="/professional-qualification" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/professional-qualification/${professionalQualificationEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProfessionalQualificationDetail;
