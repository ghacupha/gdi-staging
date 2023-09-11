import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './institution-code.reducer';

export const InstitutionCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const institutionCodeEntity = useAppSelector(state => state.institutionCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="institutionCodeDetailsHeading">
          <Translate contentKey="gdiStagingApp.standardsInstitutionCode.detail.title">InstitutionCode</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{institutionCodeEntity.id}</dd>
          <dt>
            <span id="institutionCode">
              <Translate contentKey="gdiStagingApp.standardsInstitutionCode.institutionCode">Institution Code</Translate>
            </span>
          </dt>
          <dd>{institutionCodeEntity.institutionCode}</dd>
          <dt>
            <span id="institutionName">
              <Translate contentKey="gdiStagingApp.standardsInstitutionCode.institutionName">Institution Name</Translate>
            </span>
          </dt>
          <dd>{institutionCodeEntity.institutionName}</dd>
          <dt>
            <span id="shortName">
              <Translate contentKey="gdiStagingApp.standardsInstitutionCode.shortName">Short Name</Translate>
            </span>
          </dt>
          <dd>{institutionCodeEntity.shortName}</dd>
          <dt>
            <span id="category">
              <Translate contentKey="gdiStagingApp.standardsInstitutionCode.category">Category</Translate>
            </span>
          </dt>
          <dd>{institutionCodeEntity.category}</dd>
          <dt>
            <span id="institutionCategory">
              <Translate contentKey="gdiStagingApp.standardsInstitutionCode.institutionCategory">Institution Category</Translate>
            </span>
          </dt>
          <dd>{institutionCodeEntity.institutionCategory}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.standardsInstitutionCode.placeholder">Placeholder</Translate>
          </dt>
          <dd>
            {institutionCodeEntity.placeholders
              ? institutionCodeEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {institutionCodeEntity.placeholders && i === institutionCodeEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/institution-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/institution-code/${institutionCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default InstitutionCodeDetail;
