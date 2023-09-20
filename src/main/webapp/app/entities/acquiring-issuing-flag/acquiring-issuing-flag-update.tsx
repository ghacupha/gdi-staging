import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAcquiringIssuingFlag } from 'app/shared/model/acquiring-issuing-flag.model';
import { getEntity, updateEntity, createEntity, reset } from './acquiring-issuing-flag.reducer';

export const AcquiringIssuingFlagUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const acquiringIssuingFlagEntity = useAppSelector(state => state.acquiringIssuingFlag.entity);
  const loading = useAppSelector(state => state.acquiringIssuingFlag.loading);
  const updating = useAppSelector(state => state.acquiringIssuingFlag.updating);
  const updateSuccess = useAppSelector(state => state.acquiringIssuingFlag.updateSuccess);

  const handleClose = () => {
    navigate('/acquiring-issuing-flag' + location.search);
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
      ...acquiringIssuingFlagEntity,
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
          ...acquiringIssuingFlagEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.acquiringIssuingFlag.home.createOrEditLabel" data-cy="AcquiringIssuingFlagCreateUpdateHeading">
            Create or edit a Acquiring Issuing Flag
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
                <ValidatedField name="id" required readOnly id="acquiring-issuing-flag-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Card Acquiring Issuing Flag Code"
                id="acquiring-issuing-flag-cardAcquiringIssuingFlagCode"
                name="cardAcquiringIssuingFlagCode"
                data-cy="cardAcquiringIssuingFlagCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Card Acquiring Issuing Description"
                id="acquiring-issuing-flag-cardAcquiringIssuingDescription"
                name="cardAcquiringIssuingDescription"
                data-cy="cardAcquiringIssuingDescription"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Card Acquiring Issuing Details"
                id="acquiring-issuing-flag-cardAcquiringIssuingDetails"
                name="cardAcquiringIssuingDetails"
                data-cy="cardAcquiringIssuingDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/acquiring-issuing-flag" replace color="info">
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

export default AcquiringIssuingFlagUpdate;
