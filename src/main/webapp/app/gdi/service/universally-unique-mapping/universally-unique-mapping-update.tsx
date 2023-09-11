import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntities as getUniversallyUniqueMappings } from 'app/gdi/service/universally-unique-mapping/universally-unique-mapping.reducer';
import { IPlaceholder } from 'app/shared/model/erpService/placeholder.model';
import { getEntities as getPlaceholders } from 'app/gdi/service/placeholder/placeholder.reducer';
import { IUniversallyUniqueMapping } from 'app/shared/model/universally-unique-mapping.model';
import { getEntity, updateEntity, createEntity, reset } from './universally-unique-mapping.reducer';

export const UniversallyUniqueMappingUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const universallyUniqueMappings = useAppSelector(state => state.universallyUniqueMapping.entities);
  const placeholders = useAppSelector(state => state.placeholder.entities);
  const universallyUniqueMappingEntity = useAppSelector(state => state.universallyUniqueMapping.entity);
  const loading = useAppSelector(state => state.universallyUniqueMapping.loading);
  const updating = useAppSelector(state => state.universallyUniqueMapping.updating);
  const updateSuccess = useAppSelector(state => state.universallyUniqueMapping.updateSuccess);

  const handleClose = () => {
    navigate('/universally-unique-mapping' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getUniversallyUniqueMappings({}));
    dispatch(getPlaceholders({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...universallyUniqueMappingEntity,
      ...values,
      placeholders: mapIdList(values.placeholders),
      parentMapping: universallyUniqueMappings.find(it => it.id.toString() === values.parentMapping.toString()),
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
          ...universallyUniqueMappingEntity,
          parentMapping: universallyUniqueMappingEntity?.parentMapping?.id,
          placeholders: universallyUniqueMappingEntity?.placeholders?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.universallyUniqueMapping.home.createOrEditLabel" data-cy="UniversallyUniqueMappingCreateUpdateHeading">
            <Translate contentKey="gdiStagingApp.universallyUniqueMapping.home.createOrEditLabel">
              Create or edit a UniversallyUniqueMapping
            </Translate>
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
                  id="universally-unique-mapping-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('gdiStagingApp.universallyUniqueMapping.universalKey')}
                id="universally-unique-mapping-universalKey"
                name="universalKey"
                data-cy="universalKey"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('gdiStagingApp.universallyUniqueMapping.mappedValue')}
                id="universally-unique-mapping-mappedValue"
                name="mappedValue"
                data-cy="mappedValue"
                type="text"
              />
              <ValidatedField
                id="universally-unique-mapping-parentMapping"
                name="parentMapping"
                data-cy="parentMapping"
                label={translate('gdiStagingApp.universallyUniqueMapping.parentMapping')}
                type="select"
              >
                <option value="" key="0" />
                {universallyUniqueMappings
                  ? universallyUniqueMappings.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.universalKey}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                label={translate('gdiStagingApp.universallyUniqueMapping.placeholder')}
                id="universally-unique-mapping-placeholder"
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/universally-unique-mapping" replace color="info">
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

export default UniversallyUniqueMappingUpdate;
