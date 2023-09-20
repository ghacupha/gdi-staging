import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './currency-authenticity-flag.reducer';

export const CurrencyAuthenticityFlagDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const currencyAuthenticityFlagEntity = useAppSelector(state => state.currencyAuthenticityFlag.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="currencyAuthenticityFlagDetailsHeading">Currency Authenticity Flag</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{currencyAuthenticityFlagEntity.id}</dd>
          <dt>
            <span id="currencyAuthenticityFlag">Currency Authenticity Flag</span>
          </dt>
          <dd>{currencyAuthenticityFlagEntity.currencyAuthenticityFlag}</dd>
          <dt>
            <span id="currencyAuthenticityType">Currency Authenticity Type</span>
          </dt>
          <dd>{currencyAuthenticityFlagEntity.currencyAuthenticityType}</dd>
          <dt>
            <span id="currencyAuthenticityTypeDetails">Currency Authenticity Type Details</span>
          </dt>
          <dd>{currencyAuthenticityFlagEntity.currencyAuthenticityTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/currency-authenticity-flag" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/currency-authenticity-flag/${currencyAuthenticityFlagEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CurrencyAuthenticityFlagDetail;
