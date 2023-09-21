import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISecurityType } from 'app/shared/model/security-type.model';
import { getEntity, updateEntity, createEntity, reset } from './security-type.reducer';

export const SecurityTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const securityTypeEntity = useAppSelector(state => state.securityType.entity);
  const loading = useAppSelector(state => state.securityType.loading);
  const updating = useAppSelector(state => state.securityType.updating);
  const updateSuccess = useAppSelector(state => state.securityType.updateSuccess);

  const handleClose = () => {
    navigate('/security-type' + location.search);
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
      ...securityTypeEntity,
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
          ...securityTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.securityType.home.createOrEditLabel" data-cy="SecurityTypeCreateUpdateHeading">
            Create or edit a Security Type
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
                <ValidatedField name="id" required readOnly id="security-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Security Type Code"
                id="security-type-securityTypeCode"
                name="securityTypeCode"
                data-cy="securityTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Security Type"
                id="security-type-securityType"
                name="securityType"
                data-cy="securityType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Security Type Details"
                id="security-type-securityTypeDetails"
                name="securityTypeDetails"
                data-cy="securityTypeDetails"
                type="textarea"
              />
              <ValidatedField
                label="Security Type Description"
                id="security-type-securityTypeDescription"
                name="securityTypeDescription"
                data-cy="securityTypeDescription"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/security-type" replace color="info">
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

export default SecurityTypeUpdate;
