import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICounterPartyCategory } from 'app/shared/model/counter-party-category.model';
import { CounterpartyCategory } from 'app/shared/model/enumerations/counterparty-category.model';
import { getEntity, updateEntity, createEntity, reset } from './counter-party-category.reducer';

export const CounterPartyCategoryUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const counterPartyCategoryEntity = useAppSelector(state => state.counterPartyCategory.entity);
  const loading = useAppSelector(state => state.counterPartyCategory.loading);
  const updating = useAppSelector(state => state.counterPartyCategory.updating);
  const updateSuccess = useAppSelector(state => state.counterPartyCategory.updateSuccess);
  const counterpartyCategoryValues = Object.keys(CounterpartyCategory);

  const handleClose = () => {
    navigate('/counter-party-category' + location.search);
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
      ...counterPartyCategoryEntity,
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
          counterpartyCategoryCodeDetails: 'LOCAL',
          ...counterPartyCategoryEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.counterPartyCategory.home.createOrEditLabel" data-cy="CounterPartyCategoryCreateUpdateHeading">
            Create or edit a Counter Party Category
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
                <ValidatedField name="id" required readOnly id="counter-party-category-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Counterparty Category Code"
                id="counter-party-category-counterpartyCategoryCode"
                name="counterpartyCategoryCode"
                data-cy="counterpartyCategoryCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Counterparty Category Code Details"
                id="counter-party-category-counterpartyCategoryCodeDetails"
                name="counterpartyCategoryCodeDetails"
                data-cy="counterpartyCategoryCodeDetails"
                type="select"
              >
                {counterpartyCategoryValues.map(counterpartyCategory => (
                  <option value={counterpartyCategory} key={counterpartyCategory}>
                    {counterpartyCategory}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Counterparty Category Description"
                id="counter-party-category-counterpartyCategoryDescription"
                name="counterpartyCategoryDescription"
                data-cy="counterpartyCategoryDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/counter-party-category" replace color="info">
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

export default CounterPartyCategoryUpdate;
