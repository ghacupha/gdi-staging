import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPlaceholder } from 'app/shared/model/service/placeholder.model';
import { getEntities as getPlaceholders } from 'app/entities/service/placeholder/placeholder.reducer';
import { ICustomerIDDocumentType } from 'app/shared/model/standards/customer-id-document-type.model';
import { getEntity, updateEntity, createEntity, reset } from './customer-id-document-type.reducer';

export const CustomerIDDocumentTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const placeholders = useAppSelector(state => state.placeholder.entities);
  const customerIDDocumentTypeEntity = useAppSelector(state => state.customerIDDocumentType.entity);
  const loading = useAppSelector(state => state.customerIDDocumentType.loading);
  const updating = useAppSelector(state => state.customerIDDocumentType.updating);
  const updateSuccess = useAppSelector(state => state.customerIDDocumentType.updateSuccess);

  const handleClose = () => {
    navigate('/customer-id-document-type' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getPlaceholders({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...customerIDDocumentTypeEntity,
      ...values,
      placeholders: mapIdList(values.placeholders),
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
          ...customerIDDocumentTypeEntity,
          placeholders: customerIDDocumentTypeEntity?.placeholders?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.standardsCustomerIdDocumentType.home.createOrEditLabel" data-cy="CustomerIDDocumentTypeCreateUpdateHeading">
            Create or edit a Customer ID Document Type
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
                <ValidatedField name="id" required readOnly id="customer-id-document-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Document Code"
                id="customer-id-document-type-documentCode"
                name="documentCode"
                data-cy="documentCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Document Type"
                id="customer-id-document-type-documentType"
                name="documentType"
                data-cy="documentType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Document Type Description"
                id="customer-id-document-type-documentTypeDescription"
                name="documentTypeDescription"
                data-cy="documentTypeDescription"
                type="text"
              />
              <ValidatedField
                label="Placeholder"
                id="customer-id-document-type-placeholder"
                data-cy="placeholder"
                type="select"
                multiple
                name="placeholders"
              >
                <option value="" key="0" />
                {placeholders
                  ? placeholders.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.description}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/customer-id-document-type" replace color="info">
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

export default CustomerIDDocumentTypeUpdate;
