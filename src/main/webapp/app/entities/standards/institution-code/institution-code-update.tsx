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
import { IInstitutionCode } from 'app/shared/model/standards/institution-code.model';
import { getEntity, updateEntity, createEntity, reset } from './institution-code.reducer';

export const InstitutionCodeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const placeholders = useAppSelector(state => state.placeholder.entities);
  const institutionCodeEntity = useAppSelector(state => state.institutionCode.entity);
  const loading = useAppSelector(state => state.institutionCode.loading);
  const updating = useAppSelector(state => state.institutionCode.updating);
  const updateSuccess = useAppSelector(state => state.institutionCode.updateSuccess);

  const handleClose = () => {
    navigate('/institution-code' + location.search);
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
      ...institutionCodeEntity,
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
          ...institutionCodeEntity,
          placeholders: institutionCodeEntity?.placeholders?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.standardsInstitutionCode.home.createOrEditLabel" data-cy="InstitutionCodeCreateUpdateHeading">
            <Translate contentKey="gdiStagingApp.standardsInstitutionCode.home.createOrEditLabel">
              Create or edit a InstitutionCode
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
                  id="institution-code-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('gdiStagingApp.standardsInstitutionCode.institutionCode')}
                id="institution-code-institutionCode"
                name="institutionCode"
                data-cy="institutionCode"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('gdiStagingApp.standardsInstitutionCode.institutionName')}
                id="institution-code-institutionName"
                name="institutionName"
                data-cy="institutionName"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('gdiStagingApp.standardsInstitutionCode.shortName')}
                id="institution-code-shortName"
                name="shortName"
                data-cy="shortName"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.standardsInstitutionCode.category')}
                id="institution-code-category"
                name="category"
                data-cy="category"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.standardsInstitutionCode.institutionCategory')}
                id="institution-code-institutionCategory"
                name="institutionCategory"
                data-cy="institutionCategory"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.standardsInstitutionCode.placeholder')}
                id="institution-code-placeholder"
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/institution-code" replace color="info">
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

export default InstitutionCodeUpdate;
