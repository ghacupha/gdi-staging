import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISecurityClassificationType } from 'app/shared/model/security-classification-type.model';
import { getEntity, updateEntity, createEntity, reset } from './security-classification-type.reducer';

export const SecurityClassificationTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const securityClassificationTypeEntity = useAppSelector(state => state.securityClassificationType.entity);
  const loading = useAppSelector(state => state.securityClassificationType.loading);
  const updating = useAppSelector(state => state.securityClassificationType.updating);
  const updateSuccess = useAppSelector(state => state.securityClassificationType.updateSuccess);

  const handleClose = () => {
    navigate('/security-classification-type' + location.search);
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
      ...securityClassificationTypeEntity,
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
          ...securityClassificationTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.securityClassificationType.home.createOrEditLabel" data-cy="SecurityClassificationTypeCreateUpdateHeading">
            Create or edit a Security Classification Type
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
                <ValidatedField name="id" required readOnly id="security-classification-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Security Classification Type Code"
                id="security-classification-type-securityClassificationTypeCode"
                name="securityClassificationTypeCode"
                data-cy="securityClassificationTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Security Classification Type"
                id="security-classification-type-securityClassificationType"
                name="securityClassificationType"
                data-cy="securityClassificationType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Security Classification Details"
                id="security-classification-type-securityClassificationDetails"
                name="securityClassificationDetails"
                data-cy="securityClassificationDetails"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/security-classification-type"
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

export default SecurityClassificationTypeUpdate;
