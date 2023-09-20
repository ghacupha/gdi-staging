import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IGlMapping } from 'app/shared/model/gl-mapping.model';
import { getEntity, updateEntity, createEntity, reset } from './gl-mapping.reducer';

export const GlMappingUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const glMappingEntity = useAppSelector(state => state.glMapping.entity);
  const loading = useAppSelector(state => state.glMapping.loading);
  const updating = useAppSelector(state => state.glMapping.updating);
  const updateSuccess = useAppSelector(state => state.glMapping.updateSuccess);

  const handleClose = () => {
    navigate('/gl-mapping' + location.search);
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
      ...glMappingEntity,
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
          ...glMappingEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.glMapping.home.createOrEditLabel" data-cy="GlMappingCreateUpdateHeading">
            Create or edit a Gl Mapping
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="gl-mapping-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Sub GL Code"
                id="gl-mapping-subGLCode"
                name="subGLCode"
                data-cy="subGLCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Sub GL Description"
                id="gl-mapping-subGLDescription"
                name="subGLDescription"
                data-cy="subGLDescription"
                type="text"
              />
              <ValidatedField
                label="Main GL Code"
                id="gl-mapping-mainGLCode"
                name="mainGLCode"
                data-cy="mainGLCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Main GL Description"
                id="gl-mapping-mainGLDescription"
                name="mainGLDescription"
                data-cy="mainGLDescription"
                type="text"
              />
              <ValidatedField
                label="Gl Type"
                id="gl-mapping-glType"
                name="glType"
                data-cy="glType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/gl-mapping" replace color="info">
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

export default GlMappingUpdate;
