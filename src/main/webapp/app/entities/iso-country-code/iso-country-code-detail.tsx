import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './iso-country-code.reducer';

export const IsoCountryCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const isoCountryCodeEntity = useAppSelector(state => state.isoCountryCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="isoCountryCodeDetailsHeading">Iso Country Code</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{isoCountryCodeEntity.id}</dd>
          <dt>
            <span id="countryCode">Country Code</span>
          </dt>
          <dd>{isoCountryCodeEntity.countryCode}</dd>
          <dt>
            <span id="countryDescription">Country Description</span>
          </dt>
          <dd>{isoCountryCodeEntity.countryDescription}</dd>
          <dt>
            <span id="continentCode">Continent Code</span>
          </dt>
          <dd>{isoCountryCodeEntity.continentCode}</dd>
          <dt>
            <span id="continentName">Continent Name</span>
          </dt>
          <dd>{isoCountryCodeEntity.continentName}</dd>
          <dt>
            <span id="subRegion">Sub Region</span>
          </dt>
          <dd>{isoCountryCodeEntity.subRegion}</dd>
        </dl>
        <Button tag={Link} to="/iso-country-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/iso-country-code/${isoCountryCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default IsoCountryCodeDetail;
