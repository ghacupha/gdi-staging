import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IGdiMasterDataIndex } from 'app/shared/model/gdi-master-data-index.model';
import { getEntity, updateEntity, createEntity, reset } from './gdi-master-data-index.reducer';

export const GdiMasterDataIndexUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const gdiMasterDataIndexEntity = useAppSelector(state => state.gdiMasterDataIndex.entity);
  const loading = useAppSelector(state => state.gdiMasterDataIndex.loading);
  const updating = useAppSelector(state => state.gdiMasterDataIndex.updating);
  const updateSuccess = useAppSelector(state => state.gdiMasterDataIndex.updateSuccess);

  const handleClose = () => {
    navigate('/gdi-master-data-index' + location.search);
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
      ...gdiMasterDataIndexEntity,
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
          ...gdiMasterDataIndexEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.gdiMasterDataIndex.home.createOrEditLabel" data-cy="GdiMasterDataIndexCreateUpdateHeading">
            Create or edit a Gdi Master Data Index
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
                <ValidatedField name="id" required readOnly id="gdi-master-data-index-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Entity Name"
                id="gdi-master-data-index-entityName"
                name="entityName"
                data-cy="entityName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Database Name"
                id="gdi-master-data-index-databaseName"
                name="databaseName"
                data-cy="databaseName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Business Description"
                id="gdi-master-data-index-businessDescription"
                name="businessDescription"
                data-cy="businessDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/gdi-master-data-index" replace color="info">
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

export default GdiMasterDataIndexUpdate;
