import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICurrencyAuthenticityFlag } from 'app/shared/model/currency-authenticity-flag.model';
import { CurrencyAuthenticityFlags } from 'app/shared/model/enumerations/currency-authenticity-flags.model';
import { CurrencyAuthenticityTypes } from 'app/shared/model/enumerations/currency-authenticity-types.model';
import { getEntity, updateEntity, createEntity, reset } from './currency-authenticity-flag.reducer';

export const CurrencyAuthenticityFlagUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const currencyAuthenticityFlagEntity = useAppSelector(state => state.currencyAuthenticityFlag.entity);
  const loading = useAppSelector(state => state.currencyAuthenticityFlag.loading);
  const updating = useAppSelector(state => state.currencyAuthenticityFlag.updating);
  const updateSuccess = useAppSelector(state => state.currencyAuthenticityFlag.updateSuccess);
  const currencyAuthenticityFlagsValues = Object.keys(CurrencyAuthenticityFlags);
  const currencyAuthenticityTypesValues = Object.keys(CurrencyAuthenticityTypes);

  const handleClose = () => {
    navigate('/currency-authenticity-flag' + location.search);
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
      ...currencyAuthenticityFlagEntity,
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
          currencyAuthenticityFlag: 'Y',
          currencyAuthenticityType: 'GENUINE',
          ...currencyAuthenticityFlagEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.currencyAuthenticityFlag.home.createOrEditLabel" data-cy="CurrencyAuthenticityFlagCreateUpdateHeading">
            Create or edit a Currency Authenticity Flag
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
                <ValidatedField name="id" required readOnly id="currency-authenticity-flag-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Currency Authenticity Flag"
                id="currency-authenticity-flag-currencyAuthenticityFlag"
                name="currencyAuthenticityFlag"
                data-cy="currencyAuthenticityFlag"
                type="select"
              >
                {currencyAuthenticityFlagsValues.map(currencyAuthenticityFlags => (
                  <option value={currencyAuthenticityFlags} key={currencyAuthenticityFlags}>
                    {currencyAuthenticityFlags}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Currency Authenticity Type"
                id="currency-authenticity-flag-currencyAuthenticityType"
                name="currencyAuthenticityType"
                data-cy="currencyAuthenticityType"
                type="select"
              >
                {currencyAuthenticityTypesValues.map(currencyAuthenticityTypes => (
                  <option value={currencyAuthenticityTypes} key={currencyAuthenticityTypes}>
                    {currencyAuthenticityTypes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Currency Authenticity Type Details"
                id="currency-authenticity-flag-currencyAuthenticityTypeDetails"
                name="currencyAuthenticityTypeDetails"
                data-cy="currencyAuthenticityTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/currency-authenticity-flag" replace color="info">
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

export default CurrencyAuthenticityFlagUpdate;
