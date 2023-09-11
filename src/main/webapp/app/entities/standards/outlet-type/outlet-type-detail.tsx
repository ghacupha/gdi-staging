import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './outlet-type.reducer';

export const OutletTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const outletTypeEntity = useAppSelector(state => state.outletType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="outletTypeDetailsHeading">
          <Translate contentKey="gdiStagingApp.standardsOutletType.detail.title">OutletType</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{outletTypeEntity.id}</dd>
          <dt>
            <span id="outletTypeCode">
              <Translate contentKey="gdiStagingApp.standardsOutletType.outletTypeCode">Outlet Type Code</Translate>
            </span>
          </dt>
          <dd>{outletTypeEntity.outletTypeCode}</dd>
          <dt>
            <span id="outletType">
              <Translate contentKey="gdiStagingApp.standardsOutletType.outletType">Outlet Type</Translate>
            </span>
          </dt>
          <dd>{outletTypeEntity.outletType}</dd>
          <dt>
            <span id="outletTypeDetails">
              <Translate contentKey="gdiStagingApp.standardsOutletType.outletTypeDetails">Outlet Type Details</Translate>
            </span>
          </dt>
          <dd>{outletTypeEntity.outletTypeDetails}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.standardsOutletType.placeholder">Placeholder</Translate>
          </dt>
          <dd>
            {outletTypeEntity.placeholders
              ? outletTypeEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {outletTypeEntity.placeholders && i === outletTypeEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/outlet-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/outlet-type/${outletTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default OutletTypeDetail;
