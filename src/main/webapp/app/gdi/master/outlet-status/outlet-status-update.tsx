import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPlaceholder } from 'app/shared/model/service/placeholder.model';
import { getEntities as getPlaceholders } from 'app/entities/service/placeholder/placeholder.reducer';
import { IOutletStatus } from 'app/shared/model/outlet-status.model';
import { BranchStatusType } from 'app/shared/model/enumerations/branch-status-type.model';
import { getEntity, updateEntity, createEntity, reset } from './outlet-status.reducer';

export const OutletStatusUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const placeholders = useAppSelector(state => state.placeholder.entities);
  const outletStatusEntity = useAppSelector(state => state.outletStatus.entity);
  const loading = useAppSelector(state => state.outletStatus.loading);
  const updating = useAppSelector(state => state.outletStatus.updating);
  const updateSuccess = useAppSelector(state => state.outletStatus.updateSuccess);
  const branchStatusTypeValues = Object.keys(BranchStatusType);

  const handleClose = () => {
    navigate('/outlet-status' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getPlaceholders({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...outletStatusEntity,
      ...values,
      placeholders: mapIdList(values.placeholders),
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
          branchStatusType: 'ACTIVE',
          ...outletStatusEntity,
          placeholders: outletStatusEntity?.placeholders?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.outletStatus.home.createOrEditLabel" data-cy="OutletStatusCreateUpdateHeading">
            Create or edit a Outlet Status
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
                <ValidatedField name="id" required readOnly id="outlet-status-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Branch Status Type Code"
                id="outlet-status-branchStatusTypeCode"
                name="branchStatusTypeCode"
                data-cy="branchStatusTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Branch Status Type"
                id="outlet-status-branchStatusType"
                name="branchStatusType"
                data-cy="branchStatusType"
                type="select"
              >
                {branchStatusTypeValues.map(branchStatusType => (
                  <option value={branchStatusType} key={branchStatusType}>
                    {branchStatusType}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Branch Status Type Description"
                id="outlet-status-branchStatusTypeDescription"
                name="branchStatusTypeDescription"
                data-cy="branchStatusTypeDescription"
                type="text"
              />
              <ValidatedField
                label="Placeholder"
                id="outlet-status-placeholder"
                data-cy="placeholder"
                type="select"
                multiple
                name="placeholders"
              >
                <option value="" key="0" />
                {placeholders
                  ? placeholders.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.description}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/outlet-status" replace color="info">
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

export default OutletStatusUpdate;
