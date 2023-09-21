import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './counter-party-deal-type.reducer';

export const CounterPartyDealTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const counterPartyDealTypeEntity = useAppSelector(state => state.counterPartyDealType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="counterPartyDealTypeDetailsHeading">Counter Party Deal Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{counterPartyDealTypeEntity.id}</dd>
          <dt>
            <span id="counterpartyDealCode">Counterparty Deal Code</span>
          </dt>
          <dd>{counterPartyDealTypeEntity.counterpartyDealCode}</dd>
          <dt>
            <span id="counterpartyDealTypeDetails">Counterparty Deal Type Details</span>
          </dt>
          <dd>{counterPartyDealTypeEntity.counterpartyDealTypeDetails}</dd>
          <dt>
            <span id="counterpartyDealTypeDescription">Counterparty Deal Type Description</span>
          </dt>
          <dd>{counterPartyDealTypeEntity.counterpartyDealTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/counter-party-deal-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/counter-party-deal-type/${counterPartyDealTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CounterPartyDealTypeDetail;
