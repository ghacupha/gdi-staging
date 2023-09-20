import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ILoanAccountCategory } from 'app/shared/model/loan-account-category.model';
import { LoanAccountMutationTypes } from 'app/shared/model/enumerations/loan-account-mutation-types.model';
import { getEntity, updateEntity, createEntity, reset } from './loan-account-category.reducer';

export const LoanAccountCategoryUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const loanAccountCategoryEntity = useAppSelector(state => state.loanAccountCategory.entity);
  const loading = useAppSelector(state => state.loanAccountCategory.loading);
  const updating = useAppSelector(state => state.loanAccountCategory.updating);
  const updateSuccess = useAppSelector(state => state.loanAccountCategory.updateSuccess);
  const loanAccountMutationTypesValues = Object.keys(LoanAccountMutationTypes);

  const handleClose = () => {
    navigate('/loan-account-category' + location.search);
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
      ...loanAccountCategoryEntity,
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
          loanAccountMutationType: 'RESTRUCTURED',
          ...loanAccountCategoryEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.loanAccountCategory.home.createOrEditLabel" data-cy="LoanAccountCategoryCreateUpdateHeading">
            Create or edit a Loan Account Category
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
                <ValidatedField name="id" required readOnly id="loan-account-category-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Loan Account Mutation Code"
                id="loan-account-category-loanAccountMutationCode"
                name="loanAccountMutationCode"
                data-cy="loanAccountMutationCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Loan Account Mutation Type"
                id="loan-account-category-loanAccountMutationType"
                name="loanAccountMutationType"
                data-cy="loanAccountMutationType"
                type="select"
              >
                {loanAccountMutationTypesValues.map(loanAccountMutationTypes => (
                  <option value={loanAccountMutationTypes} key={loanAccountMutationTypes}>
                    {loanAccountMutationTypes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Loan Account Mutation Details"
                id="loan-account-category-loanAccountMutationDetails"
                name="loanAccountMutationDetails"
                data-cy="loanAccountMutationDetails"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Loan Account Mutation Description"
                id="loan-account-category-loanAccountMutationDescription"
                name="loanAccountMutationDescription"
                data-cy="loanAccountMutationDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/loan-account-category" replace color="info">
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

export default LoanAccountCategoryUpdate;
