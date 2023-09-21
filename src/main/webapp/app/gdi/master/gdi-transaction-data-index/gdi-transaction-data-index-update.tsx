import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm, ValidatedBlobField } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IGdiMasterDataIndex } from 'app/shared/model/gdi-master-data-index.model';
import { getEntities as getGdiMasterDataIndices } from 'app/entities/gdi-master-data-index/gdi-master-data-index.reducer';
import { IGdiTransactionDataIndex } from 'app/shared/model/gdi-transaction-data-index.model';
import { UpdateFrequencyTypes } from 'app/shared/model/enumerations/update-frequency-types.model';
import { DatasetBehaviorTypes } from 'app/shared/model/enumerations/dataset-behavior-types.model';
import { getEntity, updateEntity, createEntity, reset } from './gdi-transaction-data-index.reducer';

export const GdiTransactionDataIndexUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const gdiMasterDataIndices = useAppSelector(state => state.gdiMasterDataIndex.entities);
  const gdiTransactionDataIndexEntity = useAppSelector(state => state.gdiTransactionDataIndex.entity);
  const loading = useAppSelector(state => state.gdiTransactionDataIndex.loading);
  const updating = useAppSelector(state => state.gdiTransactionDataIndex.updating);
  const updateSuccess = useAppSelector(state => state.gdiTransactionDataIndex.updateSuccess);
  const updateFrequencyTypesValues = Object.keys(UpdateFrequencyTypes);
  const datasetBehaviorTypesValues = Object.keys(DatasetBehaviorTypes);

  const handleClose = () => {
    navigate('/gdi-transaction-data-index' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getGdiMasterDataIndices({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...gdiTransactionDataIndexEntity,
      ...values,
      masterDataItems: mapIdList(values.masterDataItems),
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
          updateFrequency: 'DAILY',
          datasetBehavior: 'INSERT_AND_UPDATE',
          ...gdiTransactionDataIndexEntity,
          masterDataItems: gdiTransactionDataIndexEntity?.masterDataItems?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.gdiTransactionDataIndex.home.createOrEditLabel" data-cy="GdiTransactionDataIndexCreateUpdateHeading">
            Create or edit a Gdi Transaction Data Index
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
                <ValidatedField name="id" required readOnly id="gdi-transaction-data-index-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Dataset Name"
                id="gdi-transaction-data-index-datasetName"
                name="datasetName"
                data-cy="datasetName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Database Name"
                id="gdi-transaction-data-index-databaseName"
                name="databaseName"
                data-cy="databaseName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Update Frequency"
                id="gdi-transaction-data-index-updateFrequency"
                name="updateFrequency"
                data-cy="updateFrequency"
                type="select"
              >
                {updateFrequencyTypesValues.map(updateFrequencyTypes => (
                  <option value={updateFrequencyTypes} key={updateFrequencyTypes}>
                    {updateFrequencyTypes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Dataset Behavior"
                id="gdi-transaction-data-index-datasetBehavior"
                name="datasetBehavior"
                data-cy="datasetBehavior"
                type="select"
              >
                {datasetBehaviorTypesValues.map(datasetBehaviorTypes => (
                  <option value={datasetBehaviorTypes} key={datasetBehaviorTypes}>
                    {datasetBehaviorTypes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Minimum Datarows Per Request"
                id="gdi-transaction-data-index-minimumDatarowsPerRequest"
                name="minimumDatarowsPerRequest"
                data-cy="minimumDatarowsPerRequest"
                type="text"
              />
              <ValidatedField
                label="Maximum Data Rows Per Request"
                id="gdi-transaction-data-index-maximumDataRowsPerRequest"
                name="maximumDataRowsPerRequest"
                data-cy="maximumDataRowsPerRequest"
                type="text"
              />
              <ValidatedField
                label="Dataset Description"
                id="gdi-transaction-data-index-datasetDescription"
                name="datasetDescription"
                data-cy="datasetDescription"
                type="textarea"
              />
              <ValidatedBlobField
                label="Data Template"
                id="gdi-transaction-data-index-dataTemplate"
                name="dataTemplate"
                data-cy="dataTemplate"
                openActionLabel="Open"
              />
              <ValidatedField
                label="Master Data Item"
                id="gdi-transaction-data-index-masterDataItem"
                data-cy="masterDataItem"
                type="select"
                multiple
                name="masterDataItems"
              >
                <option value="" key="0" />
                {gdiMasterDataIndices
                  ? gdiMasterDataIndices.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.entityName}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/gdi-transaction-data-index" replace color="info">
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

export default GdiTransactionDataIndexUpdate;
