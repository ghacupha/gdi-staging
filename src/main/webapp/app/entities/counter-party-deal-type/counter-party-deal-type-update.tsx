import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICounterPartyDealType } from 'app/shared/model/counter-party-deal-type.model';
import { getEntity, updateEntity, createEntity, reset } from './counter-party-deal-type.reducer';

export const CounterPartyDealTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const counterPartyDealTypeEntity = useAppSelector(state => state.counterPartyDealType.entity);
  const loading = useAppSelector(state => state.counterPartyDealType.loading);
  const updating = useAppSelector(state => state.counterPartyDealType.updating);
  const updateSuccess = useAppSelector(state => state.counterPartyDealType.updateSuccess);

  const handleClose = () => {
    navigate('/counter-party-deal-type' + location.search);
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
      ...counterPartyDealTypeEntity,
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
          ...counterPartyDealTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.counterPartyDealType.home.createOrEditLabel" data-cy="CounterPartyDealTypeCreateUpdateHeading">
            Create or edit a Counter Party Deal Type
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
                <ValidatedField name="id" required readOnly id="counter-party-deal-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Counterparty Deal Code"
                id="counter-party-deal-type-counterpartyDealCode"
                name="counterpartyDealCode"
                data-cy="counterpartyDealCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Counterparty Deal Type Details"
                id="counter-party-deal-type-counterpartyDealTypeDetails"
                name="counterpartyDealTypeDetails"
                data-cy="counterpartyDealTypeDetails"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Counterparty Deal Type Description"
                id="counter-party-deal-type-counterpartyDealTypeDescription"
                name="counterpartyDealTypeDescription"
                data-cy="counterpartyDealTypeDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/counter-party-deal-type" replace color="info">
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

export default CounterPartyDealTypeUpdate;
