import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbComplaintStatusType } from 'app/shared/model/crb-complaint-status-type.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-complaint-status-type.reducer';

export const CrbComplaintStatusTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbComplaintStatusTypeEntity = useAppSelector(state => state.crbComplaintStatusType.entity);
  const loading = useAppSelector(state => state.crbComplaintStatusType.loading);
  const updating = useAppSelector(state => state.crbComplaintStatusType.updating);
  const updateSuccess = useAppSelector(state => state.crbComplaintStatusType.updateSuccess);

  const handleClose = () => {
    navigate('/crb-complaint-status-type' + location.search);
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
      ...crbComplaintStatusTypeEntity,
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
          ...crbComplaintStatusTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbComplaintStatusType.home.createOrEditLabel" data-cy="CrbComplaintStatusTypeCreateUpdateHeading">
            Create or edit a Crb Complaint Status Type
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
                <ValidatedField name="id" required readOnly id="crb-complaint-status-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Complaint Status Type Code"
                id="crb-complaint-status-type-complaintStatusTypeCode"
                name="complaintStatusTypeCode"
                data-cy="complaintStatusTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Complaint Status Type"
                id="crb-complaint-status-type-complaintStatusType"
                name="complaintStatusType"
                data-cy="complaintStatusType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Complaint Status Details"
                id="crb-complaint-status-type-complaintStatusDetails"
                name="complaintStatusDetails"
                data-cy="complaintStatusDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-complaint-status-type" replace color="info">
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

export default CrbComplaintStatusTypeUpdate;
