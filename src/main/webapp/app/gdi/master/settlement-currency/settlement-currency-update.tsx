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
import { ISettlementCurrency } from 'app/shared/model/settlement-currency.model';
import { getEntity, updateEntity, createEntity, reset } from './settlement-currency.reducer';

export const SettlementCurrencyUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const placeholders = useAppSelector(state => state.placeholder.entities);
  const settlementCurrencyEntity = useAppSelector(state => state.settlementCurrency.entity);
  const loading = useAppSelector(state => state.settlementCurrency.loading);
  const updating = useAppSelector(state => state.settlementCurrency.updating);
  const updateSuccess = useAppSelector(state => state.settlementCurrency.updateSuccess);

  const handleClose = () => {
    navigate('/settlement-currency' + location.search);
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
      ...settlementCurrencyEntity,
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
          ...settlementCurrencyEntity,
          placeholders: settlementCurrencyEntity?.placeholders?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.settlementCurrency.home.createOrEditLabel" data-cy="SettlementCurrencyCreateUpdateHeading">
            Create or edit a Settlement Currency
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
                <ValidatedField name="id" required readOnly id="settlement-currency-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Iso 4217 Currency Code"
                id="settlement-currency-iso4217CurrencyCode"
                name="iso4217CurrencyCode"
                data-cy="iso4217CurrencyCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                  minLength: { value: 3, message: 'This field is required to be at least 3 characters.' },
                  maxLength: { value: 3, message: 'This field cannot be longer than 3 characters.' },
                }}
              />
              <ValidatedField
                label="Currency Name"
                id="settlement-currency-currencyName"
                name="currencyName"
                data-cy="currencyName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Country"
                id="settlement-currency-country"
                name="country"
                data-cy="country"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Numeric Code"
                id="settlement-currency-numericCode"
                name="numericCode"
                data-cy="numericCode"
                type="text"
              />
              <ValidatedField label="Minor Unit" id="settlement-currency-minorUnit" name="minorUnit" data-cy="minorUnit" type="text" />
              <ValidatedField
                label="File Upload Token"
                id="settlement-currency-fileUploadToken"
                name="fileUploadToken"
                data-cy="fileUploadToken"
                type="text"
              />
              <ValidatedField
                label="Compilation Token"
                id="settlement-currency-compilationToken"
                name="compilationToken"
                data-cy="compilationToken"
                type="text"
              />
              <ValidatedField
                label="Placeholder"
                id="settlement-currency-placeholder"
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/settlement-currency" replace color="info">
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

export default SettlementCurrencyUpdate;
