import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-submitting-institution-category.reducer';

export const CrbSubmittingInstitutionCategoryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbSubmittingInstitutionCategoryEntity = useAppSelector(state => state.crbSubmittingInstitutionCategory.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbSubmittingInstitutionCategoryDetailsHeading">Crb Submitting Institution Category</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbSubmittingInstitutionCategoryEntity.id}</dd>
          <dt>
            <span id="submittingInstitutionCategoryTypeCode">Submitting Institution Category Type Code</span>
          </dt>
          <dd>{crbSubmittingInstitutionCategoryEntity.submittingInstitutionCategoryTypeCode}</dd>
          <dt>
            <span id="submittingInstitutionCategoryType">Submitting Institution Category Type</span>
          </dt>
          <dd>{crbSubmittingInstitutionCategoryEntity.submittingInstitutionCategoryType}</dd>
          <dt>
            <span id="submittingInstitutionCategoryDetails">Submitting Institution Category Details</span>
          </dt>
          <dd>{crbSubmittingInstitutionCategoryEntity.submittingInstitutionCategoryDetails}</dd>
        </dl>
        <Button tag={Link} to="/crb-submitting-institution-category" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button
          tag={Link}
          to={`/crb-submitting-institution-category/${crbSubmittingInstitutionCategoryEntity.id}/edit`}
          replace
          color="primary"
        >
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbSubmittingInstitutionCategoryDetail;
