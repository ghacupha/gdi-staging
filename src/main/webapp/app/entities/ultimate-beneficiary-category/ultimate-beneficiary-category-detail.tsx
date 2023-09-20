import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './ultimate-beneficiary-category.reducer';

export const UltimateBeneficiaryCategoryDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const ultimateBeneficiaryCategoryEntity = useAppSelector(state => state.ultimateBeneficiaryCategory.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="ultimateBeneficiaryCategoryDetailsHeading">Ultimate Beneficiary Category</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{ultimateBeneficiaryCategoryEntity.id}</dd>
          <dt>
            <span id="ultimateBeneficiaryCategoryTypeCode">Ultimate Beneficiary Category Type Code</span>
          </dt>
          <dd>{ultimateBeneficiaryCategoryEntity.ultimateBeneficiaryCategoryTypeCode}</dd>
          <dt>
            <span id="ultimateBeneficiaryType">Ultimate Beneficiary Type</span>
          </dt>
          <dd>{ultimateBeneficiaryCategoryEntity.ultimateBeneficiaryType}</dd>
          <dt>
            <span id="ultimateBeneficiaryCategoryTypeDetails">Ultimate Beneficiary Category Type Details</span>
          </dt>
          <dd>{ultimateBeneficiaryCategoryEntity.ultimateBeneficiaryCategoryTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/ultimate-beneficiary-category" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/ultimate-beneficiary-category/${ultimateBeneficiaryCategoryEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UltimateBeneficiaryCategoryDetail;
