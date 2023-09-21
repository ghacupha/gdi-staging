import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbAgingBands } from 'app/shared/model/crb-aging-bands.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-aging-bands.reducer';

export const CrbAgingBandsUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbAgingBandsEntity = useAppSelector(state => state.crbAgingBands.entity);
  const loading = useAppSelector(state => state.crbAgingBands.loading);
  const updating = useAppSelector(state => state.crbAgingBands.updating);
  const updateSuccess = useAppSelector(state => state.crbAgingBands.updateSuccess);

  const handleClose = () => {
    navigate('/crb-aging-bands' + location.search);
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
      ...crbAgingBandsEntity,
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
          ...crbAgingBandsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbAgingBands.home.createOrEditLabel" data-cy="CrbAgingBandsCreateUpdateHeading">
            Create or edit a Crb Aging Bands
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
                <ValidatedField name="id" required readOnly id="crb-aging-bands-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Aging Band Category Code"
                id="crb-aging-bands-agingBandCategoryCode"
                name="agingBandCategoryCode"
                data-cy="agingBandCategoryCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Aging Band Category"
                id="crb-aging-bands-agingBandCategory"
                name="agingBandCategory"
                data-cy="agingBandCategory"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Aging Band Category Details"
                id="crb-aging-bands-agingBandCategoryDetails"
                name="agingBandCategoryDetails"
                data-cy="agingBandCategoryDetails"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-aging-bands" replace color="info">
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

export default CrbAgingBandsUpdate;
