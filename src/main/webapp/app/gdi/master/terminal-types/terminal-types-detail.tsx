import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './terminal-types.reducer';

export const TerminalTypesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const terminalTypesEntity = useAppSelector(state => state.terminalTypes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="terminalTypesDetailsHeading">Terminal Types</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{terminalTypesEntity.id}</dd>
          <dt>
            <span id="txnTerminalTypeCode">Txn Terminal Type Code</span>
          </dt>
          <dd>{terminalTypesEntity.txnTerminalTypeCode}</dd>
          <dt>
            <span id="txnChannelType">Txn Channel Type</span>
          </dt>
          <dd>{terminalTypesEntity.txnChannelType}</dd>
          <dt>
            <span id="txnChannelTypeDetails">Txn Channel Type Details</span>
          </dt>
          <dd>{terminalTypesEntity.txnChannelTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/terminal-types" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/terminal-types/${terminalTypesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default TerminalTypesDetail;
