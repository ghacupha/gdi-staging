import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-product-service-fee-type.reducer';

export const CrbProductServiceFeeTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbProductServiceFeeTypeEntity = useAppSelector(state => state.crbProductServiceFeeType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbProductServiceFeeTypeDetailsHeading">Crb Product Service Fee Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbProductServiceFeeTypeEntity.id}</dd>
          <dt>
            <span id="chargeTypeCode">Charge Type Code</span>
          </dt>
          <dd>{crbProductServiceFeeTypeEntity.chargeTypeCode}</dd>
          <dt>
            <span id="chargeTypeDescription">Charge Type Description</span>
          </dt>
          <dd>{crbProductServiceFeeTypeEntity.chargeTypeDescription}</dd>
          <dt>
            <span id="chargeTypeCategory">Charge Type Category</span>
          </dt>
          <dd>{crbProductServiceFeeTypeEntity.chargeTypeCategory}</dd>
        </dl>
        <Button tag={Link} to="/crb-product-service-fee-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-product-service-fee-type/${crbProductServiceFeeTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbProductServiceFeeTypeDetail;
