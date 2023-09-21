import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './product-type.reducer';

export const ProductTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const productTypeEntity = useAppSelector(state => state.productType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="productTypeDetailsHeading">Product Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{productTypeEntity.id}</dd>
          <dt>
            <span id="productCode">Product Code</span>
          </dt>
          <dd>{productTypeEntity.productCode}</dd>
          <dt>
            <span id="productType">Product Type</span>
          </dt>
          <dd>{productTypeEntity.productType}</dd>
          <dt>
            <span id="productTypeDescription">Product Type Description</span>
          </dt>
          <dd>{productTypeEntity.productTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/product-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/product-type/${productTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ProductTypeDetail;
