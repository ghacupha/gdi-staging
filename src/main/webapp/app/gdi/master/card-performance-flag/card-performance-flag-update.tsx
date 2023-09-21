import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICardPerformanceFlag } from 'app/shared/model/card-performance-flag.model';
import { CardPerformanceFlags } from 'app/shared/model/enumerations/card-performance-flags.model';
import { getEntity, updateEntity, createEntity, reset } from './card-performance-flag.reducer';

export const CardPerformanceFlagUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const cardPerformanceFlagEntity = useAppSelector(state => state.cardPerformanceFlag.entity);
  const loading = useAppSelector(state => state.cardPerformanceFlag.loading);
  const updating = useAppSelector(state => state.cardPerformanceFlag.updating);
  const updateSuccess = useAppSelector(state => state.cardPerformanceFlag.updateSuccess);
  const cardPerformanceFlagsValues = Object.keys(CardPerformanceFlags);

  const handleClose = () => {
    navigate('/card-performance-flag' + location.search);
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
      ...cardPerformanceFlagEntity,
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
          cardPerformanceFlag: 'Y',
          ...cardPerformanceFlagEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.cardPerformanceFlag.home.createOrEditLabel" data-cy="CardPerformanceFlagCreateUpdateHeading">
            Create or edit a Card Performance Flag
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
                <ValidatedField name="id" required readOnly id="card-performance-flag-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Card Performance Flag"
                id="card-performance-flag-cardPerformanceFlag"
                name="cardPerformanceFlag"
                data-cy="cardPerformanceFlag"
                type="select"
              >
                {cardPerformanceFlagsValues.map(cardPerformanceFlags => (
                  <option value={cardPerformanceFlags} key={cardPerformanceFlags}>
                    {cardPerformanceFlags}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Card Performance Flag Description"
                id="card-performance-flag-cardPerformanceFlagDescription"
                name="cardPerformanceFlagDescription"
                data-cy="cardPerformanceFlagDescription"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Card Performance Flag Details"
                id="card-performance-flag-cardPerformanceFlagDetails"
                name="cardPerformanceFlagDetails"
                data-cy="cardPerformanceFlagDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/card-performance-flag" replace color="info">
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

export default CardPerformanceFlagUpdate;
