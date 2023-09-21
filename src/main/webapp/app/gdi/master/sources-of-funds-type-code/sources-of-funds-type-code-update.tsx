import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISourcesOfFundsTypeCode } from 'app/shared/model/sources-of-funds-type-code.model';
import { getEntity, updateEntity, createEntity, reset } from './sources-of-funds-type-code.reducer';

export const SourcesOfFundsTypeCodeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const sourcesOfFundsTypeCodeEntity = useAppSelector(state => state.sourcesOfFundsTypeCode.entity);
  const loading = useAppSelector(state => state.sourcesOfFundsTypeCode.loading);
  const updating = useAppSelector(state => state.sourcesOfFundsTypeCode.updating);
  const updateSuccess = useAppSelector(state => state.sourcesOfFundsTypeCode.updateSuccess);

  const handleClose = () => {
    navigate('/sources-of-funds-type-code' + location.search);
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
      ...sourcesOfFundsTypeCodeEntity,
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
          ...sourcesOfFundsTypeCodeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.sourcesOfFundsTypeCode.home.createOrEditLabel" data-cy="SourcesOfFundsTypeCodeCreateUpdateHeading">
            Create or edit a Sources Of Funds Type Code
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
                <ValidatedField name="id" required readOnly id="sources-of-funds-type-code-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Source Of Funds Type Code"
                id="sources-of-funds-type-code-sourceOfFundsTypeCode"
                name="sourceOfFundsTypeCode"
                data-cy="sourceOfFundsTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Source Of Funds Type"
                id="sources-of-funds-type-code-sourceOfFundsType"
                name="sourceOfFundsType"
                data-cy="sourceOfFundsType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Source Of Funds Type Details"
                id="sources-of-funds-type-code-sourceOfFundsTypeDetails"
                name="sourceOfFundsTypeDetails"
                data-cy="sourceOfFundsTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/sources-of-funds-type-code" replace color="info">
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

export default SourcesOfFundsTypeCodeUpdate;
