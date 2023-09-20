import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbAccountHolderType } from 'app/shared/model/crb-account-holder-type.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-account-holder-type.reducer';

export const CrbAccountHolderTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbAccountHolderTypeEntity = useAppSelector(state => state.crbAccountHolderType.entity);
  const loading = useAppSelector(state => state.crbAccountHolderType.loading);
  const updating = useAppSelector(state => state.crbAccountHolderType.updating);
  const updateSuccess = useAppSelector(state => state.crbAccountHolderType.updateSuccess);

  const handleClose = () => {
    navigate('/crb-account-holder-type' + location.search);
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
      ...crbAccountHolderTypeEntity,
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
          ...crbAccountHolderTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbAccountHolderType.home.createOrEditLabel" data-cy="CrbAccountHolderTypeCreateUpdateHeading">
            Create or edit a Crb Account Holder Type
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
                <ValidatedField name="id" required readOnly id="crb-account-holder-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Account Holder Category Type Code"
                id="crb-account-holder-type-accountHolderCategoryTypeCode"
                name="accountHolderCategoryTypeCode"
                data-cy="accountHolderCategoryTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Account Holder Category Type"
                id="crb-account-holder-type-accountHolderCategoryType"
                name="accountHolderCategoryType"
                data-cy="accountHolderCategoryType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-account-holder-type" replace color="info">
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

export default CrbAccountHolderTypeUpdate;
