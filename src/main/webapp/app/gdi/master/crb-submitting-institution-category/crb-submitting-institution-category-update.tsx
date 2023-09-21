import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbSubmittingInstitutionCategory } from 'app/shared/model/crb-submitting-institution-category.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-submitting-institution-category.reducer';

export const CrbSubmittingInstitutionCategoryUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbSubmittingInstitutionCategoryEntity = useAppSelector(state => state.crbSubmittingInstitutionCategory.entity);
  const loading = useAppSelector(state => state.crbSubmittingInstitutionCategory.loading);
  const updating = useAppSelector(state => state.crbSubmittingInstitutionCategory.updating);
  const updateSuccess = useAppSelector(state => state.crbSubmittingInstitutionCategory.updateSuccess);

  const handleClose = () => {
    navigate('/crb-submitting-institution-category' + location.search);
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
      ...crbSubmittingInstitutionCategoryEntity,
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
          ...crbSubmittingInstitutionCategoryEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="gdiStagingApp.crbSubmittingInstitutionCategory.home.createOrEditLabel"
            data-cy="CrbSubmittingInstitutionCategoryCreateUpdateHeading"
          >
            Create or edit a Crb Submitting Institution Category
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
                  id="crb-submitting-institution-category-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Submitting Institution Category Type Code"
                id="crb-submitting-institution-category-submittingInstitutionCategoryTypeCode"
                name="submittingInstitutionCategoryTypeCode"
                data-cy="submittingInstitutionCategoryTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Submitting Institution Category Type"
                id="crb-submitting-institution-category-submittingInstitutionCategoryType"
                name="submittingInstitutionCategoryType"
                data-cy="submittingInstitutionCategoryType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Submitting Institution Category Details"
                id="crb-submitting-institution-category-submittingInstitutionCategoryDetails"
                name="submittingInstitutionCategoryDetails"
                data-cy="submittingInstitutionCategoryDetails"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/crb-submitting-institution-category"
                replace
                color="info"
              >
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

export default CrbSubmittingInstitutionCategoryUpdate;
