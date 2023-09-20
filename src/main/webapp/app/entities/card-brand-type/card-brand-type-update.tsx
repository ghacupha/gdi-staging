import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICardBrandType } from 'app/shared/model/card-brand-type.model';
import { getEntity, updateEntity, createEntity, reset } from './card-brand-type.reducer';

export const CardBrandTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const cardBrandTypeEntity = useAppSelector(state => state.cardBrandType.entity);
  const loading = useAppSelector(state => state.cardBrandType.loading);
  const updating = useAppSelector(state => state.cardBrandType.updating);
  const updateSuccess = useAppSelector(state => state.cardBrandType.updateSuccess);

  const handleClose = () => {
    navigate('/card-brand-type' + location.search);
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
      ...cardBrandTypeEntity,
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
          ...cardBrandTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.cardBrandType.home.createOrEditLabel" data-cy="CardBrandTypeCreateUpdateHeading">
            Create or edit a Card Brand Type
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
                <ValidatedField name="id" required readOnly id="card-brand-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Card Brand Type Code"
                id="card-brand-type-cardBrandTypeCode"
                name="cardBrandTypeCode"
                data-cy="cardBrandTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Card Brand Type"
                id="card-brand-type-cardBrandType"
                name="cardBrandType"
                data-cy="cardBrandType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Card Brand Type Details"
                id="card-brand-type-cardBrandTypeDetails"
                name="cardBrandTypeDetails"
                data-cy="cardBrandTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/card-brand-type" replace color="info">
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

export default CardBrandTypeUpdate;
