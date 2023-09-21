import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IStaffCurrentEmploymentStatus } from 'app/shared/model/staff-current-employment-status.model';
import { getEntity, updateEntity, createEntity, reset } from './staff-current-employment-status.reducer';

export const StaffCurrentEmploymentStatusUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const staffCurrentEmploymentStatusEntity = useAppSelector(state => state.staffCurrentEmploymentStatus.entity);
  const loading = useAppSelector(state => state.staffCurrentEmploymentStatus.loading);
  const updating = useAppSelector(state => state.staffCurrentEmploymentStatus.updating);
  const updateSuccess = useAppSelector(state => state.staffCurrentEmploymentStatus.updateSuccess);

  const handleClose = () => {
    navigate('/staff-current-employment-status' + location.search);
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
      ...staffCurrentEmploymentStatusEntity,
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
          ...staffCurrentEmploymentStatusEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="gdiStagingApp.staffCurrentEmploymentStatus.home.createOrEditLabel"
            data-cy="StaffCurrentEmploymentStatusCreateUpdateHeading"
          >
            Create or edit a Staff Current Employment Status
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
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="staff-current-employment-status-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Staff Current Employment Status Type Code"
                id="staff-current-employment-status-staffCurrentEmploymentStatusTypeCode"
                name="staffCurrentEmploymentStatusTypeCode"
                data-cy="staffCurrentEmploymentStatusTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Staff Current Employment Status Type"
                id="staff-current-employment-status-staffCurrentEmploymentStatusType"
                name="staffCurrentEmploymentStatusType"
                data-cy="staffCurrentEmploymentStatusType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Staff Current Employment Status Type Details"
                id="staff-current-employment-status-staffCurrentEmploymentStatusTypeDetails"
                name="staffCurrentEmploymentStatusTypeDetails"
                data-cy="staffCurrentEmploymentStatusTypeDetails"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/staff-current-employment-status"
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

export default StaffCurrentEmploymentStatusUpdate;
