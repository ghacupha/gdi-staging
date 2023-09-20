import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IFxTransactionChannelType } from 'app/shared/model/fx-transaction-channel-type.model';
import { getEntity, updateEntity, createEntity, reset } from './fx-transaction-channel-type.reducer';

export const FxTransactionChannelTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const fxTransactionChannelTypeEntity = useAppSelector(state => state.fxTransactionChannelType.entity);
  const loading = useAppSelector(state => state.fxTransactionChannelType.loading);
  const updating = useAppSelector(state => state.fxTransactionChannelType.updating);
  const updateSuccess = useAppSelector(state => state.fxTransactionChannelType.updateSuccess);

  const handleClose = () => {
    navigate('/fx-transaction-channel-type' + location.search);
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
      ...fxTransactionChannelTypeEntity,
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
          ...fxTransactionChannelTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.fxTransactionChannelType.home.createOrEditLabel" data-cy="FxTransactionChannelTypeCreateUpdateHeading">
            Create or edit a Fx Transaction Channel Type
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
                <ValidatedField name="id" required readOnly id="fx-transaction-channel-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Fx Transaction Channel Code"
                id="fx-transaction-channel-type-fxTransactionChannelCode"
                name="fxTransactionChannelCode"
                data-cy="fxTransactionChannelCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Fx Transaction Channel Type"
                id="fx-transaction-channel-type-fxTransactionChannelType"
                name="fxTransactionChannelType"
                data-cy="fxTransactionChannelType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Fx Channel Type Details"
                id="fx-transaction-channel-type-fxChannelTypeDetails"
                name="fxChannelTypeDetails"
                data-cy="fxChannelTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/fx-transaction-channel-type" replace color="info">
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

export default FxTransactionChannelTypeUpdate;
