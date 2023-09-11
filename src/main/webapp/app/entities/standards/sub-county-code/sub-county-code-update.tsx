import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPlaceholder } from 'app/shared/model/service/placeholder.model';
import { getEntities as getPlaceholders } from 'app/entities/service/placeholder/placeholder.reducer';
import { ISubCountyCode } from 'app/shared/model/standards/sub-county-code.model';
import { getEntity, updateEntity, createEntity, reset } from './sub-county-code.reducer';

export const SubCountyCodeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const placeholders = useAppSelector(state => state.placeholder.entities);
  const subCountyCodeEntity = useAppSelector(state => state.subCountyCode.entity);
  const loading = useAppSelector(state => state.subCountyCode.loading);
  const updating = useAppSelector(state => state.subCountyCode.updating);
  const updateSuccess = useAppSelector(state => state.subCountyCode.updateSuccess);

  const handleClose = () => {
    navigate('/sub-county-code' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getPlaceholders({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...subCountyCodeEntity,
      ...values,
      placeholders: mapIdList(values.placeholders),
    };

    if (isNew) {
      dispatch(createEntity(entity));
    } else {
      dispatch(updateEntity(entity));
    }
  };

  const defaultValues = () =>
    isNew
      ? {}
      : {
          ...subCountyCodeEntity,
          placeholders: subCountyCodeEntity?.placeholders?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.standardsSubCountyCode.home.createOrEditLabel" data-cy="SubCountyCodeCreateUpdateHeading">
            <Translate contentKey="gdiStagingApp.standardsSubCountyCode.home.createOrEditLabel">Create or edit a SubCountyCode</Translate>
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? (
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="sub-county-code-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('gdiStagingApp.standardsSubCountyCode.countyCode')}
                id="sub-county-code-countyCode"
                name="countyCode"
                data-cy="countyCode"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.standardsSubCountyCode.countyName')}
                id="sub-county-code-countyName"
                name="countyName"
                data-cy="countyName"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.standardsSubCountyCode.subCountyCode')}
                id="sub-county-code-subCountyCode"
                name="subCountyCode"
                data-cy="subCountyCode"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.standardsSubCountyCode.subCountyName')}
                id="sub-county-code-subCountyName"
                name="subCountyName"
                data-cy="subCountyName"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.standardsSubCountyCode.placeholder')}
                id="sub-county-code-placeholder"
                data-cy="placeholder"
                type="select"
                multiple
                name="placeholders"
              >
                <option value="" key="0" />
                {placeholders
                  ? placeholders.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.description}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/sub-county-code" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SubCountyCodeUpdate;
