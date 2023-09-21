import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IGenderType } from 'app/shared/model/gender-type.model';
import { genderTypes } from 'app/shared/model/enumerations/gender-types.model';
import { getEntity, updateEntity, createEntity, reset } from './gender-type.reducer';

export const GenderTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const genderTypeEntity = useAppSelector(state => state.genderType.entity);
  const loading = useAppSelector(state => state.genderType.loading);
  const updating = useAppSelector(state => state.genderType.updating);
  const updateSuccess = useAppSelector(state => state.genderType.updateSuccess);
  const genderTypesValues = Object.keys(genderTypes);

  const handleClose = () => {
    navigate('/gender-type' + location.search);
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
      ...genderTypeEntity,
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
          genderType: 'MALE',
          ...genderTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.genderType.home.createOrEditLabel" data-cy="GenderTypeCreateUpdateHeading">
            Create or edit a Gender Type
          </h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <ValidatedForm defaultValues={defaultValues()} onSubmit={saveEntity}>
              {!isNew ? <ValidatedField name="id" required readOnly id="gender-type-id" label="ID" validate={{ required: true }} /> : null}
              <ValidatedField
                label="Gender Code"
                id="gender-type-genderCode"
                name="genderCode"
                data-cy="genderCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Gender Type" id="gender-type-genderType" name="genderType" data-cy="genderType" type="select">
                {genderTypesValues.map(genderTypes => (
                  <option value={genderTypes} key={genderTypes}>
                    {genderTypes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Gender Description"
                id="gender-type-genderDescription"
                name="genderDescription"
                data-cy="genderDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/gender-type" replace color="info">
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

export default GenderTypeUpdate;
