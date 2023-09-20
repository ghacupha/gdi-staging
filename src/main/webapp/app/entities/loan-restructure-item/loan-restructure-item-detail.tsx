import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './loan-restructure-item.reducer';

export const LoanRestructureItemDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const loanRestructureItemEntity = useAppSelector(state => state.loanRestructureItem.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="loanRestructureItemDetailsHeading">Loan Restructure Item</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{loanRestructureItemEntity.id}</dd>
          <dt>
            <span id="loanRestructureItemCode">Loan Restructure Item Code</span>
          </dt>
          <dd>{loanRestructureItemEntity.loanRestructureItemCode}</dd>
          <dt>
            <span id="loanRestructureItemType">Loan Restructure Item Type</span>
          </dt>
          <dd>{loanRestructureItemEntity.loanRestructureItemType}</dd>
          <dt>
            <span id="loanRestructureItemDetails">Loan Restructure Item Details</span>
          </dt>
          <dd>{loanRestructureItemEntity.loanRestructureItemDetails}</dd>
        </dl>
        <Button tag={Link} to="/loan-restructure-item" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/loan-restructure-item/${loanRestructureItemEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default LoanRestructureItemDetail;
