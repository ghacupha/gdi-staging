import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IIsicEconomicActivity } from 'app/shared/model/isic-economic-activity.model';
import { getEntity, updateEntity, createEntity, reset } from './isic-economic-activity.reducer';

export const IsicEconomicActivityUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const isicEconomicActivityEntity = useAppSelector(state => state.isicEconomicActivity.entity);
  const loading = useAppSelector(state => state.isicEconomicActivity.loading);
  const updating = useAppSelector(state => state.isicEconomicActivity.updating);
  const updateSuccess = useAppSelector(state => state.isicEconomicActivity.updateSuccess);

  const handleClose = () => {
    navigate('/isic-economic-activity' + location.search);
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
      ...isicEconomicActivityEntity,
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
          ...isicEconomicActivityEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.isicEconomicActivity.home.createOrEditLabel" data-cy="IsicEconomicActivityCreateUpdateHeading">
            Create or edit a Isic Economic Activity
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
                <ValidatedField name="id" required readOnly id="isic-economic-activity-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Business Economic Activity Code"
                id="isic-economic-activity-businessEconomicActivityCode"
                name="businessEconomicActivityCode"
                data-cy="businessEconomicActivityCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Section"
                id="isic-economic-activity-section"
                name="section"
                data-cy="section"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Section Label"
                id="isic-economic-activity-sectionLabel"
                name="sectionLabel"
                data-cy="sectionLabel"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Division"
                id="isic-economic-activity-division"
                name="division"
                data-cy="division"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Division Label"
                id="isic-economic-activity-divisionLabel"
                name="divisionLabel"
                data-cy="divisionLabel"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Group Code" id="isic-economic-activity-groupCode" name="groupCode" data-cy="groupCode" type="text" />
              <ValidatedField
                label="Group Label"
                id="isic-economic-activity-groupLabel"
                name="groupLabel"
                data-cy="groupLabel"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Class Code"
                id="isic-economic-activity-classCode"
                name="classCode"
                data-cy="classCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Business Economic Activity Type"
                id="isic-economic-activity-businessEconomicActivityType"
                name="businessEconomicActivityType"
                data-cy="businessEconomicActivityType"
                type="text"
              />
              <ValidatedField
                label="Business Economic Activity Type Description"
                id="isic-economic-activity-businessEconomicActivityTypeDescription"
                name="businessEconomicActivityTypeDescription"
                data-cy="businessEconomicActivityTypeDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/isic-economic-activity" replace color="info">
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

export default IsicEconomicActivityUpdate;
