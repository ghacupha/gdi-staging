import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './acquiring-issuing-flag.reducer';

export const AcquiringIssuingFlagDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const acquiringIssuingFlagEntity = useAppSelector(state => state.acquiringIssuingFlag.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="acquiringIssuingFlagDetailsHeading">Acquiring Issuing Flag</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{acquiringIssuingFlagEntity.id}</dd>
          <dt>
            <span id="cardAcquiringIssuingFlagCode">Card Acquiring Issuing Flag Code</span>
          </dt>
          <dd>{acquiringIssuingFlagEntity.cardAcquiringIssuingFlagCode}</dd>
          <dt>
            <span id="cardAcquiringIssuingDescription">Card Acquiring Issuing Description</span>
          </dt>
          <dd>{acquiringIssuingFlagEntity.cardAcquiringIssuingDescription}</dd>
          <dt>
            <span id="cardAcquiringIssuingDetails">Card Acquiring Issuing Details</span>
          </dt>
          <dd>{acquiringIssuingFlagEntity.cardAcquiringIssuingDetails}</dd>
        </dl>
        <Button tag={Link} to="/acquiring-issuing-flag" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/acquiring-issuing-flag/${acquiringIssuingFlagEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AcquiringIssuingFlagDetail;
