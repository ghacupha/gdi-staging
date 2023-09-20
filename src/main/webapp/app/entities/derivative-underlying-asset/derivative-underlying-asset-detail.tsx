import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './derivative-underlying-asset.reducer';

export const DerivativeUnderlyingAssetDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const derivativeUnderlyingAssetEntity = useAppSelector(state => state.derivativeUnderlyingAsset.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="derivativeUnderlyingAssetDetailsHeading">Derivative Underlying Asset</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{derivativeUnderlyingAssetEntity.id}</dd>
          <dt>
            <span id="derivativeUnderlyingAssetTypeCode">Derivative Underlying Asset Type Code</span>
          </dt>
          <dd>{derivativeUnderlyingAssetEntity.derivativeUnderlyingAssetTypeCode}</dd>
          <dt>
            <span id="financialDerivativeUnderlyingAssetType">Financial Derivative Underlying Asset Type</span>
          </dt>
          <dd>{derivativeUnderlyingAssetEntity.financialDerivativeUnderlyingAssetType}</dd>
          <dt>
            <span id="derivativeUnderlyingAssetTypeDetails">Derivative Underlying Asset Type Details</span>
          </dt>
          <dd>{derivativeUnderlyingAssetEntity.derivativeUnderlyingAssetTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/derivative-underlying-asset" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/derivative-underlying-asset/${derivativeUnderlyingAssetEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default DerivativeUnderlyingAssetDetail;
