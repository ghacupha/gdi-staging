import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICreditCardOwnership } from 'app/shared/model/credit-card-ownership.model';
import { CreditCardOwnershipTypes } from 'app/shared/model/enumerations/credit-card-ownership-types.model';
import { getEntity, updateEntity, createEntity, reset } from './credit-card-ownership.reducer';

export const CreditCardOwnershipUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const creditCardOwnershipEntity = useAppSelector(state => state.creditCardOwnership.entity);
  const loading = useAppSelector(state => state.creditCardOwnership.loading);
  const updating = useAppSelector(state => state.creditCardOwnership.updating);
  const updateSuccess = useAppSelector(state => state.creditCardOwnership.updateSuccess);
  const creditCardOwnershipTypesValues = Object.keys(CreditCardOwnershipTypes);

  const handleClose = () => {
    navigate('/credit-card-ownership' + location.search);
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
      ...creditCardOwnershipEntity,
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
          creditCardOwnershipCategoryType: 'INDIVIDUAL',
          ...creditCardOwnershipEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.creditCardOwnership.home.createOrEditLabel" data-cy="CreditCardOwnershipCreateUpdateHeading">
            Create or edit a Credit Card Ownership
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
                <ValidatedField name="id" required readOnly id="credit-card-ownership-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Credit Card Ownership Category Code"
                id="credit-card-ownership-creditCardOwnershipCategoryCode"
                name="creditCardOwnershipCategoryCode"
                data-cy="creditCardOwnershipCategoryCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Credit Card Ownership Category Type"
                id="credit-card-ownership-creditCardOwnershipCategoryType"
                name="creditCardOwnershipCategoryType"
                data-cy="creditCardOwnershipCategoryType"
                type="select"
              >
                {creditCardOwnershipTypesValues.map(creditCardOwnershipTypes => (
                  <option value={creditCardOwnershipTypes} key={creditCardOwnershipTypes}>
                    {creditCardOwnershipTypes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Description"
                id="credit-card-ownership-description"
                name="description"
                data-cy="description"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/credit-card-ownership" replace color="info">
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

export default CreditCardOwnershipUpdate;
