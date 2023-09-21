import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-credit-application-status.reducer';

export const CrbCreditApplicationStatusDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbCreditApplicationStatusEntity = useAppSelector(state => state.crbCreditApplicationStatus.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbCreditApplicationStatusDetailsHeading">Crb Credit Application Status</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbCreditApplicationStatusEntity.id}</dd>
          <dt>
            <span id="crbCreditApplicationStatusTypeCode">Crb Credit Application Status Type Code</span>
          </dt>
          <dd>{crbCreditApplicationStatusEntity.crbCreditApplicationStatusTypeCode}</dd>
          <dt>
            <span id="crbCreditApplicationStatusType">Crb Credit Application Status Type</span>
          </dt>
          <dd>{crbCreditApplicationStatusEntity.crbCreditApplicationStatusType}</dd>
          <dt>
            <span id="crbCreditApplicationStatusDetails">Crb Credit Application Status Details</span>
          </dt>
          <dd>{crbCreditApplicationStatusEntity.crbCreditApplicationStatusDetails}</dd>
        </dl>
        <Button tag={Link} to="/crb-credit-application-status" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-credit-application-status/${crbCreditApplicationStatusEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbCreditApplicationStatusDetail;
