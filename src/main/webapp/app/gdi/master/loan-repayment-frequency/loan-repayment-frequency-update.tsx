import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ILoanRepaymentFrequency } from 'app/shared/model/loan-repayment-frequency.model';
import { getEntity, updateEntity, createEntity, reset } from './loan-repayment-frequency.reducer';

export const LoanRepaymentFrequencyUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const loanRepaymentFrequencyEntity = useAppSelector(state => state.loanRepaymentFrequency.entity);
  const loading = useAppSelector(state => state.loanRepaymentFrequency.loading);
  const updating = useAppSelector(state => state.loanRepaymentFrequency.updating);
  const updateSuccess = useAppSelector(state => state.loanRepaymentFrequency.updateSuccess);

  const handleClose = () => {
    navigate('/loan-repayment-frequency' + location.search);
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
      ...loanRepaymentFrequencyEntity,
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
          ...loanRepaymentFrequencyEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.loanRepaymentFrequency.home.createOrEditLabel" data-cy="LoanRepaymentFrequencyCreateUpdateHeading">
            Create or edit a Loan Repayment Frequency
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
                <ValidatedField name="id" required readOnly id="loan-repayment-frequency-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Frequency Type Code"
                id="loan-repayment-frequency-frequencyTypeCode"
                name="frequencyTypeCode"
                data-cy="frequencyTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Frequency Type"
                id="loan-repayment-frequency-frequencyType"
                name="frequencyType"
                data-cy="frequencyType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Frequency Type Details"
                id="loan-repayment-frequency-frequencyTypeDetails"
                name="frequencyTypeDetails"
                data-cy="frequencyTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/loan-repayment-frequency" replace color="info">
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

export default LoanRepaymentFrequencyUpdate;
