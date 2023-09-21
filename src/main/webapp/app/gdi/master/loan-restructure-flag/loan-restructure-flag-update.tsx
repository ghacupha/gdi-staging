import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ILoanRestructureFlag } from 'app/shared/model/loan-restructure-flag.model';
import { FlagCodes } from 'app/shared/model/enumerations/flag-codes.model';
import { getEntity, updateEntity, createEntity, reset } from './loan-restructure-flag.reducer';

export const LoanRestructureFlagUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const loanRestructureFlagEntity = useAppSelector(state => state.loanRestructureFlag.entity);
  const loading = useAppSelector(state => state.loanRestructureFlag.loading);
  const updating = useAppSelector(state => state.loanRestructureFlag.updating);
  const updateSuccess = useAppSelector(state => state.loanRestructureFlag.updateSuccess);
  const flagCodesValues = Object.keys(FlagCodes);

  const handleClose = () => {
    navigate('/loan-restructure-flag' + location.search);
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
      ...loanRestructureFlagEntity,
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
          loanRestructureFlagCode: 'Y',
          ...loanRestructureFlagEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.loanRestructureFlag.home.createOrEditLabel" data-cy="LoanRestructureFlagCreateUpdateHeading">
            Create or edit a Loan Restructure Flag
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
                <ValidatedField name="id" required readOnly id="loan-restructure-flag-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Loan Restructure Flag Code"
                id="loan-restructure-flag-loanRestructureFlagCode"
                name="loanRestructureFlagCode"
                data-cy="loanRestructureFlagCode"
                type="select"
              >
                {flagCodesValues.map(flagCodes => (
                  <option value={flagCodes} key={flagCodes}>
                    {flagCodes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Loan Restructure Flag Type"
                id="loan-restructure-flag-loanRestructureFlagType"
                name="loanRestructureFlagType"
                data-cy="loanRestructureFlagType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Loan Restructure Flag Details"
                id="loan-restructure-flag-loanRestructureFlagDetails"
                name="loanRestructureFlagDetails"
                data-cy="loanRestructureFlagDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/loan-restructure-flag" replace color="info">
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

export default LoanRestructureFlagUpdate;
