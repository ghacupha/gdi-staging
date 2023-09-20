import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IInsiderCategoryTypes } from 'app/shared/model/insider-category-types.model';
import { getEntity, updateEntity, createEntity, reset } from './insider-category-types.reducer';

export const InsiderCategoryTypesUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const insiderCategoryTypesEntity = useAppSelector(state => state.insiderCategoryTypes.entity);
  const loading = useAppSelector(state => state.insiderCategoryTypes.loading);
  const updating = useAppSelector(state => state.insiderCategoryTypes.updating);
  const updateSuccess = useAppSelector(state => state.insiderCategoryTypes.updateSuccess);

  const handleClose = () => {
    navigate('/insider-category-types' + location.search);
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
      ...insiderCategoryTypesEntity,
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
          ...insiderCategoryTypesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.insiderCategoryTypes.home.createOrEditLabel" data-cy="InsiderCategoryTypesCreateUpdateHeading">
            Create or edit a Insider Category Types
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
                <ValidatedField name="id" required readOnly id="insider-category-types-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Insider Category Type Code"
                id="insider-category-types-insiderCategoryTypeCode"
                name="insiderCategoryTypeCode"
                data-cy="insiderCategoryTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Insider Category Type Detail"
                id="insider-category-types-insiderCategoryTypeDetail"
                name="insiderCategoryTypeDetail"
                data-cy="insiderCategoryTypeDetail"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Insider Category Description"
                id="insider-category-types-insiderCategoryDescription"
                name="insiderCategoryDescription"
                data-cy="insiderCategoryDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/insider-category-types" replace color="info">
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

export default InsiderCategoryTypesUpdate;
