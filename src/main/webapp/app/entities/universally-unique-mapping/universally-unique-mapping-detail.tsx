import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './universally-unique-mapping.reducer';

export const UniversallyUniqueMappingDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const universallyUniqueMappingEntity = useAppSelector(state => state.universallyUniqueMapping.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="universallyUniqueMappingDetailsHeading">
          <Translate contentKey="gdiStagingApp.universallyUniqueMapping.detail.title">UniversallyUniqueMapping</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{universallyUniqueMappingEntity.id}</dd>
          <dt>
            <span id="universalKey">
              <Translate contentKey="gdiStagingApp.universallyUniqueMapping.universalKey">Universal Key</Translate>
            </span>
          </dt>
          <dd>{universallyUniqueMappingEntity.universalKey}</dd>
          <dt>
            <span id="mappedValue">
              <Translate contentKey="gdiStagingApp.universallyUniqueMapping.mappedValue">Mapped Value</Translate>
            </span>
          </dt>
          <dd>{universallyUniqueMappingEntity.mappedValue}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.universallyUniqueMapping.parentMapping">Parent Mapping</Translate>
          </dt>
          <dd>{universallyUniqueMappingEntity.parentMapping ? universallyUniqueMappingEntity.parentMapping.universalKey : ''}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.universallyUniqueMapping.placeholder">Placeholder</Translate>
          </dt>
          <dd>
            {universallyUniqueMappingEntity.placeholders
              ? universallyUniqueMappingEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {universallyUniqueMappingEntity.placeholders && i === universallyUniqueMappingEntity.placeholders.length - 1
                      ? ''
                      : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/universally-unique-mapping" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/universally-unique-mapping/${universallyUniqueMappingEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default UniversallyUniqueMappingDetail;
