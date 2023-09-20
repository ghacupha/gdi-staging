import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './party-relation-type.reducer';

export const PartyRelationTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const partyRelationTypeEntity = useAppSelector(state => state.partyRelationType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="partyRelationTypeDetailsHeading">Party Relation Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{partyRelationTypeEntity.id}</dd>
          <dt>
            <span id="partyRelationTypeCode">Party Relation Type Code</span>
          </dt>
          <dd>{partyRelationTypeEntity.partyRelationTypeCode}</dd>
          <dt>
            <span id="partyRelationType">Party Relation Type</span>
          </dt>
          <dd>{partyRelationTypeEntity.partyRelationType}</dd>
          <dt>
            <span id="partyRelationTypeDescription">Party Relation Type Description</span>
          </dt>
          <dd>{partyRelationTypeEntity.partyRelationTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/party-relation-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/party-relation-type/${partyRelationTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default PartyRelationTypeDetail;
