import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-subscription-status-type-code.reducer';

export const CrbSubscriptionStatusTypeCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbSubscriptionStatusTypeCodeEntity = useAppSelector(state => state.crbSubscriptionStatusTypeCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbSubscriptionStatusTypeCodeDetailsHeading">Crb Subscription Status Type Code</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbSubscriptionStatusTypeCodeEntity.id}</dd>
          <dt>
            <span id="subscriptionStatusTypeCode">Subscription Status Type Code</span>
          </dt>
          <dd>{crbSubscriptionStatusTypeCodeEntity.subscriptionStatusTypeCode}</dd>
          <dt>
            <span id="subscriptionStatusType">Subscription Status Type</span>
          </dt>
          <dd>{crbSubscriptionStatusTypeCodeEntity.subscriptionStatusType}</dd>
          <dt>
            <span id="subscriptionStatusTypeDescription">Subscription Status Type Description</span>
          </dt>
          <dd>{crbSubscriptionStatusTypeCodeEntity.subscriptionStatusTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/crb-subscription-status-type-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-subscription-status-type-code/${crbSubscriptionStatusTypeCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbSubscriptionStatusTypeCodeDetail;
