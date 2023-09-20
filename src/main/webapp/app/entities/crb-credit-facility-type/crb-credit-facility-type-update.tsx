import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbCreditFacilityType } from 'app/shared/model/crb-credit-facility-type.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-credit-facility-type.reducer';

export const CrbCreditFacilityTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbCreditFacilityTypeEntity = useAppSelector(state => state.crbCreditFacilityType.entity);
  const loading = useAppSelector(state => state.crbCreditFacilityType.loading);
  const updating = useAppSelector(state => state.crbCreditFacilityType.updating);
  const updateSuccess = useAppSelector(state => state.crbCreditFacilityType.updateSuccess);

  const handleClose = () => {
    navigate('/crb-credit-facility-type' + location.search);
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
      ...crbCreditFacilityTypeEntity,
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
          ...crbCreditFacilityTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbCreditFacilityType.home.createOrEditLabel" data-cy="CrbCreditFacilityTypeCreateUpdateHeading">
            Create or edit a Crb Credit Facility Type
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
                <ValidatedField name="id" required readOnly id="crb-credit-facility-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Credit Facility Type Code"
                id="crb-credit-facility-type-creditFacilityTypeCode"
                name="creditFacilityTypeCode"
                data-cy="creditFacilityTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Credit Facility Type"
                id="crb-credit-facility-type-creditFacilityType"
                name="creditFacilityType"
                data-cy="creditFacilityType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Credit Facility Description"
                id="crb-credit-facility-type-creditFacilityDescription"
                name="creditFacilityDescription"
                data-cy="creditFacilityDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-credit-facility-type" replace color="info">
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

export default CrbCreditFacilityTypeUpdate;
