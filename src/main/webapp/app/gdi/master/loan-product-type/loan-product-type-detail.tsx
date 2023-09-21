import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './loan-product-type.reducer';

export const LoanProductTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const loanProductTypeEntity = useAppSelector(state => state.loanProductType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="loanProductTypeDetailsHeading">Loan Product Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{loanProductTypeEntity.id}</dd>
          <dt>
            <span id="productCode">Product Code</span>
          </dt>
          <dd>{loanProductTypeEntity.productCode}</dd>
          <dt>
            <span id="productType">Product Type</span>
          </dt>
          <dd>{loanProductTypeEntity.productType}</dd>
          <dt>
            <span id="productTypeDescription">Product Type Description</span>
          </dt>
          <dd>{loanProductTypeEntity.productTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/loan-product-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/loan-product-type/${loanProductTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default LoanProductTypeDetail;
