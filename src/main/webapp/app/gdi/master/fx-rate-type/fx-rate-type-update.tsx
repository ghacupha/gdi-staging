import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IFxRateType } from 'app/shared/model/fx-rate-type.model';
import { getEntity, updateEntity, createEntity, reset } from './fx-rate-type.reducer';

export const FxRateTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const fxRateTypeEntity = useAppSelector(state => state.fxRateType.entity);
  const loading = useAppSelector(state => state.fxRateType.loading);
  const updating = useAppSelector(state => state.fxRateType.updating);
  const updateSuccess = useAppSelector(state => state.fxRateType.updateSuccess);

  const handleClose = () => {
    navigate('/fx-rate-type' + location.search);
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
      ...fxRateTypeEntity,
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
          ...fxRateTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.fxRateType.home.createOrEditLabel" data-cy="FxRateTypeCreateUpdateHeading">
            Create or edit a Fx Rate Type
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="fx-rate-type-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Fx Rate Code"
                id="fx-rate-type-fxRateCode"
                name="fxRateCode"
                data-cy="fxRateCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Fx Rate Type"
                id="fx-rate-type-fxRateType"
                name="fxRateType"
                data-cy="fxRateType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Fx Rate Details"
                id="fx-rate-type-fxRateDetails"
                name="fxRateDetails"
                data-cy="fxRateDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/fx-rate-type" replace color="info">
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

export default FxRateTypeUpdate;
