import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbGlCode } from 'app/shared/model/crb-gl-code.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-gl-code.reducer';

export const CrbGlCodeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbGlCodeEntity = useAppSelector(state => state.crbGlCode.entity);
  const loading = useAppSelector(state => state.crbGlCode.loading);
  const updating = useAppSelector(state => state.crbGlCode.updating);
  const updateSuccess = useAppSelector(state => state.crbGlCode.updateSuccess);

  const handleClose = () => {
    navigate('/crb-gl-code' + location.search);
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
      ...crbGlCodeEntity,
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
          ...crbGlCodeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbGlCode.home.createOrEditLabel" data-cy="CrbGlCodeCreateUpdateHeading">
            Create or edit a Crb Gl Code
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="crb-gl-code-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Gl Code"
                id="crb-gl-code-glCode"
                name="glCode"
                data-cy="glCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Gl Description"
                id="crb-gl-code-glDescription"
                name="glDescription"
                data-cy="glDescription"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Gl Type"
                id="crb-gl-code-glType"
                name="glType"
                data-cy="glType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Institution Category"
                id="crb-gl-code-institutionCategory"
                name="institutionCategory"
                data-cy="institutionCategory"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-gl-code" replace color="info">
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

export default CrbGlCodeUpdate;
