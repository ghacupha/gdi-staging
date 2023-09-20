import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbNatureOfInformation } from 'app/shared/model/crb-nature-of-information.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-nature-of-information.reducer';

export const CrbNatureOfInformationUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbNatureOfInformationEntity = useAppSelector(state => state.crbNatureOfInformation.entity);
  const loading = useAppSelector(state => state.crbNatureOfInformation.loading);
  const updating = useAppSelector(state => state.crbNatureOfInformation.updating);
  const updateSuccess = useAppSelector(state => state.crbNatureOfInformation.updateSuccess);

  const handleClose = () => {
    navigate('/crb-nature-of-information' + location.search);
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
      ...crbNatureOfInformationEntity,
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
          ...crbNatureOfInformationEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbNatureOfInformation.home.createOrEditLabel" data-cy="CrbNatureOfInformationCreateUpdateHeading">
            Create or edit a Crb Nature Of Information
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
                <ValidatedField name="id" required readOnly id="crb-nature-of-information-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Nature Of Information Type Code"
                id="crb-nature-of-information-natureOfInformationTypeCode"
                name="natureOfInformationTypeCode"
                data-cy="natureOfInformationTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Nature Of Information Type"
                id="crb-nature-of-information-natureOfInformationType"
                name="natureOfInformationType"
                data-cy="natureOfInformationType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Nature Of Information Type Description"
                id="crb-nature-of-information-natureOfInformationTypeDescription"
                name="natureOfInformationTypeDescription"
                data-cy="natureOfInformationTypeDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-nature-of-information" replace color="info">
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

export default CrbNatureOfInformationUpdate;
