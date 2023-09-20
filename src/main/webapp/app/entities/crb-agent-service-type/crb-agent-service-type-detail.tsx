import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-agent-service-type.reducer';

export const CrbAgentServiceTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbAgentServiceTypeEntity = useAppSelector(state => state.crbAgentServiceType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbAgentServiceTypeDetailsHeading">Crb Agent Service Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbAgentServiceTypeEntity.id}</dd>
          <dt>
            <span id="agentServiceTypeCode">Agent Service Type Code</span>
          </dt>
          <dd>{crbAgentServiceTypeEntity.agentServiceTypeCode}</dd>
          <dt>
            <span id="agentServiceTypeDetails">Agent Service Type Details</span>
          </dt>
          <dd>{crbAgentServiceTypeEntity.agentServiceTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/crb-agent-service-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-agent-service-type/${crbAgentServiceTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbAgentServiceTypeDetail;
