import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IProfessionalQualification } from 'app/shared/model/professional-qualification.model';
import { getEntity, updateEntity, createEntity, reset } from './professional-qualification.reducer';

export const ProfessionalQualificationUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const professionalQualificationEntity = useAppSelector(state => state.professionalQualification.entity);
  const loading = useAppSelector(state => state.professionalQualification.loading);
  const updating = useAppSelector(state => state.professionalQualification.updating);
  const updateSuccess = useAppSelector(state => state.professionalQualification.updateSuccess);

  const handleClose = () => {
    navigate('/professional-qualification' + location.search);
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
      ...professionalQualificationEntity,
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
          ...professionalQualificationEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.professionalQualification.home.createOrEditLabel" data-cy="ProfessionalQualificationCreateUpdateHeading">
            Create or edit a Professional Qualification
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
                <ValidatedField name="id" required readOnly id="professional-qualification-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Professional Qualifications Code"
                id="professional-qualification-professionalQualificationsCode"
                name="professionalQualificationsCode"
                data-cy="professionalQualificationsCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Professional Qualifications Type"
                id="professional-qualification-professionalQualificationsType"
                name="professionalQualificationsType"
                data-cy="professionalQualificationsType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Professional Qualifications Details"
                id="professional-qualification-professionalQualificationsDetails"
                name="professionalQualificationsDetails"
                data-cy="professionalQualificationsDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/professional-qualification" replace color="info">
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

export default ProfessionalQualificationUpdate;
