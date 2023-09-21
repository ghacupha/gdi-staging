import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './collateral-type.reducer';

export const CollateralTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const collateralTypeEntity = useAppSelector(state => state.collateralType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="collateralTypeDetailsHeading">Collateral Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{collateralTypeEntity.id}</dd>
          <dt>
            <span id="collateralTypeCode">Collateral Type Code</span>
          </dt>
          <dd>{collateralTypeEntity.collateralTypeCode}</dd>
          <dt>
            <span id="collateralType">Collateral Type</span>
          </dt>
          <dd>{collateralTypeEntity.collateralType}</dd>
          <dt>
            <span id="collateralTypeDescription">Collateral Type Description</span>
          </dt>
          <dd>{collateralTypeEntity.collateralTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/collateral-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/collateral-type/${collateralTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CollateralTypeDetail;
