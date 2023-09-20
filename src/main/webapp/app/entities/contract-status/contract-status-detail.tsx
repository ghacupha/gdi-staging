import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './contract-status.reducer';

export const ContractStatusDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const contractStatusEntity = useAppSelector(state => state.contractStatus.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="contractStatusDetailsHeading">Contract Status</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{contractStatusEntity.id}</dd>
          <dt>
            <span id="contractStatusCode">Contract Status Code</span>
          </dt>
          <dd>{contractStatusEntity.contractStatusCode}</dd>
          <dt>
            <span id="contractStatusType">Contract Status Type</span>
          </dt>
          <dd>{contractStatusEntity.contractStatusType}</dd>
          <dt>
            <span id="contractStatusTypeDescription">Contract Status Type Description</span>
          </dt>
          <dd>{contractStatusEntity.contractStatusTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/contract-status" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/contract-status/${contractStatusEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ContractStatusDetail;
