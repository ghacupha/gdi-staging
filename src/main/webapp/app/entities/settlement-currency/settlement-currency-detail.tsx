import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './settlement-currency.reducer';

export const SettlementCurrencyDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const settlementCurrencyEntity = useAppSelector(state => state.settlementCurrency.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="settlementCurrencyDetailsHeading">Settlement Currency</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{settlementCurrencyEntity.id}</dd>
          <dt>
            <span id="iso4217CurrencyCode">Iso 4217 Currency Code</span>
          </dt>
          <dd>{settlementCurrencyEntity.iso4217CurrencyCode}</dd>
          <dt>
            <span id="currencyName">Currency Name</span>
          </dt>
          <dd>{settlementCurrencyEntity.currencyName}</dd>
          <dt>
            <span id="country">Country</span>
          </dt>
          <dd>{settlementCurrencyEntity.country}</dd>
          <dt>
            <span id="numericCode">Numeric Code</span>
          </dt>
          <dd>{settlementCurrencyEntity.numericCode}</dd>
          <dt>
            <span id="minorUnit">Minor Unit</span>
          </dt>
          <dd>{settlementCurrencyEntity.minorUnit}</dd>
          <dt>
            <span id="fileUploadToken">File Upload Token</span>
          </dt>
          <dd>{settlementCurrencyEntity.fileUploadToken}</dd>
          <dt>
            <span id="compilationToken">Compilation Token</span>
          </dt>
          <dd>{settlementCurrencyEntity.compilationToken}</dd>
          <dt>Placeholder</dt>
          <dd>
            {settlementCurrencyEntity.placeholders
              ? settlementCurrencyEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {settlementCurrencyEntity.placeholders && i === settlementCurrencyEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/settlement-currency" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/settlement-currency/${settlementCurrencyEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SettlementCurrencyDetail;
