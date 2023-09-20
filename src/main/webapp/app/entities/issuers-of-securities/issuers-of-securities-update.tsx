import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IIssuersOfSecurities } from 'app/shared/model/issuers-of-securities.model';
import { getEntity, updateEntity, createEntity, reset } from './issuers-of-securities.reducer';

export const IssuersOfSecuritiesUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const issuersOfSecuritiesEntity = useAppSelector(state => state.issuersOfSecurities.entity);
  const loading = useAppSelector(state => state.issuersOfSecurities.loading);
  const updating = useAppSelector(state => state.issuersOfSecurities.updating);
  const updateSuccess = useAppSelector(state => state.issuersOfSecurities.updateSuccess);

  const handleClose = () => {
    navigate('/issuers-of-securities' + location.search);
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
      ...issuersOfSecuritiesEntity,
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
          ...issuersOfSecuritiesEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.issuersOfSecurities.home.createOrEditLabel" data-cy="IssuersOfSecuritiesCreateUpdateHeading">
            Create or edit a Issuers Of Securities
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
                <ValidatedField name="id" required readOnly id="issuers-of-securities-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Issuer Of Securities Code"
                id="issuers-of-securities-issuerOfSecuritiesCode"
                name="issuerOfSecuritiesCode"
                data-cy="issuerOfSecuritiesCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Issuer Of Securities"
                id="issuers-of-securities-issuerOfSecurities"
                name="issuerOfSecurities"
                data-cy="issuerOfSecurities"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Issuer Of Securities Description"
                id="issuers-of-securities-issuerOfSecuritiesDescription"
                name="issuerOfSecuritiesDescription"
                data-cy="issuerOfSecuritiesDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/issuers-of-securities" replace color="info">
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

export default IssuersOfSecuritiesUpdate;
