import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICardStatusFlag } from 'app/shared/model/card-status-flag.model';
import { FlagCodes } from 'app/shared/model/enumerations/flag-codes.model';
import { getEntity, updateEntity, createEntity, reset } from './card-status-flag.reducer';

export const CardStatusFlagUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const cardStatusFlagEntity = useAppSelector(state => state.cardStatusFlag.entity);
  const loading = useAppSelector(state => state.cardStatusFlag.loading);
  const updating = useAppSelector(state => state.cardStatusFlag.updating);
  const updateSuccess = useAppSelector(state => state.cardStatusFlag.updateSuccess);
  const flagCodesValues = Object.keys(FlagCodes);

  const handleClose = () => {
    navigate('/card-status-flag' + location.search);
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
      ...cardStatusFlagEntity,
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
          cardStatusFlag: 'Y',
          ...cardStatusFlagEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.cardStatusFlag.home.createOrEditLabel" data-cy="CardStatusFlagCreateUpdateHeading">
            Create or edit a Card Status Flag
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
                <ValidatedField name="id" required readOnly id="card-status-flag-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Card Status Flag"
                id="card-status-flag-cardStatusFlag"
                name="cardStatusFlag"
                data-cy="cardStatusFlag"
                type="select"
              >
                {flagCodesValues.map(flagCodes => (
                  <option value={flagCodes} key={flagCodes}>
                    {flagCodes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Card Status Flag Description"
                id="card-status-flag-cardStatusFlagDescription"
                name="cardStatusFlagDescription"
                data-cy="cardStatusFlagDescription"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Card Status Flag Details"
                id="card-status-flag-cardStatusFlagDetails"
                name="cardStatusFlagDetails"
                data-cy="cardStatusFlagDetails"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/card-status-flag" replace color="info">
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

export default CardStatusFlagUpdate;
