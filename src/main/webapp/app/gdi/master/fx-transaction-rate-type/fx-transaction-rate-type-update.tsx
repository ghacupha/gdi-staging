import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IFxTransactionRateType } from 'app/shared/model/fx-transaction-rate-type.model';
import { getEntity, updateEntity, createEntity, reset } from './fx-transaction-rate-type.reducer';

export const FxTransactionRateTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const fxTransactionRateTypeEntity = useAppSelector(state => state.fxTransactionRateType.entity);
  const loading = useAppSelector(state => state.fxTransactionRateType.loading);
  const updating = useAppSelector(state => state.fxTransactionRateType.updating);
  const updateSuccess = useAppSelector(state => state.fxTransactionRateType.updateSuccess);

  const handleClose = () => {
    navigate('/fx-transaction-rate-type' + location.search);
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
      ...fxTransactionRateTypeEntity,
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
          ...fxTransactionRateTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.fxTransactionRateType.home.createOrEditLabel" data-cy="FxTransactionRateTypeCreateUpdateHeading">
            Create or edit a Fx Transaction Rate Type
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
                <ValidatedField name="id" required readOnly id="fx-transaction-rate-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Fx Transaction Rate Type Code"
                id="fx-transaction-rate-type-fxTransactionRateTypeCode"
                name="fxTransactionRateTypeCode"
                data-cy="fxTransactionRateTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Fx Transaction Rate Type"
                id="fx-transaction-rate-type-fxTransactionRateType"
                name="fxTransactionRateType"
                data-cy="fxTransactionRateType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Fx Transaction Rate Type Details"
                id="fx-transaction-rate-type-fxTransactionRateTypeDetails"
                name="fxTransactionRateTypeDetails"
                data-cy="fxTransactionRateTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/fx-transaction-rate-type" replace color="info">
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

export default FxTransactionRateTypeUpdate;
