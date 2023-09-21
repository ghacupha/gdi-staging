import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './kenyan-currency-denomination.reducer';

export const KenyanCurrencyDenominationDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const kenyanCurrencyDenominationEntity = useAppSelector(state => state.kenyanCurrencyDenomination.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="kenyanCurrencyDenominationDetailsHeading">Kenyan Currency Denomination</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{kenyanCurrencyDenominationEntity.id}</dd>
          <dt>
            <span id="currencyDenominationCode">Currency Denomination Code</span>
          </dt>
          <dd>{kenyanCurrencyDenominationEntity.currencyDenominationCode}</dd>
          <dt>
            <span id="currencyDenominationType">Currency Denomination Type</span>
          </dt>
          <dd>{kenyanCurrencyDenominationEntity.currencyDenominationType}</dd>
          <dt>
            <span id="currencyDenominationTypeDetails">Currency Denomination Type Details</span>
          </dt>
          <dd>{kenyanCurrencyDenominationEntity.currencyDenominationTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/kenyan-currency-denomination" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/kenyan-currency-denomination/${kenyanCurrencyDenominationEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default KenyanCurrencyDenominationDetail;
