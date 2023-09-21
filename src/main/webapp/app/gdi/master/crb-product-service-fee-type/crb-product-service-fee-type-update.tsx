import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbProductServiceFeeType } from 'app/shared/model/crb-product-service-fee-type.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-product-service-fee-type.reducer';

export const CrbProductServiceFeeTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbProductServiceFeeTypeEntity = useAppSelector(state => state.crbProductServiceFeeType.entity);
  const loading = useAppSelector(state => state.crbProductServiceFeeType.loading);
  const updating = useAppSelector(state => state.crbProductServiceFeeType.updating);
  const updateSuccess = useAppSelector(state => state.crbProductServiceFeeType.updateSuccess);

  const handleClose = () => {
    navigate('/crb-product-service-fee-type' + location.search);
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
      ...crbProductServiceFeeTypeEntity,
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
          ...crbProductServiceFeeTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbProductServiceFeeType.home.createOrEditLabel" data-cy="CrbProductServiceFeeTypeCreateUpdateHeading">
            Create or edit a Crb Product Service Fee Type
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
                <ValidatedField name="id" required readOnly id="crb-product-service-fee-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Charge Type Code"
                id="crb-product-service-fee-type-chargeTypeCode"
                name="chargeTypeCode"
                data-cy="chargeTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Charge Type Description"
                id="crb-product-service-fee-type-chargeTypeDescription"
                name="chargeTypeDescription"
                data-cy="chargeTypeDescription"
                type="text"
                validate={{}}
              />
              <ValidatedField
                label="Charge Type Category"
                id="crb-product-service-fee-type-chargeTypeCategory"
                name="chargeTypeCategory"
                data-cy="chargeTypeCategory"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/crb-product-service-fee-type"
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

export default CrbProductServiceFeeTypeUpdate;
