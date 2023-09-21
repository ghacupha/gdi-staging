import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IFraudCategoryFlag } from 'app/shared/model/fraud-category-flag.model';
import { FlagCodes } from 'app/shared/model/enumerations/flag-codes.model';
import { getEntity, updateEntity, createEntity, reset } from './fraud-category-flag.reducer';

export const FraudCategoryFlagUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const fraudCategoryFlagEntity = useAppSelector(state => state.fraudCategoryFlag.entity);
  const loading = useAppSelector(state => state.fraudCategoryFlag.loading);
  const updating = useAppSelector(state => state.fraudCategoryFlag.updating);
  const updateSuccess = useAppSelector(state => state.fraudCategoryFlag.updateSuccess);
  const flagCodesValues = Object.keys(FlagCodes);

  const handleClose = () => {
    navigate('/fraud-category-flag' + location.search);
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
      ...fraudCategoryFlagEntity,
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
          fraudCategoryFlag: 'Y',
          ...fraudCategoryFlagEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.fraudCategoryFlag.home.createOrEditLabel" data-cy="FraudCategoryFlagCreateUpdateHeading">
            Create or edit a Fraud Category Flag
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
                <ValidatedField name="id" required readOnly id="fraud-category-flag-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Fraud Category Flag"
                id="fraud-category-flag-fraudCategoryFlag"
                name="fraudCategoryFlag"
                data-cy="fraudCategoryFlag"
                type="select"
              >
                {flagCodesValues.map(flagCodes => (
                  <option value={flagCodes} key={flagCodes}>
                    {flagCodes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Fraud Category Type Details"
                id="fraud-category-flag-fraudCategoryTypeDetails"
                name="fraudCategoryTypeDetails"
                data-cy="fraudCategoryTypeDetails"
                type="text"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/fraud-category-flag" replace color="info">
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

export default FraudCategoryFlagUpdate;
