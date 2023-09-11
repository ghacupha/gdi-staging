import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './service-outlet.reducer';

export const ServiceOutletDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const serviceOutletEntity = useAppSelector(state => state.serviceOutlet.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="serviceOutletDetailsHeading">
          <Translate contentKey="gdiStagingApp.serviceOutlet.detail.title">ServiceOutlet</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{serviceOutletEntity.id}</dd>
          <dt>
            <span id="outletCode">
              <Translate contentKey="gdiStagingApp.serviceOutlet.outletCode">Outlet Code</Translate>
            </span>
          </dt>
          <dd>{serviceOutletEntity.outletCode}</dd>
          <dt>
            <span id="outletName">
              <Translate contentKey="gdiStagingApp.serviceOutlet.outletName">Outlet Name</Translate>
            </span>
          </dt>
          <dd>{serviceOutletEntity.outletName}</dd>
          <dt>
            <span id="town">
              <Translate contentKey="gdiStagingApp.serviceOutlet.town">Town</Translate>
            </span>
          </dt>
          <dd>{serviceOutletEntity.town}</dd>
          <dt>
            <span id="parliamentaryConstituency">
              <Translate contentKey="gdiStagingApp.serviceOutlet.parliamentaryConstituency">Parliamentary Constituency</Translate>
            </span>
          </dt>
          <dd>{serviceOutletEntity.parliamentaryConstituency}</dd>
          <dt>
            <span id="gpsCoordinates">
              <Translate contentKey="gdiStagingApp.serviceOutlet.gpsCoordinates">Gps Coordinates</Translate>
            </span>
          </dt>
          <dd>{serviceOutletEntity.gpsCoordinates}</dd>
          <dt>
            <span id="outletOpeningDate">
              <Translate contentKey="gdiStagingApp.serviceOutlet.outletOpeningDate">Outlet Opening Date</Translate>
            </span>
          </dt>
          <dd>
            {serviceOutletEntity.outletOpeningDate ? (
              <TextFormat value={serviceOutletEntity.outletOpeningDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="regulatorApprovalDate">
              <Translate contentKey="gdiStagingApp.serviceOutlet.regulatorApprovalDate">Regulator Approval Date</Translate>
            </span>
          </dt>
          <dd>
            {serviceOutletEntity.regulatorApprovalDate ? (
              <TextFormat value={serviceOutletEntity.regulatorApprovalDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="outletClosureDate">
              <Translate contentKey="gdiStagingApp.serviceOutlet.outletClosureDate">Outlet Closure Date</Translate>
            </span>
          </dt>
          <dd>
            {serviceOutletEntity.outletClosureDate ? (
              <TextFormat value={serviceOutletEntity.outletClosureDate} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="dateLastModified">
              <Translate contentKey="gdiStagingApp.serviceOutlet.dateLastModified">Date Last Modified</Translate>
            </span>
          </dt>
          <dd>
            {serviceOutletEntity.dateLastModified ? (
              <TextFormat value={serviceOutletEntity.dateLastModified} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="licenseFeePayable">
              <Translate contentKey="gdiStagingApp.serviceOutlet.licenseFeePayable">License Fee Payable</Translate>
            </span>
          </dt>
          <dd>{serviceOutletEntity.licenseFeePayable}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.serviceOutlet.placeholder">Placeholder</Translate>
          </dt>
          <dd>
            {serviceOutletEntity.placeholders
              ? serviceOutletEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {serviceOutletEntity.placeholders && i === serviceOutletEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
          <dt>
            <Translate contentKey="gdiStagingApp.serviceOutlet.bankCode">Bank Code</Translate>
          </dt>
          <dd>{serviceOutletEntity.bankCode ? serviceOutletEntity.bankCode.branchCode : ''}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.serviceOutlet.outletType">Outlet Type</Translate>
          </dt>
          <dd>{serviceOutletEntity.outletType ? serviceOutletEntity.outletType.outletType : ''}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.serviceOutlet.outletStatus">Outlet Status</Translate>
          </dt>
          <dd>{serviceOutletEntity.outletStatus ? serviceOutletEntity.outletStatus.branchStatusType : ''}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.serviceOutlet.countyName">County Name</Translate>
          </dt>
          <dd>{serviceOutletEntity.countyName ? serviceOutletEntity.countyName.countyName : ''}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.serviceOutlet.subCountyName">Sub County Name</Translate>
          </dt>
          <dd>{serviceOutletEntity.subCountyName ? serviceOutletEntity.subCountyName.subCountyName : ''}</dd>
        </dl>
        <Button tag={Link} to="/service-outlet" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/service-outlet/${serviceOutletEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ServiceOutletDetail;
