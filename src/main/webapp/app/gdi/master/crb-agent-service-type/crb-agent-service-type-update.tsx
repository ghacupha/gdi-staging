import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbAgentServiceType } from 'app/shared/model/crb-agent-service-type.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-agent-service-type.reducer';

export const CrbAgentServiceTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbAgentServiceTypeEntity = useAppSelector(state => state.crbAgentServiceType.entity);
  const loading = useAppSelector(state => state.crbAgentServiceType.loading);
  const updating = useAppSelector(state => state.crbAgentServiceType.updating);
  const updateSuccess = useAppSelector(state => state.crbAgentServiceType.updateSuccess);

  const handleClose = () => {
    navigate('/crb-agent-service-type' + location.search);
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
      ...crbAgentServiceTypeEntity,
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
          ...crbAgentServiceTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbAgentServiceType.home.createOrEditLabel" data-cy="CrbAgentServiceTypeCreateUpdateHeading">
            Create or edit a Crb Agent Service Type
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
                <ValidatedField name="id" required readOnly id="crb-agent-service-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Agent Service Type Code"
                id="crb-agent-service-type-agentServiceTypeCode"
                name="agentServiceTypeCode"
                data-cy="agentServiceTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Agent Service Type Details"
                id="crb-agent-service-type-agentServiceTypeDetails"
                name="agentServiceTypeDetails"
                data-cy="agentServiceTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-agent-service-type" replace color="info">
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

export default CrbAgentServiceTypeUpdate;
