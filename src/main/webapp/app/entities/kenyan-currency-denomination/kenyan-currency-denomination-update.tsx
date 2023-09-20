import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IKenyanCurrencyDenomination } from 'app/shared/model/kenyan-currency-denomination.model';
import { getEntity, updateEntity, createEntity, reset } from './kenyan-currency-denomination.reducer';

export const KenyanCurrencyDenominationUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const kenyanCurrencyDenominationEntity = useAppSelector(state => state.kenyanCurrencyDenomination.entity);
  const loading = useAppSelector(state => state.kenyanCurrencyDenomination.loading);
  const updating = useAppSelector(state => state.kenyanCurrencyDenomination.updating);
  const updateSuccess = useAppSelector(state => state.kenyanCurrencyDenomination.updateSuccess);

  const handleClose = () => {
    navigate('/kenyan-currency-denomination' + location.search);
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
      ...kenyanCurrencyDenominationEntity,
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
          ...kenyanCurrencyDenominationEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.kenyanCurrencyDenomination.home.createOrEditLabel" data-cy="KenyanCurrencyDenominationCreateUpdateHeading">
            Create or edit a Kenyan Currency Denomination
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
                <ValidatedField name="id" required readOnly id="kenyan-currency-denomination-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Currency Denomination Code"
                id="kenyan-currency-denomination-currencyDenominationCode"
                name="currencyDenominationCode"
                data-cy="currencyDenominationCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Currency Denomination Type"
                id="kenyan-currency-denomination-currencyDenominationType"
                name="currencyDenominationType"
                data-cy="currencyDenominationType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Currency Denomination Type Details"
                id="kenyan-currency-denomination-currencyDenominationTypeDetails"
                name="currencyDenominationTypeDetails"
                data-cy="currencyDenominationTypeDetails"
                type="text"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/kenyan-currency-denomination"
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

export default KenyanCurrencyDenominationUpdate;
