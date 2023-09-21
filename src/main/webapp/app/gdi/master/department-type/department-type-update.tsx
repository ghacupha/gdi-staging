import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPlaceholder } from 'app/shared/model/service/placeholder.model';
import { getEntities as getPlaceholders } from 'app/entities/service/placeholder/placeholder.reducer';
import { IDepartmentType } from 'app/shared/model/department-type.model';
import { getEntity, updateEntity, createEntity, reset } from './department-type.reducer';

export const DepartmentTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const placeholders = useAppSelector(state => state.placeholder.entities);
  const departmentTypeEntity = useAppSelector(state => state.departmentType.entity);
  const loading = useAppSelector(state => state.departmentType.loading);
  const updating = useAppSelector(state => state.departmentType.updating);
  const updateSuccess = useAppSelector(state => state.departmentType.updateSuccess);

  const handleClose = () => {
    navigate('/department-type' + location.search);
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
      ...departmentTypeEntity,
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
          ...departmentTypeEntity,
          placeholders: departmentTypeEntity?.placeholders?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.departmentType.home.createOrEditLabel" data-cy="DepartmentTypeCreateUpdateHeading">
            Create or edit a Department Type
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
                <ValidatedField name="id" required readOnly id="department-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Department Type Code"
                id="department-type-departmentTypeCode"
                name="departmentTypeCode"
                data-cy="departmentTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Department Type"
                id="department-type-departmentType"
                name="departmentType"
                data-cy="departmentType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Department Type Details"
                id="department-type-departmentTypeDetails"
                name="departmentTypeDetails"
                data-cy="departmentTypeDetails"
                type="textarea"
              />
              <ValidatedField
                label="Placeholder"
                id="department-type-placeholder"
                data-cy="placeholder"
                type="select"
                multiple
                name="placeholders"
              >
                <option value="" key="0" />
                {placeholders
                  ? placeholders.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.id}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/department-type" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">Back</span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp; Save
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default DepartmentTypeUpdate;
