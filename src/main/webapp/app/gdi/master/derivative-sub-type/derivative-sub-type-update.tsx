import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IDerivativeSubType } from 'app/shared/model/derivative-sub-type.model';
import { getEntity, updateEntity, createEntity, reset } from './derivative-sub-type.reducer';

export const DerivativeSubTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const derivativeSubTypeEntity = useAppSelector(state => state.derivativeSubType.entity);
  const loading = useAppSelector(state => state.derivativeSubType.loading);
  const updating = useAppSelector(state => state.derivativeSubType.updating);
  const updateSuccess = useAppSelector(state => state.derivativeSubType.updateSuccess);

  const handleClose = () => {
    navigate('/derivative-sub-type' + location.search);
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
      ...derivativeSubTypeEntity,
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
          ...derivativeSubTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.derivativeSubType.home.createOrEditLabel" data-cy="DerivativeSubTypeCreateUpdateHeading">
            Create or edit a Derivative Sub Type
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
                <ValidatedField name="id" required readOnly id="derivative-sub-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Financial Derivative Sub Type Code"
                id="derivative-sub-type-financialDerivativeSubTypeCode"
                name="financialDerivativeSubTypeCode"
                data-cy="financialDerivativeSubTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Financial Derivative Sub Tye"
                id="derivative-sub-type-financialDerivativeSubTye"
                name="financialDerivativeSubTye"
                data-cy="financialDerivativeSubTye"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Financial Derivative Subtype Details"
                id="derivative-sub-type-financialDerivativeSubtypeDetails"
                name="financialDerivativeSubtypeDetails"
                data-cy="financialDerivativeSubtypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/derivative-sub-type" replace color="info">
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

export default DerivativeSubTypeUpdate;
