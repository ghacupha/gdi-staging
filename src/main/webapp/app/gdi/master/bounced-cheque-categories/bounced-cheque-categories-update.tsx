import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IBouncedChequeCategories } from 'app/shared/model/bounced-cheque-categories.model';
import { getEntity, updateEntity, createEntity, reset } from './bounced-cheque-categories.reducer';

export const BouncedChequeCategoriesUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const bouncedChequeCategoriesEntity = useAppSelector(state => state.bouncedChequeCategories.entity);
  const loading = useAppSelector(state => state.bouncedChequeCategories.loading);
  const updating = useAppSelector(state => state.bouncedChequeCategories.updating);
  const updateSuccess = useAppSelector(state => state.bouncedChequeCategories.updateSuccess);

  const handleClose = () => {
    navigate('/bounced-cheque-categories' + location.search);
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
      ...bouncedChequeCategoriesEntity,
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
          ...bouncedChequeCategoriesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.bouncedChequeCategories.home.createOrEditLabel" data-cy="BouncedChequeCategoriesCreateUpdateHeading">
            Create or edit a Bounced Cheque Categories
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
                <ValidatedField name="id" required readOnly id="bounced-cheque-categories-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Bounced Cheque Category Type Code"
                id="bounced-cheque-categories-bouncedChequeCategoryTypeCode"
                name="bouncedChequeCategoryTypeCode"
                data-cy="bouncedChequeCategoryTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Bounced Cheque Category Type"
                id="bounced-cheque-categories-bouncedChequeCategoryType"
                name="bouncedChequeCategoryType"
                data-cy="bouncedChequeCategoryType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/bounced-cheque-categories" replace color="info">
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

export default BouncedChequeCategoriesUpdate;
