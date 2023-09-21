import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ILoanRestructureItem } from 'app/shared/model/loan-restructure-item.model';
import { getEntity, updateEntity, createEntity, reset } from './loan-restructure-item.reducer';

export const LoanRestructureItemUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const loanRestructureItemEntity = useAppSelector(state => state.loanRestructureItem.entity);
  const loading = useAppSelector(state => state.loanRestructureItem.loading);
  const updating = useAppSelector(state => state.loanRestructureItem.updating);
  const updateSuccess = useAppSelector(state => state.loanRestructureItem.updateSuccess);

  const handleClose = () => {
    navigate('/loan-restructure-item' + location.search);
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
      ...loanRestructureItemEntity,
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
          ...loanRestructureItemEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.loanRestructureItem.home.createOrEditLabel" data-cy="LoanRestructureItemCreateUpdateHeading">
            Create or edit a Loan Restructure Item
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
                <ValidatedField name="id" required readOnly id="loan-restructure-item-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Loan Restructure Item Code"
                id="loan-restructure-item-loanRestructureItemCode"
                name="loanRestructureItemCode"
                data-cy="loanRestructureItemCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Loan Restructure Item Type"
                id="loan-restructure-item-loanRestructureItemType"
                name="loanRestructureItemType"
                data-cy="loanRestructureItemType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Loan Restructure Item Details"
                id="loan-restructure-item-loanRestructureItemDetails"
                name="loanRestructureItemDetails"
                data-cy="loanRestructureItemDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/loan-restructure-item" replace color="info">
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

export default LoanRestructureItemUpdate;
