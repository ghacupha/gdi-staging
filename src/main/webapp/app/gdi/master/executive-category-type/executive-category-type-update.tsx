import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IExecutiveCategoryType } from 'app/shared/model/executive-category-type.model';
import { getEntity, updateEntity, createEntity, reset } from './executive-category-type.reducer';

export const ExecutiveCategoryTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const executiveCategoryTypeEntity = useAppSelector(state => state.executiveCategoryType.entity);
  const loading = useAppSelector(state => state.executiveCategoryType.loading);
  const updating = useAppSelector(state => state.executiveCategoryType.updating);
  const updateSuccess = useAppSelector(state => state.executiveCategoryType.updateSuccess);

  const handleClose = () => {
    navigate('/executive-category-type' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...executiveCategoryTypeEntity,
      ...values,
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
          ...executiveCategoryTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.executiveCategoryType.home.createOrEditLabel" data-cy="ExecutiveCategoryTypeCreateUpdateHeading">
            Create or edit a Executive Category Type
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
                <ValidatedField name="id" required readOnly id="executive-category-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Director Category Type Code"
                id="executive-category-type-directorCategoryTypeCode"
                name="directorCategoryTypeCode"
                data-cy="directorCategoryTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Director Category Type"
                id="executive-category-type-directorCategoryType"
                name="directorCategoryType"
                data-cy="directorCategoryType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Director Category Type Details"
                id="executive-category-type-directorCategoryTypeDetails"
                name="directorCategoryTypeDetails"
                data-cy="directorCategoryTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/executive-category-type" replace color="info">
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

export default ExecutiveCategoryTypeUpdate;
