import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './iso-currency-code.reducer';

export const IsoCurrencyCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const isoCurrencyCodeEntity = useAppSelector(state => state.isoCurrencyCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="isoCurrencyCodeDetailsHeading">Iso Currency Code</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{isoCurrencyCodeEntity.id}</dd>
          <dt>
            <span id="alphabeticCode">Alphabetic Code</span>
          </dt>
          <dd>{isoCurrencyCodeEntity.alphabeticCode}</dd>
          <dt>
            <span id="numericCode">Numeric Code</span>
          </dt>
          <dd>{isoCurrencyCodeEntity.numericCode}</dd>
          <dt>
            <span id="minorUnit">Minor Unit</span>
          </dt>
          <dd>{isoCurrencyCodeEntity.minorUnit}</dd>
          <dt>
            <span id="currency">Currency</span>
          </dt>
          <dd>{isoCurrencyCodeEntity.currency}</dd>
          <dt>
            <span id="country">Country</span>
          </dt>
          <dd>{isoCurrencyCodeEntity.country}</dd>
        </dl>
        <Button tag={Link} to="/iso-currency-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/iso-currency-code/${isoCurrencyCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default IsoCurrencyCodeDetail;
