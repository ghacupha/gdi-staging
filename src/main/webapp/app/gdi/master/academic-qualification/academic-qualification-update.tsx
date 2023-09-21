import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAcademicQualification } from 'app/shared/model/academic-qualification.model';
import { getEntity, updateEntity, createEntity, reset } from './academic-qualification.reducer';

export const AcademicQualificationUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const academicQualificationEntity = useAppSelector(state => state.academicQualification.entity);
  const loading = useAppSelector(state => state.academicQualification.loading);
  const updating = useAppSelector(state => state.academicQualification.updating);
  const updateSuccess = useAppSelector(state => state.academicQualification.updateSuccess);

  const handleClose = () => {
    navigate('/academic-qualification' + location.search);
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
      ...academicQualificationEntity,
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
          ...academicQualificationEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.academicQualification.home.createOrEditLabel" data-cy="AcademicQualificationCreateUpdateHeading">
            Create or edit a Academic Qualification
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
                <ValidatedField name="id" required readOnly id="academic-qualification-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Academic Qualifications Code"
                id="academic-qualification-academicQualificationsCode"
                name="academicQualificationsCode"
                data-cy="academicQualificationsCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Academic Qualification Type"
                id="academic-qualification-academicQualificationType"
                name="academicQualificationType"
                data-cy="academicQualificationType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Academic Qualification Type Detail"
                id="academic-qualification-academicQualificationTypeDetail"
                name="academicQualificationTypeDetail"
                data-cy="academicQualificationTypeDetail"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/academic-qualification" replace color="info">
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

export default AcademicQualificationUpdate;
