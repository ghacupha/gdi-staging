import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ITerminalFunctions } from 'app/shared/model/terminal-functions.model';
import { getEntity, updateEntity, createEntity, reset } from './terminal-functions.reducer';

export const TerminalFunctionsUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const terminalFunctionsEntity = useAppSelector(state => state.terminalFunctions.entity);
  const loading = useAppSelector(state => state.terminalFunctions.loading);
  const updating = useAppSelector(state => state.terminalFunctions.updating);
  const updateSuccess = useAppSelector(state => state.terminalFunctions.updateSuccess);

  const handleClose = () => {
    navigate('/terminal-functions' + location.search);
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
      ...terminalFunctionsEntity,
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
          ...terminalFunctionsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.terminalFunctions.home.createOrEditLabel" data-cy="TerminalFunctionsCreateUpdateHeading">
            Create or edit a Terminal Functions
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
                <ValidatedField name="id" required readOnly id="terminal-functions-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Function Code"
                id="terminal-functions-functionCode"
                name="functionCode"
                data-cy="functionCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Terminal Functionality"
                id="terminal-functions-terminalFunctionality"
                name="terminalFunctionality"
                data-cy="terminalFunctionality"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Terminal Functionality Description"
                id="terminal-functions-terminalFunctionalityDescription"
                name="terminalFunctionalityDescription"
                data-cy="terminalFunctionalityDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/terminal-functions" replace color="info">
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

export default TerminalFunctionsUpdate;
