import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ILoanDeclineReason } from 'app/shared/model/loan-decline-reason.model';
import { getEntity, updateEntity, createEntity, reset } from './loan-decline-reason.reducer';

export const LoanDeclineReasonUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const loanDeclineReasonEntity = useAppSelector(state => state.loanDeclineReason.entity);
  const loading = useAppSelector(state => state.loanDeclineReason.loading);
  const updating = useAppSelector(state => state.loanDeclineReason.updating);
  const updateSuccess = useAppSelector(state => state.loanDeclineReason.updateSuccess);

  const handleClose = () => {
    navigate('/loan-decline-reason' + location.search);
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
      ...loanDeclineReasonEntity,
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
          ...loanDeclineReasonEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.loanDeclineReason.home.createOrEditLabel" data-cy="LoanDeclineReasonCreateUpdateHeading">
            Create or edit a Loan Decline Reason
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
                <ValidatedField name="id" required readOnly id="loan-decline-reason-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Loan Decline Reason Type Code"
                id="loan-decline-reason-loanDeclineReasonTypeCode"
                name="loanDeclineReasonTypeCode"
                data-cy="loanDeclineReasonTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Loan Decline Reason Type"
                id="loan-decline-reason-loanDeclineReasonType"
                name="loanDeclineReasonType"
                data-cy="loanDeclineReasonType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Loan Decline Reason Details"
                id="loan-decline-reason-loanDeclineReasonDetails"
                name="loanDeclineReasonDetails"
                data-cy="loanDeclineReasonDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/loan-decline-reason" replace color="info">
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

export default LoanDeclineReasonUpdate;
