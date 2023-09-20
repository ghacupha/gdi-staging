import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IAnticipatedMaturityPeriood } from 'app/shared/model/anticipated-maturity-periood.model';
import { getEntity, updateEntity, createEntity, reset } from './anticipated-maturity-periood.reducer';

export const AnticipatedMaturityPerioodUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const anticipatedMaturityPerioodEntity = useAppSelector(state => state.anticipatedMaturityPeriood.entity);
  const loading = useAppSelector(state => state.anticipatedMaturityPeriood.loading);
  const updating = useAppSelector(state => state.anticipatedMaturityPeriood.updating);
  const updateSuccess = useAppSelector(state => state.anticipatedMaturityPeriood.updateSuccess);

  const handleClose = () => {
    navigate('/anticipated-maturity-periood' + location.search);
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
      ...anticipatedMaturityPerioodEntity,
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
          ...anticipatedMaturityPerioodEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.anticipatedMaturityPeriood.home.createOrEditLabel" data-cy="AnticipatedMaturityPerioodCreateUpdateHeading">
            Create or edit a Anticipated Maturity Periood
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
                <ValidatedField name="id" required readOnly id="anticipated-maturity-periood-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Anticipated Maturity Tenor Code"
                id="anticipated-maturity-periood-anticipatedMaturityTenorCode"
                name="anticipatedMaturityTenorCode"
                data-cy="anticipatedMaturityTenorCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Aniticipated Maturity Tenor Type"
                id="anticipated-maturity-periood-aniticipatedMaturityTenorType"
                name="aniticipatedMaturityTenorType"
                data-cy="aniticipatedMaturityTenorType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Anticipated Maturity Tenor Details"
                id="anticipated-maturity-periood-anticipatedMaturityTenorDetails"
                name="anticipatedMaturityTenorDetails"
                data-cy="anticipatedMaturityTenorDetails"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/anticipated-maturity-periood"
                replace
                color="info"
              >
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

export default AnticipatedMaturityPerioodUpdate;
