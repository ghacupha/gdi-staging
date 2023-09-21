import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './counterparty-type.reducer';

export const CounterpartyTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const counterpartyTypeEntity = useAppSelector(state => state.counterpartyType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="counterpartyTypeDetailsHeading">Counterparty Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{counterpartyTypeEntity.id}</dd>
          <dt>
            <span id="counterpartyTypeCode">Counterparty Type Code</span>
          </dt>
          <dd>{counterpartyTypeEntity.counterpartyTypeCode}</dd>
          <dt>
            <span id="counterPartyType">Counter Party Type</span>
          </dt>
          <dd>{counterpartyTypeEntity.counterPartyType}</dd>
          <dt>
            <span id="counterpartyTypeDescription">Counterparty Type Description</span>
          </dt>
          <dd>{counterpartyTypeEntity.counterpartyTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/counterparty-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/counterparty-type/${counterpartyTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CounterpartyTypeDetail;
