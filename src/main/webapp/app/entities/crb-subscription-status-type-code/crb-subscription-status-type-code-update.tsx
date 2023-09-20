import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbSubscriptionStatusTypeCode } from 'app/shared/model/crb-subscription-status-type-code.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-subscription-status-type-code.reducer';

export const CrbSubscriptionStatusTypeCodeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbSubscriptionStatusTypeCodeEntity = useAppSelector(state => state.crbSubscriptionStatusTypeCode.entity);
  const loading = useAppSelector(state => state.crbSubscriptionStatusTypeCode.loading);
  const updating = useAppSelector(state => state.crbSubscriptionStatusTypeCode.updating);
  const updateSuccess = useAppSelector(state => state.crbSubscriptionStatusTypeCode.updateSuccess);

  const handleClose = () => {
    navigate('/crb-subscription-status-type-code' + location.search);
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
      ...crbSubscriptionStatusTypeCodeEntity,
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
          ...crbSubscriptionStatusTypeCodeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="gdiStagingApp.crbSubscriptionStatusTypeCode.home.createOrEditLabel"
            data-cy="CrbSubscriptionStatusTypeCodeCreateUpdateHeading"
          >
            Create or edit a Crb Subscription Status Type Code
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
                  id="crb-subscription-status-type-code-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Subscription Status Type Code"
                id="crb-subscription-status-type-code-subscriptionStatusTypeCode"
                name="subscriptionStatusTypeCode"
                data-cy="subscriptionStatusTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Subscription Status Type"
                id="crb-subscription-status-type-code-subscriptionStatusType"
                name="subscriptionStatusType"
                data-cy="subscriptionStatusType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Subscription Status Type Description"
                id="crb-subscription-status-type-code-subscriptionStatusTypeDescription"
                name="subscriptionStatusTypeDescription"
                data-cy="subscriptionStatusTypeDescription"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/crb-subscription-status-type-code"
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

export default CrbSubscriptionStatusTypeCodeUpdate;
