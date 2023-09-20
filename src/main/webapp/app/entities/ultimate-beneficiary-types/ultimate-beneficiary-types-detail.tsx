import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './ultimate-beneficiary-types.reducer';

export const UltimateBeneficiaryTypesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const ultimateBeneficiaryTypesEntity = useAppSelector(state => state.ultimateBeneficiaryTypes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="ultimateBeneficiaryTypesDetailsHeading">Ultimate Beneficiary Types</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{ultimateBeneficiaryTypesEntity.id}</dd>
          <dt>
            <span id="ultimateBeneficiaryTypeCode">Ultimate Beneficiary Type Code</span>
          </dt>
          <dd>{ultimateBeneficiaryTypesEntity.ultimateBeneficiaryTypeCode}</dd>
          <dt>
            <span id="ultimateBeneficiaryType">Ultimate Beneficiary Type</span>
          </dt>
          <dd>{ultimateBeneficiaryTypesEntity.ultimateBeneficiaryType}</dd>
          <dt>
            <span id="ultimateBeneficiaryTypeDetails">Ultimate Beneficiary Type Details</span>
          </dt>
          <dd>{ultimateBeneficiaryTypesEntity.ultimateBeneficiaryTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/ultimate-beneficiary-types" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/ultimate-beneficiary-types/${ultimateBeneficiaryTypesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default UltimateBeneficiaryTypesDetail;
