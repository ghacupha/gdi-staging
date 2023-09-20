import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IChartOfAccountsCode } from 'app/shared/model/chart-of-accounts-code.model';
import { getEntity, updateEntity, createEntity, reset } from './chart-of-accounts-code.reducer';

export const ChartOfAccountsCodeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const chartOfAccountsCodeEntity = useAppSelector(state => state.chartOfAccountsCode.entity);
  const loading = useAppSelector(state => state.chartOfAccountsCode.loading);
  const updating = useAppSelector(state => state.chartOfAccountsCode.updating);
  const updateSuccess = useAppSelector(state => state.chartOfAccountsCode.updateSuccess);

  const handleClose = () => {
    navigate('/chart-of-accounts-code' + location.search);
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
      ...chartOfAccountsCodeEntity,
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
          ...chartOfAccountsCodeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.chartOfAccountsCode.home.createOrEditLabel" data-cy="ChartOfAccountsCodeCreateUpdateHeading">
            Create or edit a Chart Of Accounts Code
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
                <ValidatedField name="id" required readOnly id="chart-of-accounts-code-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Chart Of Accounts Code"
                id="chart-of-accounts-code-chartOfAccountsCode"
                name="chartOfAccountsCode"
                data-cy="chartOfAccountsCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Chart Of Accounts Class"
                id="chart-of-accounts-code-chartOfAccountsClass"
                name="chartOfAccountsClass"
                data-cy="chartOfAccountsClass"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Description"
                id="chart-of-accounts-code-description"
                name="description"
                data-cy="description"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/chart-of-accounts-code" replace color="info">
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

export default ChartOfAccountsCodeUpdate;
