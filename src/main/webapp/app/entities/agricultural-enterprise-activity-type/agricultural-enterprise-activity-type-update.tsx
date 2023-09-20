import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAgriculturalEnterpriseActivityType } from 'app/shared/model/agricultural-enterprise-activity-type.model';
import { getEntity, updateEntity, createEntity, reset } from './agricultural-enterprise-activity-type.reducer';

export const AgriculturalEnterpriseActivityTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const agriculturalEnterpriseActivityTypeEntity = useAppSelector(state => state.agriculturalEnterpriseActivityType.entity);
  const loading = useAppSelector(state => state.agriculturalEnterpriseActivityType.loading);
  const updating = useAppSelector(state => state.agriculturalEnterpriseActivityType.updating);
  const updateSuccess = useAppSelector(state => state.agriculturalEnterpriseActivityType.updateSuccess);

  const handleClose = () => {
    navigate('/agricultural-enterprise-activity-type' + location.search);
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
      ...agriculturalEnterpriseActivityTypeEntity,
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
          ...agriculturalEnterpriseActivityTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="gdiStagingApp.agriculturalEnterpriseActivityType.home.createOrEditLabel"
            data-cy="AgriculturalEnterpriseActivityTypeCreateUpdateHeading"
          >
            Create or edit a Agricultural Enterprise Activity Type
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
                  id="agricultural-enterprise-activity-type-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Agricultural Enterprise Activity Type Code"
                id="agricultural-enterprise-activity-type-agriculturalEnterpriseActivityTypeCode"
                name="agriculturalEnterpriseActivityTypeCode"
                data-cy="agriculturalEnterpriseActivityTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Agricultural Enterprise Activity Type"
                id="agricultural-enterprise-activity-type-agriculturalEnterpriseActivityType"
                name="agriculturalEnterpriseActivityType"
                data-cy="agriculturalEnterpriseActivityType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Agricultural Enterprise Activity Type Description"
                id="agricultural-enterprise-activity-type-agriculturalEnterpriseActivityTypeDescription"
                name="agriculturalEnterpriseActivityTypeDescription"
                data-cy="agriculturalEnterpriseActivityTypeDescription"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/agricultural-enterprise-activity-type"
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

export default AgriculturalEnterpriseActivityTypeUpdate;
