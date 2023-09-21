import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './sources-of-funds-type-code.reducer';

export const SourcesOfFundsTypeCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const sourcesOfFundsTypeCodeEntity = useAppSelector(state => state.sourcesOfFundsTypeCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="sourcesOfFundsTypeCodeDetailsHeading">Sources Of Funds Type Code</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{sourcesOfFundsTypeCodeEntity.id}</dd>
          <dt>
            <span id="sourceOfFundsTypeCode">Source Of Funds Type Code</span>
          </dt>
          <dd>{sourcesOfFundsTypeCodeEntity.sourceOfFundsTypeCode}</dd>
          <dt>
            <span id="sourceOfFundsType">Source Of Funds Type</span>
          </dt>
          <dd>{sourcesOfFundsTypeCodeEntity.sourceOfFundsType}</dd>
          <dt>
            <span id="sourceOfFundsTypeDetails">Source Of Funds Type Details</span>
          </dt>
          <dd>{sourcesOfFundsTypeCodeEntity.sourceOfFundsTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/sources-of-funds-type-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/sources-of-funds-type-code/${sourcesOfFundsTypeCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SourcesOfFundsTypeCodeDetail;
