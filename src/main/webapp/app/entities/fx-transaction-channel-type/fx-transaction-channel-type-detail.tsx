import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './fx-transaction-channel-type.reducer';

export const FxTransactionChannelTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const fxTransactionChannelTypeEntity = useAppSelector(state => state.fxTransactionChannelType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fxTransactionChannelTypeDetailsHeading">Fx Transaction Channel Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{fxTransactionChannelTypeEntity.id}</dd>
          <dt>
            <span id="fxTransactionChannelCode">Fx Transaction Channel Code</span>
          </dt>
          <dd>{fxTransactionChannelTypeEntity.fxTransactionChannelCode}</dd>
          <dt>
            <span id="fxTransactionChannelType">Fx Transaction Channel Type</span>
          </dt>
          <dd>{fxTransactionChannelTypeEntity.fxTransactionChannelType}</dd>
          <dt>
            <span id="fxChannelTypeDetails">Fx Channel Type Details</span>
          </dt>
          <dd>{fxTransactionChannelTypeEntity.fxChannelTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/fx-transaction-channel-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/fx-transaction-channel-type/${fxTransactionChannelTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default FxTransactionChannelTypeDetail;
