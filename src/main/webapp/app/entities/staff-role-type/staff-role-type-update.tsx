import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IStaffRoleType } from 'app/shared/model/staff-role-type.model';
import { getEntity, updateEntity, createEntity, reset } from './staff-role-type.reducer';

export const StaffRoleTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const staffRoleTypeEntity = useAppSelector(state => state.staffRoleType.entity);
  const loading = useAppSelector(state => state.staffRoleType.loading);
  const updating = useAppSelector(state => state.staffRoleType.updating);
  const updateSuccess = useAppSelector(state => state.staffRoleType.updateSuccess);

  const handleClose = () => {
    navigate('/staff-role-type' + location.search);
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
      ...staffRoleTypeEntity,
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
          ...staffRoleTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.staffRoleType.home.createOrEditLabel" data-cy="StaffRoleTypeCreateUpdateHeading">
            Create or edit a Staff Role Type
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
                <ValidatedField name="id" required readOnly id="staff-role-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Staff Role Type Code"
                id="staff-role-type-staffRoleTypeCode"
                name="staffRoleTypeCode"
                data-cy="staffRoleTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Staff Role Type"
                id="staff-role-type-staffRoleType"
                name="staffRoleType"
                data-cy="staffRoleType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Staff Role Type Details"
                id="staff-role-type-staffRoleTypeDetails"
                name="staffRoleTypeDetails"
                data-cy="staffRoleTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/staff-role-type" replace color="info">
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

export default StaffRoleTypeUpdate;
