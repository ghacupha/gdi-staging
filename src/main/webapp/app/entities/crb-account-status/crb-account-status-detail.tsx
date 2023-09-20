import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-account-status.reducer';

export const CrbAccountStatusDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbAccountStatusEntity = useAppSelector(state => state.crbAccountStatus.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbAccountStatusDetailsHeading">Crb Account Status</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbAccountStatusEntity.id}</dd>
          <dt>
            <span id="accountStatusTypeCode">Account Status Type Code</span>
          </dt>
          <dd>{crbAccountStatusEntity.accountStatusTypeCode}</dd>
          <dt>
            <span id="accountStatusType">Account Status Type</span>
          </dt>
          <dd>{crbAccountStatusEntity.accountStatusType}</dd>
          <dt>
            <span id="accountStatusTypeDetails">Account Status Type Details</span>
          </dt>
          <dd>{crbAccountStatusEntity.accountStatusTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/crb-account-status" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-account-status/${crbAccountStatusEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbAccountStatusDetail;
