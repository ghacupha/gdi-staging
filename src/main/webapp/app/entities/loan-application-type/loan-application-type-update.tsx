import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ILoanApplicationType } from 'app/shared/model/loan-application-type.model';
import { getEntity, updateEntity, createEntity, reset } from './loan-application-type.reducer';

export const LoanApplicationTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const loanApplicationTypeEntity = useAppSelector(state => state.loanApplicationType.entity);
  const loading = useAppSelector(state => state.loanApplicationType.loading);
  const updating = useAppSelector(state => state.loanApplicationType.updating);
  const updateSuccess = useAppSelector(state => state.loanApplicationType.updateSuccess);

  const handleClose = () => {
    navigate('/loan-application-type' + location.search);
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
      ...loanApplicationTypeEntity,
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
          ...loanApplicationTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.loanApplicationType.home.createOrEditLabel" data-cy="LoanApplicationTypeCreateUpdateHeading">
            Create or edit a Loan Application Type
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
                <ValidatedField name="id" required readOnly id="loan-application-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Loan Application Type Code"
                id="loan-application-type-loanApplicationTypeCode"
                name="loanApplicationTypeCode"
                data-cy="loanApplicationTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Loan Application Type"
                id="loan-application-type-loanApplicationType"
                name="loanApplicationType"
                data-cy="loanApplicationType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Loan Application Details"
                id="loan-application-type-loanApplicationDetails"
                name="loanApplicationDetails"
                data-cy="loanApplicationDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/loan-application-type" replace color="info">
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

export default LoanApplicationTypeUpdate;
