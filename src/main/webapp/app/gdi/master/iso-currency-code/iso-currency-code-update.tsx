import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IIsoCurrencyCode } from 'app/shared/model/iso-currency-code.model';
import { getEntity, updateEntity, createEntity, reset } from './iso-currency-code.reducer';

export const IsoCurrencyCodeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const isoCurrencyCodeEntity = useAppSelector(state => state.isoCurrencyCode.entity);
  const loading = useAppSelector(state => state.isoCurrencyCode.loading);
  const updating = useAppSelector(state => state.isoCurrencyCode.updating);
  const updateSuccess = useAppSelector(state => state.isoCurrencyCode.updateSuccess);

  const handleClose = () => {
    navigate('/iso-currency-code' + location.search);
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
      ...isoCurrencyCodeEntity,
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
          ...isoCurrencyCodeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.isoCurrencyCode.home.createOrEditLabel" data-cy="IsoCurrencyCodeCreateUpdateHeading">
            Create or edit a Iso Currency Code
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
                <ValidatedField name="id" required readOnly id="iso-currency-code-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Alphabetic Code"
                id="iso-currency-code-alphabeticCode"
                name="alphabeticCode"
                data-cy="alphabeticCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Numeric Code"
                id="iso-currency-code-numericCode"
                name="numericCode"
                data-cy="numericCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Minor Unit"
                id="iso-currency-code-minorUnit"
                name="minorUnit"
                data-cy="minorUnit"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Currency"
                id="iso-currency-code-currency"
                name="currency"
                data-cy="currency"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Country" id="iso-currency-code-country" name="country" data-cy="country" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/iso-currency-code" replace color="info">
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

export default IsoCurrencyCodeUpdate;
