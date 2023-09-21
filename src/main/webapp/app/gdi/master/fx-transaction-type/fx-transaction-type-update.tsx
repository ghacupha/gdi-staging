import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IFxTransactionType } from 'app/shared/model/fx-transaction-type.model';
import { getEntity, updateEntity, createEntity, reset } from './fx-transaction-type.reducer';

export const FxTransactionTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const fxTransactionTypeEntity = useAppSelector(state => state.fxTransactionType.entity);
  const loading = useAppSelector(state => state.fxTransactionType.loading);
  const updating = useAppSelector(state => state.fxTransactionType.updating);
  const updateSuccess = useAppSelector(state => state.fxTransactionType.updateSuccess);

  const handleClose = () => {
    navigate('/fx-transaction-type' + location.search);
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
      ...fxTransactionTypeEntity,
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
          ...fxTransactionTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.fxTransactionType.home.createOrEditLabel" data-cy="FxTransactionTypeCreateUpdateHeading">
            Create or edit a Fx Transaction Type
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
                <ValidatedField name="id" required readOnly id="fx-transaction-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Fx Transaction Type Code"
                id="fx-transaction-type-fxTransactionTypeCode"
                name="fxTransactionTypeCode"
                data-cy="fxTransactionTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Fx Transaction Type"
                id="fx-transaction-type-fxTransactionType"
                name="fxTransactionType"
                data-cy="fxTransactionType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Fx Transaction Type Description"
                id="fx-transaction-type-fxTransactionTypeDescription"
                name="fxTransactionTypeDescription"
                data-cy="fxTransactionTypeDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/fx-transaction-type" replace color="info">
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

export default FxTransactionTypeUpdate;
