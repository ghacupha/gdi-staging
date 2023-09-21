import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUltimateBeneficiaryCategory } from 'app/shared/model/ultimate-beneficiary-category.model';
import { getEntity, updateEntity, createEntity, reset } from './ultimate-beneficiary-category.reducer';

export const UltimateBeneficiaryCategoryUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const ultimateBeneficiaryCategoryEntity = useAppSelector(state => state.ultimateBeneficiaryCategory.entity);
  const loading = useAppSelector(state => state.ultimateBeneficiaryCategory.loading);
  const updating = useAppSelector(state => state.ultimateBeneficiaryCategory.updating);
  const updateSuccess = useAppSelector(state => state.ultimateBeneficiaryCategory.updateSuccess);

  const handleClose = () => {
    navigate('/ultimate-beneficiary-category' + location.search);
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
      ...ultimateBeneficiaryCategoryEntity,
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
          ...ultimateBeneficiaryCategoryEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="gdiStagingApp.ultimateBeneficiaryCategory.home.createOrEditLabel"
            data-cy="UltimateBeneficiaryCategoryCreateUpdateHeading"
          >
            Create or edit a Ultimate Beneficiary Category
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
                  id="ultimate-beneficiary-category-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Ultimate Beneficiary Category Type Code"
                id="ultimate-beneficiary-category-ultimateBeneficiaryCategoryTypeCode"
                name="ultimateBeneficiaryCategoryTypeCode"
                data-cy="ultimateBeneficiaryCategoryTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Ultimate Beneficiary Type"
                id="ultimate-beneficiary-category-ultimateBeneficiaryType"
                name="ultimateBeneficiaryType"
                data-cy="ultimateBeneficiaryType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Ultimate Beneficiary Category Type Details"
                id="ultimate-beneficiary-category-ultimateBeneficiaryCategoryTypeDetails"
                name="ultimateBeneficiaryCategoryTypeDetails"
                data-cy="ultimateBeneficiaryCategoryTypeDetails"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/ultimate-beneficiary-category"
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

export default UltimateBeneficiaryCategoryUpdate;
