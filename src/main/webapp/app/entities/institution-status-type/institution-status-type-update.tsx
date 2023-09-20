import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IInstitutionStatusType } from 'app/shared/model/institution-status-type.model';
import { getEntity, updateEntity, createEntity, reset } from './institution-status-type.reducer';

export const InstitutionStatusTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const institutionStatusTypeEntity = useAppSelector(state => state.institutionStatusType.entity);
  const loading = useAppSelector(state => state.institutionStatusType.loading);
  const updating = useAppSelector(state => state.institutionStatusType.updating);
  const updateSuccess = useAppSelector(state => state.institutionStatusType.updateSuccess);

  const handleClose = () => {
    navigate('/institution-status-type' + location.search);
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
      ...institutionStatusTypeEntity,
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
          ...institutionStatusTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.institutionStatusType.home.createOrEditLabel" data-cy="InstitutionStatusTypeCreateUpdateHeading">
            Create or edit a Institution Status Type
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
                <ValidatedField name="id" required readOnly id="institution-status-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Institution Status Code"
                id="institution-status-type-institutionStatusCode"
                name="institutionStatusCode"
                data-cy="institutionStatusCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Institution Status Type"
                id="institution-status-type-institutionStatusType"
                name="institutionStatusType"
                data-cy="institutionStatusType"
                type="text"
              />
              <ValidatedField
                label="Insitution Status Type Description"
                id="institution-status-type-insitutionStatusTypeDescription"
                name="insitutionStatusTypeDescription"
                data-cy="insitutionStatusTypeDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/institution-status-type" replace color="info">
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

export default InstitutionStatusTypeUpdate;
