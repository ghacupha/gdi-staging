import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICustomerType } from 'app/shared/model/customer-type.model';
import { getEntity, updateEntity, createEntity, reset } from './customer-type.reducer';

export const CustomerTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const customerTypeEntity = useAppSelector(state => state.customerType.entity);
  const loading = useAppSelector(state => state.customerType.loading);
  const updating = useAppSelector(state => state.customerType.updating);
  const updateSuccess = useAppSelector(state => state.customerType.updateSuccess);

  const handleClose = () => {
    navigate('/customer-type' + location.search);
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
      ...customerTypeEntity,
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
          ...customerTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.customerType.home.createOrEditLabel" data-cy="CustomerTypeCreateUpdateHeading">
            Create or edit a Customer Type
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
                <ValidatedField name="id" required readOnly id="customer-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Customer Type Code"
                id="customer-type-customerTypeCode"
                name="customerTypeCode"
                data-cy="customerTypeCode"
                type="text"
                validate={{}}
              />
              <ValidatedField
                label="Customer Type"
                id="customer-type-customerType"
                name="customerType"
                data-cy="customerType"
                type="text"
                validate={{}}
              />
              <ValidatedField
                label="Customer Type Description"
                id="customer-type-customerTypeDescription"
                name="customerTypeDescription"
                data-cy="customerTypeDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/customer-type" replace color="info">
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

export default CustomerTypeUpdate;
