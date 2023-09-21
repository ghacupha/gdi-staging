import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './share-holding-flag.reducer';

export const ShareHoldingFlagDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const shareHoldingFlagEntity = useAppSelector(state => state.shareHoldingFlag.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="shareHoldingFlagDetailsHeading">Share Holding Flag</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{shareHoldingFlagEntity.id}</dd>
          <dt>
            <span id="shareholdingFlagTypeCode">Shareholding Flag Type Code</span>
          </dt>
          <dd>{shareHoldingFlagEntity.shareholdingFlagTypeCode}</dd>
          <dt>
            <span id="shareholdingFlagType">Shareholding Flag Type</span>
          </dt>
          <dd>{shareHoldingFlagEntity.shareholdingFlagType}</dd>
          <dt>
            <span id="shareholdingTypeDescription">Shareholding Type Description</span>
          </dt>
          <dd>{shareHoldingFlagEntity.shareholdingTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/share-holding-flag" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/share-holding-flag/${shareHoldingFlagEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ShareHoldingFlagDetail;
