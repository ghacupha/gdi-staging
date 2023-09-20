import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbRecordFileType } from 'app/shared/model/crb-record-file-type.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-record-file-type.reducer';

export const CrbRecordFileTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbRecordFileTypeEntity = useAppSelector(state => state.crbRecordFileType.entity);
  const loading = useAppSelector(state => state.crbRecordFileType.loading);
  const updating = useAppSelector(state => state.crbRecordFileType.updating);
  const updateSuccess = useAppSelector(state => state.crbRecordFileType.updateSuccess);

  const handleClose = () => {
    navigate('/crb-record-file-type' + location.search);
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
      ...crbRecordFileTypeEntity,
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
          ...crbRecordFileTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbRecordFileType.home.createOrEditLabel" data-cy="CrbRecordFileTypeCreateUpdateHeading">
            Create or edit a Crb Record File Type
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
                <ValidatedField name="id" required readOnly id="crb-record-file-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Record File Type Code"
                id="crb-record-file-type-recordFileTypeCode"
                name="recordFileTypeCode"
                data-cy="recordFileTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Record File Type"
                id="crb-record-file-type-recordFileType"
                name="recordFileType"
                data-cy="recordFileType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Record File Type Details"
                id="crb-record-file-type-recordFileTypeDetails"
                name="recordFileTypeDetails"
                data-cy="recordFileTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-record-file-type" replace color="info">
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

export default CrbRecordFileTypeUpdate;
