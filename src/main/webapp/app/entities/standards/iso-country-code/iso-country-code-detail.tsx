import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
        <h2 data-cy="isoCountryCodeDetailsHeading">
          <Translate contentKey="gdiStagingApp.standardsIsoCountryCode.detail.title">IsoCountryCode</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{isoCountryCodeEntity.id}</dd>
          <dt>
            <span id="countryCode">
              <Translate contentKey="gdiStagingApp.standardsIsoCountryCode.countryCode">Country Code</Translate>
            </span>
          </dt>
          <dd>{isoCountryCodeEntity.countryCode}</dd>
          <dt>
            <span id="countryDescription">
              <Translate contentKey="gdiStagingApp.standardsIsoCountryCode.countryDescription">Country Description</Translate>
            </span>
          </dt>
          <dd>{isoCountryCodeEntity.countryDescription}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.standardsIsoCountryCode.placeholder">Placeholder</Translate>
          </dt>
          <dd>
            {isoCountryCodeEntity.placeholders
              ? isoCountryCodeEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {isoCountryCodeEntity.placeholders && i === isoCountryCodeEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/iso-country-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/iso-country-code/${isoCountryCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default IsoCountryCodeDetail;
