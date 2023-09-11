import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './county-code.reducer';

export const CountyCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const countyCodeEntity = useAppSelector(state => state.countyCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="countyCodeDetailsHeading">
          <Translate contentKey="gdiStagingApp.standardsCountyCode.detail.title">CountyCode</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{countyCodeEntity.id}</dd>
          <dt>
            <span id="countyCode">
              <Translate contentKey="gdiStagingApp.standardsCountyCode.countyCode">County Code</Translate>
            </span>
          </dt>
          <dd>{countyCodeEntity.countyCode}</dd>
          <dt>
            <span id="countyName">
              <Translate contentKey="gdiStagingApp.standardsCountyCode.countyName">County Name</Translate>
            </span>
          </dt>
          <dd>{countyCodeEntity.countyName}</dd>
          <dt>
            <span id="subCountyCode">
              <Translate contentKey="gdiStagingApp.standardsCountyCode.subCountyCode">Sub County Code</Translate>
            </span>
          </dt>
          <dd>{countyCodeEntity.subCountyCode}</dd>
          <dt>
            <span id="subCountyName">
              <Translate contentKey="gdiStagingApp.standardsCountyCode.subCountyName">Sub County Name</Translate>
            </span>
          </dt>
          <dd>{countyCodeEntity.subCountyName}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.standardsCountyCode.placeholder">Placeholder</Translate>
          </dt>
          <dd>
            {countyCodeEntity.placeholders
              ? countyCodeEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {countyCodeEntity.placeholders && i === countyCodeEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/county-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/county-code/${countyCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CountyCodeDetail;
