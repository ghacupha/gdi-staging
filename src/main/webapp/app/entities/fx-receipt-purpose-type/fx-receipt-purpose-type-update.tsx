import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IFxReceiptPurposeType } from 'app/shared/model/fx-receipt-purpose-type.model';
import { getEntity, updateEntity, createEntity, reset } from './fx-receipt-purpose-type.reducer';

export const FxReceiptPurposeTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const fxReceiptPurposeTypeEntity = useAppSelector(state => state.fxReceiptPurposeType.entity);
  const loading = useAppSelector(state => state.fxReceiptPurposeType.loading);
  const updating = useAppSelector(state => state.fxReceiptPurposeType.updating);
  const updateSuccess = useAppSelector(state => state.fxReceiptPurposeType.updateSuccess);

  const handleClose = () => {
    navigate('/fx-receipt-purpose-type' + location.search);
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
      ...fxReceiptPurposeTypeEntity,
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
          ...fxReceiptPurposeTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.fxReceiptPurposeType.home.createOrEditLabel" data-cy="FxReceiptPurposeTypeCreateUpdateHeading">
            Create or edit a Fx Receipt Purpose Type
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
                <ValidatedField name="id" required readOnly id="fx-receipt-purpose-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Item Code"
                id="fx-receipt-purpose-type-itemCode"
                name="itemCode"
                data-cy="itemCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Attribute 1 Receipt Payment Purpose Code"
                id="fx-receipt-purpose-type-attribute1ReceiptPaymentPurposeCode"
                name="attribute1ReceiptPaymentPurposeCode"
                data-cy="attribute1ReceiptPaymentPurposeCode"
                type="text"
              />
              <ValidatedField
                label="Attribute 1 Receipt Payment Purpose Type"
                id="fx-receipt-purpose-type-attribute1ReceiptPaymentPurposeType"
                name="attribute1ReceiptPaymentPurposeType"
                data-cy="attribute1ReceiptPaymentPurposeType"
                type="text"
              />
              <ValidatedField
                label="Attribute 2 Receipt Payment Purpose Code"
                id="fx-receipt-purpose-type-attribute2ReceiptPaymentPurposeCode"
                name="attribute2ReceiptPaymentPurposeCode"
                data-cy="attribute2ReceiptPaymentPurposeCode"
                type="text"
              />
              <ValidatedField
                label="Attribute 2 Receipt Payment Purpose Description"
                id="fx-receipt-purpose-type-attribute2ReceiptPaymentPurposeDescription"
                name="attribute2ReceiptPaymentPurposeDescription"
                data-cy="attribute2ReceiptPaymentPurposeDescription"
                type="text"
              />
              <ValidatedField
                label="Attribute 3 Receipt Payment Purpose Code"
                id="fx-receipt-purpose-type-attribute3ReceiptPaymentPurposeCode"
                name="attribute3ReceiptPaymentPurposeCode"
                data-cy="attribute3ReceiptPaymentPurposeCode"
                type="text"
              />
              <ValidatedField
                label="Attribute 3 Receipt Payment Purpose Description"
                id="fx-receipt-purpose-type-attribute3ReceiptPaymentPurposeDescription"
                name="attribute3ReceiptPaymentPurposeDescription"
                data-cy="attribute3ReceiptPaymentPurposeDescription"
                type="text"
              />
              <ValidatedField
                label="Attribute 4 Receipt Payment Purpose Code"
                id="fx-receipt-purpose-type-attribute4ReceiptPaymentPurposeCode"
                name="attribute4ReceiptPaymentPurposeCode"
                data-cy="attribute4ReceiptPaymentPurposeCode"
                type="text"
              />
              <ValidatedField
                label="Attribute 4 Receipt Payment Purpose Description"
                id="fx-receipt-purpose-type-attribute4ReceiptPaymentPurposeDescription"
                name="attribute4ReceiptPaymentPurposeDescription"
                data-cy="attribute4ReceiptPaymentPurposeDescription"
                type="text"
              />
              <ValidatedField
                label="Attribute 5 Receipt Payment Purpose Code"
                id="fx-receipt-purpose-type-attribute5ReceiptPaymentPurposeCode"
                name="attribute5ReceiptPaymentPurposeCode"
                data-cy="attribute5ReceiptPaymentPurposeCode"
                type="text"
              />
              <ValidatedField
                label="Attribute 5 Receipt Payment Purpose Description"
                id="fx-receipt-purpose-type-attribute5ReceiptPaymentPurposeDescription"
                name="attribute5ReceiptPaymentPurposeDescription"
                data-cy="attribute5ReceiptPaymentPurposeDescription"
                type="text"
              />
              <ValidatedField label="Last Child" id="fx-receipt-purpose-type-lastChild" name="lastChild" data-cy="lastChild" type="text" />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/fx-receipt-purpose-type" replace color="info">
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

export default FxReceiptPurposeTypeUpdate;
