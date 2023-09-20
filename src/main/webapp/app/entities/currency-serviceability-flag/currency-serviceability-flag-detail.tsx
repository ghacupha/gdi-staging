import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './currency-serviceability-flag.reducer';

export const CurrencyServiceabilityFlagDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const currencyServiceabilityFlagEntity = useAppSelector(state => state.currencyServiceabilityFlag.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="currencyServiceabilityFlagDetailsHeading">Currency Serviceability Flag</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{currencyServiceabilityFlagEntity.id}</dd>
          <dt>
            <span id="currencyServiceabilityFlag">Currency Serviceability Flag</span>
          </dt>
          <dd>{currencyServiceabilityFlagEntity.currencyServiceabilityFlag}</dd>
          <dt>
            <span id="currencyServiceability">Currency Serviceability</span>
          </dt>
          <dd>{currencyServiceabilityFlagEntity.currencyServiceability}</dd>
          <dt>
            <span id="currencyServiceabilityFlagDetails">Currency Serviceability Flag Details</span>
          </dt>
          <dd>{currencyServiceabilityFlagEntity.currencyServiceabilityFlagDetails}</dd>
        </dl>
        <Button tag={Link} to="/currency-serviceability-flag" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/currency-serviceability-flag/${currencyServiceabilityFlagEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CurrencyServiceabilityFlagDetail;
