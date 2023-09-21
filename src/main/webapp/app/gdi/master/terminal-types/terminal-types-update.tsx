import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITerminalTypes } from 'app/shared/model/terminal-types.model';
import { getEntity, updateEntity, createEntity, reset } from './terminal-types.reducer';

export const TerminalTypesUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const terminalTypesEntity = useAppSelector(state => state.terminalTypes.entity);
  const loading = useAppSelector(state => state.terminalTypes.loading);
  const updating = useAppSelector(state => state.terminalTypes.updating);
  const updateSuccess = useAppSelector(state => state.terminalTypes.updateSuccess);

  const handleClose = () => {
    navigate('/terminal-types' + location.search);
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
      ...terminalTypesEntity,
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
          ...terminalTypesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.terminalTypes.home.createOrEditLabel" data-cy="TerminalTypesCreateUpdateHeading">
            Create or edit a Terminal Types
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
                <ValidatedField name="id" required readOnly id="terminal-types-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Txn Terminal Type Code"
                id="terminal-types-txnTerminalTypeCode"
                name="txnTerminalTypeCode"
                data-cy="txnTerminalTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Txn Channel Type"
                id="terminal-types-txnChannelType"
                name="txnChannelType"
                data-cy="txnChannelType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Txn Channel Type Details"
                id="terminal-types-txnChannelTypeDetails"
                name="txnChannelTypeDetails"
                data-cy="txnChannelTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/terminal-types" replace color="info">
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

export default TerminalTypesUpdate;
