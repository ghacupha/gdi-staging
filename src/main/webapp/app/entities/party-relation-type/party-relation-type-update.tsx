import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPartyRelationType } from 'app/shared/model/party-relation-type.model';
import { getEntity, updateEntity, createEntity, reset } from './party-relation-type.reducer';

export const PartyRelationTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const partyRelationTypeEntity = useAppSelector(state => state.partyRelationType.entity);
  const loading = useAppSelector(state => state.partyRelationType.loading);
  const updating = useAppSelector(state => state.partyRelationType.updating);
  const updateSuccess = useAppSelector(state => state.partyRelationType.updateSuccess);

  const handleClose = () => {
    navigate('/party-relation-type' + location.search);
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
      ...partyRelationTypeEntity,
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
          ...partyRelationTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.partyRelationType.home.createOrEditLabel" data-cy="PartyRelationTypeCreateUpdateHeading">
            Create or edit a Party Relation Type
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
                <ValidatedField name="id" required readOnly id="party-relation-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Party Relation Type Code"
                id="party-relation-type-partyRelationTypeCode"
                name="partyRelationTypeCode"
                data-cy="partyRelationTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Party Relation Type"
                id="party-relation-type-partyRelationType"
                name="partyRelationType"
                data-cy="partyRelationType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Party Relation Type Description"
                id="party-relation-type-partyRelationTypeDescription"
                name="partyRelationTypeDescription"
                data-cy="partyRelationTypeDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/party-relation-type" replace color="info">
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

export default PartyRelationTypeUpdate;
