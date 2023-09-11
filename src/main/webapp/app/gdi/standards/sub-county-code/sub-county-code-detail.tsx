import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './sub-county-code.reducer';

export const SubCountyCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const subCountyCodeEntity = useAppSelector(state => state.subCountyCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="subCountyCodeDetailsHeading">
          <Translate contentKey="gdiStagingApp.subCountyCode.detail.title">SubCountyCode</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{subCountyCodeEntity.id}</dd>
          <dt>
            <span id="countyCode">
              <Translate contentKey="gdiStagingApp.subCountyCode.countyCode">County Code</Translate>
            </span>
          </dt>
          <dd>{subCountyCodeEntity.countyCode}</dd>
          <dt>
            <span id="countyName">
              <Translate contentKey="gdiStagingApp.subCountyCode.countyName">County Name</Translate>
            </span>
          </dt>
          <dd>{subCountyCodeEntity.countyName}</dd>
          <dt>
            <span id="subCountyCode">
              <Translate contentKey="gdiStagingApp.subCountyCode.subCountyCode">Sub County Code</Translate>
            </span>
          </dt>
          <dd>{subCountyCodeEntity.subCountyCode}</dd>
          <dt>
            <span id="subCountyName">
              <Translate contentKey="gdiStagingApp.subCountyCode.subCountyName">Sub County Name</Translate>
            </span>
          </dt>
          <dd>{subCountyCodeEntity.subCountyName}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.subCountyCode.placeholder">Placeholder</Translate>
          </dt>
          <dd>
            {subCountyCodeEntity.placeholders
              ? subCountyCodeEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {subCountyCodeEntity.placeholders && i === subCountyCodeEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/sub-county-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/sub-county-code/${subCountyCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default SubCountyCodeDetail;
