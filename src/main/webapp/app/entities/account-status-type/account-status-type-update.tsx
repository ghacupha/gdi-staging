import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAccountStatusType } from 'app/shared/model/account-status-type.model';
import { AccountStatusTypes } from 'app/shared/model/enumerations/account-status-types.model';
import { getEntity, updateEntity, createEntity, reset } from './account-status-type.reducer';

export const AccountStatusTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const accountStatusTypeEntity = useAppSelector(state => state.accountStatusType.entity);
  const loading = useAppSelector(state => state.accountStatusType.loading);
  const updating = useAppSelector(state => state.accountStatusType.updating);
  const updateSuccess = useAppSelector(state => state.accountStatusType.updateSuccess);
  const accountStatusTypesValues = Object.keys(AccountStatusTypes);

  const handleClose = () => {
    navigate('/account-status-type' + location.search);
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
      ...accountStatusTypeEntity,
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
          accountStatusType: 'ACTIVE',
          ...accountStatusTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.accountStatusType.home.createOrEditLabel" data-cy="AccountStatusTypeCreateUpdateHeading">
            Create or edit a Account Status Type
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
                <ValidatedField name="id" required readOnly id="account-status-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Account Status Code"
                id="account-status-type-accountStatusCode"
                name="accountStatusCode"
                data-cy="accountStatusCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Account Status Type"
                id="account-status-type-accountStatusType"
                name="accountStatusType"
                data-cy="accountStatusType"
                type="select"
              >
                {accountStatusTypesValues.map(accountStatusTypes => (
                  <option value={accountStatusTypes} key={accountStatusTypes}>
                    {accountStatusTypes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Account Status Description"
                id="account-status-type-accountStatusDescription"
                name="accountStatusDescription"
                data-cy="accountStatusDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/account-status-type" replace color="info">
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

export default AccountStatusTypeUpdate;
