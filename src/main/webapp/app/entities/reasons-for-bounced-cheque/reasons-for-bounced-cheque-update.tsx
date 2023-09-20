import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IReasonsForBouncedCheque } from 'app/shared/model/reasons-for-bounced-cheque.model';
import { getEntity, updateEntity, createEntity, reset } from './reasons-for-bounced-cheque.reducer';

export const ReasonsForBouncedChequeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const reasonsForBouncedChequeEntity = useAppSelector(state => state.reasonsForBouncedCheque.entity);
  const loading = useAppSelector(state => state.reasonsForBouncedCheque.loading);
  const updating = useAppSelector(state => state.reasonsForBouncedCheque.updating);
  const updateSuccess = useAppSelector(state => state.reasonsForBouncedCheque.updateSuccess);

  const handleClose = () => {
    navigate('/reasons-for-bounced-cheque' + location.search);
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
      ...reasonsForBouncedChequeEntity,
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
          ...reasonsForBouncedChequeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.reasonsForBouncedCheque.home.createOrEditLabel" data-cy="ReasonsForBouncedChequeCreateUpdateHeading">
            Create or edit a Reasons For Bounced Cheque
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
                <ValidatedField name="id" required readOnly id="reasons-for-bounced-cheque-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Bounced Cheque Reasons Type Code"
                id="reasons-for-bounced-cheque-bouncedChequeReasonsTypeCode"
                name="bouncedChequeReasonsTypeCode"
                data-cy="bouncedChequeReasonsTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Bounced Cheque Reasons Type"
                id="reasons-for-bounced-cheque-bouncedChequeReasonsType"
                name="bouncedChequeReasonsType"
                data-cy="bouncedChequeReasonsType"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/reasons-for-bounced-cheque" replace color="info">
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

export default ReasonsForBouncedChequeUpdate;
