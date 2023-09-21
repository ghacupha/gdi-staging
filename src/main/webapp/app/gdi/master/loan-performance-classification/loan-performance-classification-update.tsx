import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ILoanPerformanceClassification } from 'app/shared/model/loan-performance-classification.model';
import { getEntity, updateEntity, createEntity, reset } from './loan-performance-classification.reducer';

export const LoanPerformanceClassificationUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const loanPerformanceClassificationEntity = useAppSelector(state => state.loanPerformanceClassification.entity);
  const loading = useAppSelector(state => state.loanPerformanceClassification.loading);
  const updating = useAppSelector(state => state.loanPerformanceClassification.updating);
  const updateSuccess = useAppSelector(state => state.loanPerformanceClassification.updateSuccess);

  const handleClose = () => {
    navigate('/loan-performance-classification' + location.search);
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
      ...loanPerformanceClassificationEntity,
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
          ...loanPerformanceClassificationEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="gdiStagingApp.loanPerformanceClassification.home.createOrEditLabel"
            data-cy="LoanPerformanceClassificationCreateUpdateHeading"
          >
            Create or edit a Loan Performance Classification
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
                  id="loan-performance-classification-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Loan Performance Classification Code"
                id="loan-performance-classification-loanPerformanceClassificationCode"
                name="loanPerformanceClassificationCode"
                data-cy="loanPerformanceClassificationCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Loan Performance Classification Type"
                id="loan-performance-classification-loanPerformanceClassificationType"
                name="loanPerformanceClassificationType"
                data-cy="loanPerformanceClassificationType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Commercial Bank Description"
                id="loan-performance-classification-commercialBankDescription"
                name="commercialBankDescription"
                data-cy="commercialBankDescription"
                type="textarea"
              />
              <ValidatedField
                label="Microfinance Description"
                id="loan-performance-classification-microfinanceDescription"
                name="microfinanceDescription"
                data-cy="microfinanceDescription"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/loan-performance-classification"
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

export default LoanPerformanceClassificationUpdate;
