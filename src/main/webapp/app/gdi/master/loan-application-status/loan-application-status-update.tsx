import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ILoanApplicationStatus } from 'app/shared/model/loan-application-status.model';
import { getEntity, updateEntity, createEntity, reset } from './loan-application-status.reducer';

export const LoanApplicationStatusUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const loanApplicationStatusEntity = useAppSelector(state => state.loanApplicationStatus.entity);
  const loading = useAppSelector(state => state.loanApplicationStatus.loading);
  const updating = useAppSelector(state => state.loanApplicationStatus.updating);
  const updateSuccess = useAppSelector(state => state.loanApplicationStatus.updateSuccess);

  const handleClose = () => {
    navigate('/loan-application-status' + location.search);
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
      ...loanApplicationStatusEntity,
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
          ...loanApplicationStatusEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.loanApplicationStatus.home.createOrEditLabel" data-cy="LoanApplicationStatusCreateUpdateHeading">
            Create or edit a Loan Application Status
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
                <ValidatedField name="id" required readOnly id="loan-application-status-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Loan Application Status Type Code"
                id="loan-application-status-loanApplicationStatusTypeCode"
                name="loanApplicationStatusTypeCode"
                data-cy="loanApplicationStatusTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Loan Application Status Type"
                id="loan-application-status-loanApplicationStatusType"
                name="loanApplicationStatusType"
                data-cy="loanApplicationStatusType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Loan Application Status Details"
                id="loan-application-status-loanApplicationStatusDetails"
                name="loanApplicationStatusDetails"
                data-cy="loanApplicationStatusDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/loan-application-status" replace color="info">
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

export default LoanApplicationStatusUpdate;
