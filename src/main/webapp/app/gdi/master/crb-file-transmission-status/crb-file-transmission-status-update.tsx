import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbFileTransmissionStatus } from 'app/shared/model/crb-file-transmission-status.model';
import { SubmittedFileStatusTypes } from 'app/shared/model/enumerations/submitted-file-status-types.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-file-transmission-status.reducer';

export const CrbFileTransmissionStatusUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbFileTransmissionStatusEntity = useAppSelector(state => state.crbFileTransmissionStatus.entity);
  const loading = useAppSelector(state => state.crbFileTransmissionStatus.loading);
  const updating = useAppSelector(state => state.crbFileTransmissionStatus.updating);
  const updateSuccess = useAppSelector(state => state.crbFileTransmissionStatus.updateSuccess);
  const submittedFileStatusTypesValues = Object.keys(SubmittedFileStatusTypes);

  const handleClose = () => {
    navigate('/crb-file-transmission-status' + location.search);
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
      ...crbFileTransmissionStatusEntity,
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
          submittedFileStatusType: 'CORRECT',
          ...crbFileTransmissionStatusEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbFileTransmissionStatus.home.createOrEditLabel" data-cy="CrbFileTransmissionStatusCreateUpdateHeading">
            Create or edit a Crb File Transmission Status
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
                <ValidatedField name="id" required readOnly id="crb-file-transmission-status-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Submitted File Status Type Code"
                id="crb-file-transmission-status-submittedFileStatusTypeCode"
                name="submittedFileStatusTypeCode"
                data-cy="submittedFileStatusTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Submitted File Status Type"
                id="crb-file-transmission-status-submittedFileStatusType"
                name="submittedFileStatusType"
                data-cy="submittedFileStatusType"
                type="select"
              >
                {submittedFileStatusTypesValues.map(submittedFileStatusTypes => (
                  <option value={submittedFileStatusTypes} key={submittedFileStatusTypes}>
                    {submittedFileStatusTypes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Submitted File Status Type Description"
                id="crb-file-transmission-status-submittedFileStatusTypeDescription"
                name="submittedFileStatusTypeDescription"
                data-cy="submittedFileStatusTypeDescription"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/crb-file-transmission-status"
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

export default CrbFileTransmissionStatusUpdate;
