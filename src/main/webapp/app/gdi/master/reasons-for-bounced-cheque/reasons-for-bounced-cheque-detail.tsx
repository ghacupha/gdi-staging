import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './reasons-for-bounced-cheque.reducer';

export const ReasonsForBouncedChequeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const reasonsForBouncedChequeEntity = useAppSelector(state => state.reasonsForBouncedCheque.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="reasonsForBouncedChequeDetailsHeading">Reasons For Bounced Cheque</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{reasonsForBouncedChequeEntity.id}</dd>
          <dt>
            <span id="bouncedChequeReasonsTypeCode">Bounced Cheque Reasons Type Code</span>
          </dt>
          <dd>{reasonsForBouncedChequeEntity.bouncedChequeReasonsTypeCode}</dd>
          <dt>
            <span id="bouncedChequeReasonsType">Bounced Cheque Reasons Type</span>
          </dt>
          <dd>{reasonsForBouncedChequeEntity.bouncedChequeReasonsType}</dd>
        </dl>
        <Button tag={Link} to="/reasons-for-bounced-cheque" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/reasons-for-bounced-cheque/${reasonsForBouncedChequeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ReasonsForBouncedChequeDetail;
