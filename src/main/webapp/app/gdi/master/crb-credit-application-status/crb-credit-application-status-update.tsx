import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbCreditApplicationStatus } from 'app/shared/model/crb-credit-application-status.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-credit-application-status.reducer';

export const CrbCreditApplicationStatusUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbCreditApplicationStatusEntity = useAppSelector(state => state.crbCreditApplicationStatus.entity);
  const loading = useAppSelector(state => state.crbCreditApplicationStatus.loading);
  const updating = useAppSelector(state => state.crbCreditApplicationStatus.updating);
  const updateSuccess = useAppSelector(state => state.crbCreditApplicationStatus.updateSuccess);

  const handleClose = () => {
    navigate('/crb-credit-application-status' + location.search);
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
      ...crbCreditApplicationStatusEntity,
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
          ...crbCreditApplicationStatusEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbCreditApplicationStatus.home.createOrEditLabel" data-cy="CrbCreditApplicationStatusCreateUpdateHeading">
            Create or edit a Crb Credit Application Status
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
                  id="crb-credit-application-status-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Crb Credit Application Status Type Code"
                id="crb-credit-application-status-crbCreditApplicationStatusTypeCode"
                name="crbCreditApplicationStatusTypeCode"
                data-cy="crbCreditApplicationStatusTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Crb Credit Application Status Type"
                id="crb-credit-application-status-crbCreditApplicationStatusType"
                name="crbCreditApplicationStatusType"
                data-cy="crbCreditApplicationStatusType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Crb Credit Application Status Details"
                id="crb-credit-application-status-crbCreditApplicationStatusDetails"
                name="crbCreditApplicationStatusDetails"
                data-cy="crbCreditApplicationStatusDetails"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/crb-credit-application-status"
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

export default CrbCreditApplicationStatusUpdate;
