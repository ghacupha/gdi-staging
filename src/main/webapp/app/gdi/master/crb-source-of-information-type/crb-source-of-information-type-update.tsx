import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbSourceOfInformationType } from 'app/shared/model/crb-source-of-information-type.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-source-of-information-type.reducer';

export const CrbSourceOfInformationTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbSourceOfInformationTypeEntity = useAppSelector(state => state.crbSourceOfInformationType.entity);
  const loading = useAppSelector(state => state.crbSourceOfInformationType.loading);
  const updating = useAppSelector(state => state.crbSourceOfInformationType.updating);
  const updateSuccess = useAppSelector(state => state.crbSourceOfInformationType.updateSuccess);

  const handleClose = () => {
    navigate('/crb-source-of-information-type' + location.search);
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
      ...crbSourceOfInformationTypeEntity,
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
          ...crbSourceOfInformationTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbSourceOfInformationType.home.createOrEditLabel" data-cy="CrbSourceOfInformationTypeCreateUpdateHeading">
            Create or edit a Crb Source Of Information Type
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
                  id="crb-source-of-information-type-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Source Of Information Type Code"
                id="crb-source-of-information-type-sourceOfInformationTypeCode"
                name="sourceOfInformationTypeCode"
                data-cy="sourceOfInformationTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Source Of Information Type Description"
                id="crb-source-of-information-type-sourceOfInformationTypeDescription"
                name="sourceOfInformationTypeDescription"
                data-cy="sourceOfInformationTypeDescription"
                type="text"
                validate={{}}
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/crb-source-of-information-type"
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

export default CrbSourceOfInformationTypeUpdate;
