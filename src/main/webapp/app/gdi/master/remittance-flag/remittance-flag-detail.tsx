import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './remittance-flag.reducer';

export const RemittanceFlagDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const remittanceFlagEntity = useAppSelector(state => state.remittanceFlag.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="remittanceFlagDetailsHeading">Remittance Flag</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{remittanceFlagEntity.id}</dd>
          <dt>
            <span id="remittanceTypeFlag">Remittance Type Flag</span>
          </dt>
          <dd>{remittanceFlagEntity.remittanceTypeFlag}</dd>
          <dt>
            <span id="remittanceType">Remittance Type</span>
          </dt>
          <dd>{remittanceFlagEntity.remittanceType}</dd>
          <dt>
            <span id="remittanceTypeDetails">Remittance Type Details</span>
          </dt>
          <dd>{remittanceFlagEntity.remittanceTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/remittance-flag" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/remittance-flag/${remittanceFlagEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default RemittanceFlagDetail;
