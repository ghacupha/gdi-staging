import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IFxCustomerType } from 'app/shared/model/fx-customer-type.model';
import { getEntity, updateEntity, createEntity, reset } from './fx-customer-type.reducer';

export const FxCustomerTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const fxCustomerTypeEntity = useAppSelector(state => state.fxCustomerType.entity);
  const loading = useAppSelector(state => state.fxCustomerType.loading);
  const updating = useAppSelector(state => state.fxCustomerType.updating);
  const updateSuccess = useAppSelector(state => state.fxCustomerType.updateSuccess);

  const handleClose = () => {
    navigate('/fx-customer-type' + location.search);
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
      ...fxCustomerTypeEntity,
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
          ...fxCustomerTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.fxCustomerType.home.createOrEditLabel" data-cy="FxCustomerTypeCreateUpdateHeading">
            Create or edit a Fx Customer Type
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
                <ValidatedField name="id" required readOnly id="fx-customer-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Foreign Exchange Customer Type Code"
                id="fx-customer-type-foreignExchangeCustomerTypeCode"
                name="foreignExchangeCustomerTypeCode"
                data-cy="foreignExchangeCustomerTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Foreign Customer Type"
                id="fx-customer-type-foreignCustomerType"
                name="foreignCustomerType"
                data-cy="foreignCustomerType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/fx-customer-type" replace color="info">
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

export default FxCustomerTypeUpdate;
