import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './interest-calc-method.reducer';

export const InterestCalcMethodDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const interestCalcMethodEntity = useAppSelector(state => state.interestCalcMethod.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="interestCalcMethodDetailsHeading">Interest Calc Method</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{interestCalcMethodEntity.id}</dd>
          <dt>
            <span id="interestCalculationMethodCode">Interest Calculation Method Code</span>
          </dt>
          <dd>{interestCalcMethodEntity.interestCalculationMethodCode}</dd>
          <dt>
            <span id="interestCalculationMthodType">Interest Calculation Mthod Type</span>
          </dt>
          <dd>{interestCalcMethodEntity.interestCalculationMthodType}</dd>
          <dt>
            <span id="interestCalculationMethodDetails">Interest Calculation Method Details</span>
          </dt>
          <dd>{interestCalcMethodEntity.interestCalculationMethodDetails}</dd>
        </dl>
        <Button tag={Link} to="/interest-calc-method" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/interest-calc-method/${interestCalcMethodEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default InterestCalcMethodDetail;
