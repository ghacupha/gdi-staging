import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbComplaintType } from 'app/shared/model/crb-complaint-type.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-complaint-type.reducer';

export const CrbComplaintTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbComplaintTypeEntity = useAppSelector(state => state.crbComplaintType.entity);
  const loading = useAppSelector(state => state.crbComplaintType.loading);
  const updating = useAppSelector(state => state.crbComplaintType.updating);
  const updateSuccess = useAppSelector(state => state.crbComplaintType.updateSuccess);

  const handleClose = () => {
    navigate('/crb-complaint-type' + location.search);
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
      ...crbComplaintTypeEntity,
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
          ...crbComplaintTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbComplaintType.home.createOrEditLabel" data-cy="CrbComplaintTypeCreateUpdateHeading">
            Create or edit a Crb Complaint Type
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
                <ValidatedField name="id" required readOnly id="crb-complaint-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Complaint Type Code"
                id="crb-complaint-type-complaintTypeCode"
                name="complaintTypeCode"
                data-cy="complaintTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Complaint Type"
                id="crb-complaint-type-complaintType"
                name="complaintType"
                data-cy="complaintType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Complaint Type Details"
                id="crb-complaint-type-complaintTypeDetails"
                name="complaintTypeDetails"
                data-cy="complaintTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-complaint-type" replace color="info">
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

export default CrbComplaintTypeUpdate;
