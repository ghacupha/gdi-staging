import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IMoratoriumItem } from 'app/shared/model/moratorium-item.model';
import { getEntity, updateEntity, createEntity, reset } from './moratorium-item.reducer';

export const MoratoriumItemUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const moratoriumItemEntity = useAppSelector(state => state.moratoriumItem.entity);
  const loading = useAppSelector(state => state.moratoriumItem.loading);
  const updating = useAppSelector(state => state.moratoriumItem.updating);
  const updateSuccess = useAppSelector(state => state.moratoriumItem.updateSuccess);

  const handleClose = () => {
    navigate('/moratorium-item' + location.search);
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
      ...moratoriumItemEntity,
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
          ...moratoriumItemEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.moratoriumItem.home.createOrEditLabel" data-cy="MoratoriumItemCreateUpdateHeading">
            Create or edit a Moratorium Item
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
                <ValidatedField name="id" required readOnly id="moratorium-item-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Moratorium Item Type Code"
                id="moratorium-item-moratoriumItemTypeCode"
                name="moratoriumItemTypeCode"
                data-cy="moratoriumItemTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Moratorium Item Type"
                id="moratorium-item-moratoriumItemType"
                name="moratoriumItemType"
                data-cy="moratoriumItemType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Moratorium Type Details"
                id="moratorium-item-moratoriumTypeDetails"
                name="moratoriumTypeDetails"
                data-cy="moratoriumTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/moratorium-item" replace color="info">
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

export default MoratoriumItemUpdate;
