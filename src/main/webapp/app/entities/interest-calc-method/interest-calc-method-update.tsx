import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IInterestCalcMethod } from 'app/shared/model/interest-calc-method.model';
import { getEntity, updateEntity, createEntity, reset } from './interest-calc-method.reducer';

export const InterestCalcMethodUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const interestCalcMethodEntity = useAppSelector(state => state.interestCalcMethod.entity);
  const loading = useAppSelector(state => state.interestCalcMethod.loading);
  const updating = useAppSelector(state => state.interestCalcMethod.updating);
  const updateSuccess = useAppSelector(state => state.interestCalcMethod.updateSuccess);

  const handleClose = () => {
    navigate('/interest-calc-method' + location.search);
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
      ...interestCalcMethodEntity,
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
          ...interestCalcMethodEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.interestCalcMethod.home.createOrEditLabel" data-cy="InterestCalcMethodCreateUpdateHeading">
            Create or edit a Interest Calc Method
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
                <ValidatedField name="id" required readOnly id="interest-calc-method-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Interest Calculation Method Code"
                id="interest-calc-method-interestCalculationMethodCode"
                name="interestCalculationMethodCode"
                data-cy="interestCalculationMethodCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Interest Calculation Mthod Type"
                id="interest-calc-method-interestCalculationMthodType"
                name="interestCalculationMthodType"
                data-cy="interestCalculationMthodType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Interest Calculation Method Details"
                id="interest-calc-method-interestCalculationMethodDetails"
                name="interestCalculationMethodDetails"
                data-cy="interestCalculationMethodDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/interest-calc-method" replace color="info">
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

export default InterestCalcMethodUpdate;
