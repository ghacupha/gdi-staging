import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICardFraudIncidentCategory } from 'app/shared/model/card-fraud-incident-category.model';
import { getEntity, updateEntity, createEntity, reset } from './card-fraud-incident-category.reducer';

export const CardFraudIncidentCategoryUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const cardFraudIncidentCategoryEntity = useAppSelector(state => state.cardFraudIncidentCategory.entity);
  const loading = useAppSelector(state => state.cardFraudIncidentCategory.loading);
  const updating = useAppSelector(state => state.cardFraudIncidentCategory.updating);
  const updateSuccess = useAppSelector(state => state.cardFraudIncidentCategory.updateSuccess);

  const handleClose = () => {
    navigate('/card-fraud-incident-category' + location.search);
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
      ...cardFraudIncidentCategoryEntity,
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
          ...cardFraudIncidentCategoryEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.cardFraudIncidentCategory.home.createOrEditLabel" data-cy="CardFraudIncidentCategoryCreateUpdateHeading">
            Create or edit a Card Fraud Incident Category
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
                <ValidatedField name="id" required readOnly id="card-fraud-incident-category-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Card Fraud Category Type Code"
                id="card-fraud-incident-category-cardFraudCategoryTypeCode"
                name="cardFraudCategoryTypeCode"
                data-cy="cardFraudCategoryTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Card Fraud Category Type"
                id="card-fraud-incident-category-cardFraudCategoryType"
                name="cardFraudCategoryType"
                data-cy="cardFraudCategoryType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Card Fraud Category Type Description"
                id="card-fraud-incident-category-cardFraudCategoryTypeDescription"
                name="cardFraudCategoryTypeDescription"
                data-cy="cardFraudCategoryTypeDescription"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/card-fraud-incident-category"
                replace
                color="info"
              >
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

export default CardFraudIncidentCategoryUpdate;
