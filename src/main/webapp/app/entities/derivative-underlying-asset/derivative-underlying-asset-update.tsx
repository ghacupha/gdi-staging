import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IDerivativeUnderlyingAsset } from 'app/shared/model/derivative-underlying-asset.model';
import { getEntity, updateEntity, createEntity, reset } from './derivative-underlying-asset.reducer';

export const DerivativeUnderlyingAssetUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const derivativeUnderlyingAssetEntity = useAppSelector(state => state.derivativeUnderlyingAsset.entity);
  const loading = useAppSelector(state => state.derivativeUnderlyingAsset.loading);
  const updating = useAppSelector(state => state.derivativeUnderlyingAsset.updating);
  const updateSuccess = useAppSelector(state => state.derivativeUnderlyingAsset.updateSuccess);

  const handleClose = () => {
    navigate('/derivative-underlying-asset' + location.search);
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
      ...derivativeUnderlyingAssetEntity,
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
          ...derivativeUnderlyingAssetEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.derivativeUnderlyingAsset.home.createOrEditLabel" data-cy="DerivativeUnderlyingAssetCreateUpdateHeading">
            Create or edit a Derivative Underlying Asset
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
                <ValidatedField name="id" required readOnly id="derivative-underlying-asset-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Derivative Underlying Asset Type Code"
                id="derivative-underlying-asset-derivativeUnderlyingAssetTypeCode"
                name="derivativeUnderlyingAssetTypeCode"
                data-cy="derivativeUnderlyingAssetTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Financial Derivative Underlying Asset Type"
                id="derivative-underlying-asset-financialDerivativeUnderlyingAssetType"
                name="financialDerivativeUnderlyingAssetType"
                data-cy="financialDerivativeUnderlyingAssetType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Derivative Underlying Asset Type Details"
                id="derivative-underlying-asset-derivativeUnderlyingAssetTypeDetails"
                name="derivativeUnderlyingAssetTypeDetails"
                data-cy="derivativeUnderlyingAssetTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/derivative-underlying-asset" replace color="info">
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

export default DerivativeUnderlyingAssetUpdate;
