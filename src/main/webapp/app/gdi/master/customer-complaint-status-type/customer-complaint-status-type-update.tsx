import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICustomerComplaintStatusType } from 'app/shared/model/customer-complaint-status-type.model';
import { getEntity, updateEntity, createEntity, reset } from './customer-complaint-status-type.reducer';

export const CustomerComplaintStatusTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const customerComplaintStatusTypeEntity = useAppSelector(state => state.customerComplaintStatusType.entity);
  const loading = useAppSelector(state => state.customerComplaintStatusType.loading);
  const updating = useAppSelector(state => state.customerComplaintStatusType.updating);
  const updateSuccess = useAppSelector(state => state.customerComplaintStatusType.updateSuccess);

  const handleClose = () => {
    navigate('/customer-complaint-status-type' + location.search);
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
      ...customerComplaintStatusTypeEntity,
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
          ...customerComplaintStatusTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="gdiStagingApp.customerComplaintStatusType.home.createOrEditLabel"
            data-cy="CustomerComplaintStatusTypeCreateUpdateHeading"
          >
            Create or edit a Customer Complaint Status Type
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
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="customer-complaint-status-type-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Customer Complaint Status Type Code"
                id="customer-complaint-status-type-customerComplaintStatusTypeCode"
                name="customerComplaintStatusTypeCode"
                data-cy="customerComplaintStatusTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Customer Complaint Status Type"
                id="customer-complaint-status-type-customerComplaintStatusType"
                name="customerComplaintStatusType"
                data-cy="customerComplaintStatusType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Customer Complaint Status Type Details"
                id="customer-complaint-status-type-customerComplaintStatusTypeDetails"
                name="customerComplaintStatusTypeDetails"
                data-cy="customerComplaintStatusTypeDetails"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/customer-complaint-status-type"
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

export default CustomerComplaintStatusTypeUpdate;
