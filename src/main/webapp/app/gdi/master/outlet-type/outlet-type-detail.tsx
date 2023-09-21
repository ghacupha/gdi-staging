import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
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
        <h2 data-cy="outletTypeDetailsHeading">Outlet Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{outletTypeEntity.id}</dd>
          <dt>
            <span id="outletTypeCode">Outlet Type Code</span>
          </dt>
          <dd>{outletTypeEntity.outletTypeCode}</dd>
          <dt>
            <span id="outletType">Outlet Type</span>
          </dt>
          <dd>{outletTypeEntity.outletType}</dd>
          <dt>
            <span id="outletTypeDetails">Outlet Type Details</span>
          </dt>
          <dd>{outletTypeEntity.outletTypeDetails}</dd>
          <dt>Placeholder</dt>
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
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/outlet-type/${outletTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default OutletTypeDetail;
