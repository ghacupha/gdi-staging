import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISnaSectorCode } from 'app/shared/model/sna-sector-code.model';
import { getEntity, updateEntity, createEntity, reset } from './sna-sector-code.reducer';

export const SnaSectorCodeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const snaSectorCodeEntity = useAppSelector(state => state.snaSectorCode.entity);
  const loading = useAppSelector(state => state.snaSectorCode.loading);
  const updating = useAppSelector(state => state.snaSectorCode.updating);
  const updateSuccess = useAppSelector(state => state.snaSectorCode.updateSuccess);

  const handleClose = () => {
    navigate('/sna-sector-code' + location.search);
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
      ...snaSectorCodeEntity,
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
          ...snaSectorCodeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.snaSectorCode.home.createOrEditLabel" data-cy="SnaSectorCodeCreateUpdateHeading">
            Create or edit a Sna Sector Code
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
                <ValidatedField name="id" required readOnly id="sna-sector-code-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Sector Type Code"
                id="sna-sector-code-sectorTypeCode"
                name="sectorTypeCode"
                data-cy="sectorTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Main Sector Code"
                id="sna-sector-code-mainSectorCode"
                name="mainSectorCode"
                data-cy="mainSectorCode"
                type="text"
              />
              <ValidatedField
                label="Main Sector Type Name"
                id="sna-sector-code-mainSectorTypeName"
                name="mainSectorTypeName"
                data-cy="mainSectorTypeName"
                type="text"
              />
              <ValidatedField
                label="Sub Sector Code"
                id="sna-sector-code-subSectorCode"
                name="subSectorCode"
                data-cy="subSectorCode"
                type="text"
              />
              <ValidatedField
                label="Sub Sector Name"
                id="sna-sector-code-subSectorName"
                name="subSectorName"
                data-cy="subSectorName"
                type="text"
              />
              <ValidatedField
                label="Sub Sub Sector Code"
                id="sna-sector-code-subSubSectorCode"
                name="subSubSectorCode"
                data-cy="subSubSectorCode"
                type="text"
              />
              <ValidatedField
                label="Sub Sub Sector Name"
                id="sna-sector-code-subSubSectorName"
                name="subSubSectorName"
                data-cy="subSubSectorName"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/sna-sector-code" replace color="info">
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

export default SnaSectorCodeUpdate;
