import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './shareholder-type.reducer';

export const ShareholderTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const shareholderTypeEntity = useAppSelector(state => state.shareholderType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="shareholderTypeDetailsHeading">Shareholder Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{shareholderTypeEntity.id}</dd>
          <dt>
            <span id="shareHolderTypeCode">Share Holder Type Code</span>
          </dt>
          <dd>{shareholderTypeEntity.shareHolderTypeCode}</dd>
          <dt>
            <span id="shareHolderType">Share Holder Type</span>
          </dt>
          <dd>{shareholderTypeEntity.shareHolderType}</dd>
        </dl>
        <Button tag={Link} to="/shareholder-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/shareholder-type/${shareholderTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ShareholderTypeDetail;
