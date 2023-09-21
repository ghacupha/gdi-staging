import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IInstitutionContactDetails } from 'app/shared/model/institution-contact-details.model';
import { getEntity, updateEntity, createEntity, reset } from './institution-contact-details.reducer';

export const InstitutionContactDetailsUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const institutionContactDetailsEntity = useAppSelector(state => state.institutionContactDetails.entity);
  const loading = useAppSelector(state => state.institutionContactDetails.loading);
  const updating = useAppSelector(state => state.institutionContactDetails.updating);
  const updateSuccess = useAppSelector(state => state.institutionContactDetails.updateSuccess);

  const handleClose = () => {
    navigate('/institution-contact-details' + location.search);
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
      ...institutionContactDetailsEntity,
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
          ...institutionContactDetailsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.institutionContactDetails.home.createOrEditLabel" data-cy="InstitutionContactDetailsCreateUpdateHeading">
            Create or edit a Institution Contact Details
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
                <ValidatedField name="id" required readOnly id="institution-contact-details-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Entity Id"
                id="institution-contact-details-entityId"
                name="entityId"
                data-cy="entityId"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Entity Name"
                id="institution-contact-details-entityName"
                name="entityName"
                data-cy="entityName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Contact Type"
                id="institution-contact-details-contactType"
                name="contactType"
                data-cy="contactType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Contact Level"
                id="institution-contact-details-contactLevel"
                name="contactLevel"
                data-cy="contactLevel"
                type="text"
              />
              <ValidatedField
                label="Contact Value"
                id="institution-contact-details-contactValue"
                name="contactValue"
                data-cy="contactValue"
                type="text"
              />
              <ValidatedField
                label="Contact Name"
                id="institution-contact-details-contactName"
                name="contactName"
                data-cy="contactName"
                type="text"
              />
              <ValidatedField
                label="Contact Designation"
                id="institution-contact-details-contactDesignation"
                name="contactDesignation"
                data-cy="contactDesignation"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/institution-contact-details" replace color="info">
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

export default InstitutionContactDetailsUpdate;
