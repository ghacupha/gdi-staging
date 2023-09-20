import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IBusinessSegmentTypes } from 'app/shared/model/business-segment-types.model';
import { getEntity, updateEntity, createEntity, reset } from './business-segment-types.reducer';

export const BusinessSegmentTypesUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const businessSegmentTypesEntity = useAppSelector(state => state.businessSegmentTypes.entity);
  const loading = useAppSelector(state => state.businessSegmentTypes.loading);
  const updating = useAppSelector(state => state.businessSegmentTypes.updating);
  const updateSuccess = useAppSelector(state => state.businessSegmentTypes.updateSuccess);

  const handleClose = () => {
    navigate('/business-segment-types' + location.search);
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
      ...businessSegmentTypesEntity,
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
          ...businessSegmentTypesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.businessSegmentTypes.home.createOrEditLabel" data-cy="BusinessSegmentTypesCreateUpdateHeading">
            Create or edit a Business Segment Types
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
                <ValidatedField name="id" required readOnly id="business-segment-types-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Business Economic Segment Code"
                id="business-segment-types-businessEconomicSegmentCode"
                name="businessEconomicSegmentCode"
                data-cy="businessEconomicSegmentCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Business Economic Segment"
                id="business-segment-types-businessEconomicSegment"
                name="businessEconomicSegment"
                data-cy="businessEconomicSegment"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Details" id="business-segment-types-details" name="details" data-cy="details" type="textarea" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/business-segment-types" replace color="info">
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

export default BusinessSegmentTypesUpdate;
