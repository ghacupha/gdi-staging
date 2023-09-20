import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IFinancialDerivativeTypeCode } from 'app/shared/model/financial-derivative-type-code.model';
import { getEntity, updateEntity, createEntity, reset } from './financial-derivative-type-code.reducer';

export const FinancialDerivativeTypeCodeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const financialDerivativeTypeCodeEntity = useAppSelector(state => state.financialDerivativeTypeCode.entity);
  const loading = useAppSelector(state => state.financialDerivativeTypeCode.loading);
  const updating = useAppSelector(state => state.financialDerivativeTypeCode.updating);
  const updateSuccess = useAppSelector(state => state.financialDerivativeTypeCode.updateSuccess);

  const handleClose = () => {
    navigate('/financial-derivative-type-code' + location.search);
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
      ...financialDerivativeTypeCodeEntity,
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
          ...financialDerivativeTypeCodeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="gdiStagingApp.financialDerivativeTypeCode.home.createOrEditLabel"
            data-cy="FinancialDerivativeTypeCodeCreateUpdateHeading"
          >
            Create or edit a Financial Derivative Type Code
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
                  id="financial-derivative-type-code-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Financial Derivative Type Code"
                id="financial-derivative-type-code-financialDerivativeTypeCode"
                name="financialDerivativeTypeCode"
                data-cy="financialDerivativeTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Financial Derivative Type"
                id="financial-derivative-type-code-financialDerivativeType"
                name="financialDerivativeType"
                data-cy="financialDerivativeType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Financial Derivative Type Details"
                id="financial-derivative-type-code-financialDerivativeTypeDetails"
                name="financialDerivativeTypeDetails"
                data-cy="financialDerivativeTypeDetails"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/financial-derivative-type-code"
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

export default FinancialDerivativeTypeCodeUpdate;
