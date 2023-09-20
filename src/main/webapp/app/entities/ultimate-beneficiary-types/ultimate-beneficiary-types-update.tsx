import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IUltimateBeneficiaryTypes } from 'app/shared/model/ultimate-beneficiary-types.model';
import { getEntity, updateEntity, createEntity, reset } from './ultimate-beneficiary-types.reducer';

export const UltimateBeneficiaryTypesUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const ultimateBeneficiaryTypesEntity = useAppSelector(state => state.ultimateBeneficiaryTypes.entity);
  const loading = useAppSelector(state => state.ultimateBeneficiaryTypes.loading);
  const updating = useAppSelector(state => state.ultimateBeneficiaryTypes.updating);
  const updateSuccess = useAppSelector(state => state.ultimateBeneficiaryTypes.updateSuccess);

  const handleClose = () => {
    navigate('/ultimate-beneficiary-types' + location.search);
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
      ...ultimateBeneficiaryTypesEntity,
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
          ...ultimateBeneficiaryTypesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.ultimateBeneficiaryTypes.home.createOrEditLabel" data-cy="UltimateBeneficiaryTypesCreateUpdateHeading">
            Create or edit a Ultimate Beneficiary Types
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
                <ValidatedField name="id" required readOnly id="ultimate-beneficiary-types-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Ultimate Beneficiary Type Code"
                id="ultimate-beneficiary-types-ultimateBeneficiaryTypeCode"
                name="ultimateBeneficiaryTypeCode"
                data-cy="ultimateBeneficiaryTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Ultimate Beneficiary Type"
                id="ultimate-beneficiary-types-ultimateBeneficiaryType"
                name="ultimateBeneficiaryType"
                data-cy="ultimateBeneficiaryType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Ultimate Beneficiary Type Details"
                id="ultimate-beneficiary-types-ultimateBeneficiaryTypeDetails"
                name="ultimateBeneficiaryTypeDetails"
                data-cy="ultimateBeneficiaryTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/ultimate-beneficiary-types" replace color="info">
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

export default UltimateBeneficiaryTypesUpdate;
