import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISecurityTenure } from 'app/shared/model/security-tenure.model';
import { getEntity, updateEntity, createEntity, reset } from './security-tenure.reducer';

export const SecurityTenureUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const securityTenureEntity = useAppSelector(state => state.securityTenure.entity);
  const loading = useAppSelector(state => state.securityTenure.loading);
  const updating = useAppSelector(state => state.securityTenure.updating);
  const updateSuccess = useAppSelector(state => state.securityTenure.updateSuccess);

  const handleClose = () => {
    navigate('/security-tenure' + location.search);
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
      ...securityTenureEntity,
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
          ...securityTenureEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.securityTenure.home.createOrEditLabel" data-cy="SecurityTenureCreateUpdateHeading">
            Create or edit a Security Tenure
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
                <ValidatedField name="id" required readOnly id="security-tenure-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Security Tenure Code"
                id="security-tenure-securityTenureCode"
                name="securityTenureCode"
                data-cy="securityTenureCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Security Tenure Type"
                id="security-tenure-securityTenureType"
                name="securityTenureType"
                data-cy="securityTenureType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Security Tenure Details"
                id="security-tenure-securityTenureDetails"
                name="securityTenureDetails"
                data-cy="securityTenureDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/security-tenure" replace color="info">
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

export default SecurityTenureUpdate;
