import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbAmountCategoryBand } from 'app/shared/model/crb-amount-category-band.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-amount-category-band.reducer';

export const CrbAmountCategoryBandUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbAmountCategoryBandEntity = useAppSelector(state => state.crbAmountCategoryBand.entity);
  const loading = useAppSelector(state => state.crbAmountCategoryBand.loading);
  const updating = useAppSelector(state => state.crbAmountCategoryBand.updating);
  const updateSuccess = useAppSelector(state => state.crbAmountCategoryBand.updateSuccess);

  const handleClose = () => {
    navigate('/crb-amount-category-band' + location.search);
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
      ...crbAmountCategoryBandEntity,
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
          ...crbAmountCategoryBandEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbAmountCategoryBand.home.createOrEditLabel" data-cy="CrbAmountCategoryBandCreateUpdateHeading">
            Create or edit a Crb Amount Category Band
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
                <ValidatedField name="id" required readOnly id="crb-amount-category-band-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Amount Category Band Code"
                id="crb-amount-category-band-amountCategoryBandCode"
                name="amountCategoryBandCode"
                data-cy="amountCategoryBandCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Amount Category Band"
                id="crb-amount-category-band-amountCategoryBand"
                name="amountCategoryBand"
                data-cy="amountCategoryBand"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Amount Category Band Details"
                id="crb-amount-category-band-amountCategoryBandDetails"
                name="amountCategoryBandDetails"
                data-cy="amountCategoryBandDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-amount-category-band" replace color="info">
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

export default CrbAmountCategoryBandUpdate;
