import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICounterpartyType } from 'app/shared/model/counterparty-type.model';
import { getEntity, updateEntity, createEntity, reset } from './counterparty-type.reducer';

export const CounterpartyTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const counterpartyTypeEntity = useAppSelector(state => state.counterpartyType.entity);
  const loading = useAppSelector(state => state.counterpartyType.loading);
  const updating = useAppSelector(state => state.counterpartyType.updating);
  const updateSuccess = useAppSelector(state => state.counterpartyType.updateSuccess);

  const handleClose = () => {
    navigate('/counterparty-type' + location.search);
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
      ...counterpartyTypeEntity,
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
          ...counterpartyTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.counterpartyType.home.createOrEditLabel" data-cy="CounterpartyTypeCreateUpdateHeading">
            Create or edit a Counterparty Type
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
                <ValidatedField name="id" required readOnly id="counterparty-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Counterparty Type Code"
                id="counterparty-type-counterpartyTypeCode"
                name="counterpartyTypeCode"
                data-cy="counterpartyTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Counter Party Type"
                id="counterparty-type-counterPartyType"
                name="counterPartyType"
                data-cy="counterPartyType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Counterparty Type Description"
                id="counterparty-type-counterpartyTypeDescription"
                name="counterpartyTypeDescription"
                data-cy="counterpartyTypeDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/counterparty-type" replace color="info">
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

export default CounterpartyTypeUpdate;
