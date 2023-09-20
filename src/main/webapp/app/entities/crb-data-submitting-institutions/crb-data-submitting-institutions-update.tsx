import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbDataSubmittingInstitutions } from 'app/shared/model/crb-data-submitting-institutions.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-data-submitting-institutions.reducer';

export const CrbDataSubmittingInstitutionsUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbDataSubmittingInstitutionsEntity = useAppSelector(state => state.crbDataSubmittingInstitutions.entity);
  const loading = useAppSelector(state => state.crbDataSubmittingInstitutions.loading);
  const updating = useAppSelector(state => state.crbDataSubmittingInstitutions.updating);
  const updateSuccess = useAppSelector(state => state.crbDataSubmittingInstitutions.updateSuccess);

  const handleClose = () => {
    navigate('/crb-data-submitting-institutions' + location.search);
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
      ...crbDataSubmittingInstitutionsEntity,
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
          ...crbDataSubmittingInstitutionsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="gdiStagingApp.crbDataSubmittingInstitutions.home.createOrEditLabel"
            data-cy="CrbDataSubmittingInstitutionsCreateUpdateHeading"
          >
            Create or edit a Crb Data Submitting Institutions
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
                  id="crb-data-submitting-institutions-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Institution Code"
                id="crb-data-submitting-institutions-institutionCode"
                name="institutionCode"
                data-cy="institutionCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Institution Name"
                id="crb-data-submitting-institutions-institutionName"
                name="institutionName"
                data-cy="institutionName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Institution Category"
                id="crb-data-submitting-institutions-institutionCategory"
                name="institutionCategory"
                data-cy="institutionCategory"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/crb-data-submitting-institutions"
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

export default CrbDataSubmittingInstitutionsUpdate;
