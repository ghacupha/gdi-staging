import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './gdi-master-data-index.reducer';

export const GdiMasterDataIndexDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const gdiMasterDataIndexEntity = useAppSelector(state => state.gdiMasterDataIndex.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="gdiMasterDataIndexDetailsHeading">Gdi Master Data Index</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{gdiMasterDataIndexEntity.id}</dd>
          <dt>
            <span id="entityName">Entity Name</span>
          </dt>
          <dd>{gdiMasterDataIndexEntity.entityName}</dd>
          <dt>
            <span id="databaseName">Database Name</span>
          </dt>
          <dd>{gdiMasterDataIndexEntity.databaseName}</dd>
          <dt>
            <span id="businessDescription">Business Description</span>
          </dt>
          <dd>{gdiMasterDataIndexEntity.businessDescription}</dd>
        </dl>
        <Button tag={Link} to="/gdi-master-data-index" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/gdi-master-data-index/${gdiMasterDataIndexEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default GdiMasterDataIndexDetail;
