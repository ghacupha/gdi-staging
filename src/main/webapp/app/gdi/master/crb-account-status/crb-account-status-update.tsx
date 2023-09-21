import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbAccountStatus } from 'app/shared/model/crb-account-status.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-account-status.reducer';

export const CrbAccountStatusUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbAccountStatusEntity = useAppSelector(state => state.crbAccountStatus.entity);
  const loading = useAppSelector(state => state.crbAccountStatus.loading);
  const updating = useAppSelector(state => state.crbAccountStatus.updating);
  const updateSuccess = useAppSelector(state => state.crbAccountStatus.updateSuccess);

  const handleClose = () => {
    navigate('/crb-account-status' + location.search);
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
      ...crbAccountStatusEntity,
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
          ...crbAccountStatusEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbAccountStatus.home.createOrEditLabel" data-cy="CrbAccountStatusCreateUpdateHeading">
            Create or edit a Crb Account Status
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
                <ValidatedField name="id" required readOnly id="crb-account-status-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Account Status Type Code"
                id="crb-account-status-accountStatusTypeCode"
                name="accountStatusTypeCode"
                data-cy="accountStatusTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Account Status Type"
                id="crb-account-status-accountStatusType"
                name="accountStatusType"
                data-cy="accountStatusType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Account Status Type Details"
                id="crb-account-status-accountStatusTypeDetails"
                name="accountStatusTypeDetails"
                data-cy="accountStatusTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-account-status" replace color="info">
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

export default CrbAccountStatusUpdate;
