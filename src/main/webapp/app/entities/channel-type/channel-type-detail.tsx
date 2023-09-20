import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './channel-type.reducer';

export const ChannelTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const channelTypeEntity = useAppSelector(state => state.channelType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="channelTypeDetailsHeading">Channel Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{channelTypeEntity.id}</dd>
          <dt>
            <span id="channelsTypeCode">Channels Type Code</span>
          </dt>
          <dd>{channelTypeEntity.channelsTypeCode}</dd>
          <dt>
            <span id="channelTypes">Channel Types</span>
          </dt>
          <dd>{channelTypeEntity.channelTypes}</dd>
          <dt>
            <span id="channelTypeDetails">Channel Type Details</span>
          </dt>
          <dd>{channelTypeEntity.channelTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/channel-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/channel-type/${channelTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ChannelTypeDetail;
