import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IRemittanceFlag } from 'app/shared/model/remittance-flag.model';
import { RemittanceTypeFlag } from 'app/shared/model/enumerations/remittance-type-flag.model';
import { RemittanceType } from 'app/shared/model/enumerations/remittance-type.model';
import { getEntity, updateEntity, createEntity, reset } from './remittance-flag.reducer';

export const RemittanceFlagUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const remittanceFlagEntity = useAppSelector(state => state.remittanceFlag.entity);
  const loading = useAppSelector(state => state.remittanceFlag.loading);
  const updating = useAppSelector(state => state.remittanceFlag.updating);
  const updateSuccess = useAppSelector(state => state.remittanceFlag.updateSuccess);
  const remittanceTypeFlagValues = Object.keys(RemittanceTypeFlag);
  const remittanceTypeValues = Object.keys(RemittanceType);

  const handleClose = () => {
    navigate('/remittance-flag' + location.search);
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
      ...remittanceFlagEntity,
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
          remittanceTypeFlag: 'RMTIN',
          remittanceType: 'INFLOWS',
          ...remittanceFlagEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.remittanceFlag.home.createOrEditLabel" data-cy="RemittanceFlagCreateUpdateHeading">
            Create or edit a Remittance Flag
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
                <ValidatedField name="id" required readOnly id="remittance-flag-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Remittance Type Flag"
                id="remittance-flag-remittanceTypeFlag"
                name="remittanceTypeFlag"
                data-cy="remittanceTypeFlag"
                type="select"
              >
                {remittanceTypeFlagValues.map(remittanceTypeFlag => (
                  <option value={remittanceTypeFlag} key={remittanceTypeFlag}>
                    {remittanceTypeFlag}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Remittance Type"
                id="remittance-flag-remittanceType"
                name="remittanceType"
                data-cy="remittanceType"
                type="select"
              >
                {remittanceTypeValues.map(remittanceType => (
                  <option value={remittanceType} key={remittanceType}>
                    {remittanceType}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Remittance Type Details"
                id="remittance-flag-remittanceTypeDetails"
                name="remittanceTypeDetails"
                data-cy="remittanceTypeDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/remittance-flag" replace color="info">
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

export default RemittanceFlagUpdate;
