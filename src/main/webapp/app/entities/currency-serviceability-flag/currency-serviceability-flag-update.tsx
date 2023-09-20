import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICurrencyServiceabilityFlag } from 'app/shared/model/currency-serviceability-flag.model';
import { CurrencyServiceabilityFlagTypes } from 'app/shared/model/enumerations/currency-serviceability-flag-types.model';
import { CurrencyServiceability } from 'app/shared/model/enumerations/currency-serviceability.model';
import { getEntity, updateEntity, createEntity, reset } from './currency-serviceability-flag.reducer';

export const CurrencyServiceabilityFlagUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const currencyServiceabilityFlagEntity = useAppSelector(state => state.currencyServiceabilityFlag.entity);
  const loading = useAppSelector(state => state.currencyServiceabilityFlag.loading);
  const updating = useAppSelector(state => state.currencyServiceabilityFlag.updating);
  const updateSuccess = useAppSelector(state => state.currencyServiceabilityFlag.updateSuccess);
  const currencyServiceabilityFlagTypesValues = Object.keys(CurrencyServiceabilityFlagTypes);
  const currencyServiceabilityValues = Object.keys(CurrencyServiceability);

  const handleClose = () => {
    navigate('/currency-serviceability-flag' + location.search);
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
      ...currencyServiceabilityFlagEntity,
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
          currencyServiceabilityFlag: 'Y',
          currencyServiceability: 'FIT',
          ...currencyServiceabilityFlagEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.currencyServiceabilityFlag.home.createOrEditLabel" data-cy="CurrencyServiceabilityFlagCreateUpdateHeading">
            Create or edit a Currency Serviceability Flag
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
                <ValidatedField name="id" required readOnly id="currency-serviceability-flag-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Currency Serviceability Flag"
                id="currency-serviceability-flag-currencyServiceabilityFlag"
                name="currencyServiceabilityFlag"
                data-cy="currencyServiceabilityFlag"
                type="select"
              >
                {currencyServiceabilityFlagTypesValues.map(currencyServiceabilityFlagTypes => (
                  <option value={currencyServiceabilityFlagTypes} key={currencyServiceabilityFlagTypes}>
                    {currencyServiceabilityFlagTypes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Currency Serviceability"
                id="currency-serviceability-flag-currencyServiceability"
                name="currencyServiceability"
                data-cy="currencyServiceability"
                type="select"
              >
                {currencyServiceabilityValues.map(currencyServiceability => (
                  <option value={currencyServiceability} key={currencyServiceability}>
                    {currencyServiceability}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Currency Serviceability Flag Details"
                id="currency-serviceability-flag-currencyServiceabilityFlagDetails"
                name="currencyServiceabilityFlagDetails"
                data-cy="currencyServiceabilityFlagDetails"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/currency-serviceability-flag"
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

export default CurrencyServiceabilityFlagUpdate;
