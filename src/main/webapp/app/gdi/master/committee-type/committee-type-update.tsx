import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICommitteeType } from 'app/shared/model/committee-type.model';
import { getEntity, updateEntity, createEntity, reset } from './committee-type.reducer';

export const CommitteeTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const committeeTypeEntity = useAppSelector(state => state.committeeType.entity);
  const loading = useAppSelector(state => state.committeeType.loading);
  const updating = useAppSelector(state => state.committeeType.updating);
  const updateSuccess = useAppSelector(state => state.committeeType.updateSuccess);

  const handleClose = () => {
    navigate('/committee-type' + location.search);
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
      ...committeeTypeEntity,
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
          ...committeeTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.committeeType.home.createOrEditLabel" data-cy="CommitteeTypeCreateUpdateHeading">
            Create or edit a Committee Type
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
                <ValidatedField name="id" required readOnly id="committee-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Committee Type Code"
                id="committee-type-committeeTypeCode"
                name="committeeTypeCode"
                data-cy="committeeTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Committee Type"
                id="committee-type-committeeType"
                name="committeeType"
                data-cy="committeeType"
                type="text"
              />
              <ValidatedField
                label="Committee Type Details"
                id="committee-type-committeeTypeDetails"
                name="committeeTypeDetails"
                data-cy="committeeTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/committee-type" replace color="info">
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

export default CommitteeTypeUpdate;
