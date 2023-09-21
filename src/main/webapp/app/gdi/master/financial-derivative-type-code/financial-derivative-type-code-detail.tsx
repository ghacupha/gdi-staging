import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './financial-derivative-type-code.reducer';

export const FinancialDerivativeTypeCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const financialDerivativeTypeCodeEntity = useAppSelector(state => state.financialDerivativeTypeCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="financialDerivativeTypeCodeDetailsHeading">Financial Derivative Type Code</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{financialDerivativeTypeCodeEntity.id}</dd>
          <dt>
            <span id="financialDerivativeTypeCode">Financial Derivative Type Code</span>
          </dt>
          <dd>{financialDerivativeTypeCodeEntity.financialDerivativeTypeCode}</dd>
          <dt>
            <span id="financialDerivativeType">Financial Derivative Type</span>
          </dt>
          <dd>{financialDerivativeTypeCodeEntity.financialDerivativeType}</dd>
          <dt>
            <span id="financialDerivativeTypeDetails">Financial Derivative Type Details</span>
          </dt>
          <dd>{financialDerivativeTypeCodeEntity.financialDerivativeTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/financial-derivative-type-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/financial-derivative-type-code/${financialDerivativeTypeCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default FinancialDerivativeTypeCodeDetail;
