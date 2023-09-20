import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IShareholderType } from 'app/shared/model/shareholder-type.model';
import { ShareHolderTypes } from 'app/shared/model/enumerations/share-holder-types.model';
import { getEntity, updateEntity, createEntity, reset } from './shareholder-type.reducer';

export const ShareholderTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const shareholderTypeEntity = useAppSelector(state => state.shareholderType.entity);
  const loading = useAppSelector(state => state.shareholderType.loading);
  const updating = useAppSelector(state => state.shareholderType.updating);
  const updateSuccess = useAppSelector(state => state.shareholderType.updateSuccess);
  const shareHolderTypesValues = Object.keys(ShareHolderTypes);

  const handleClose = () => {
    navigate('/shareholder-type' + location.search);
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
      ...shareholderTypeEntity,
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
          shareHolderType: 'INDIVIDUAL',
          ...shareholderTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.shareholderType.home.createOrEditLabel" data-cy="ShareholderTypeCreateUpdateHeading">
            Create or edit a Shareholder Type
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
                <ValidatedField name="id" required readOnly id="shareholder-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Share Holder Type Code"
                id="shareholder-type-shareHolderTypeCode"
                name="shareHolderTypeCode"
                data-cy="shareHolderTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Share Holder Type"
                id="shareholder-type-shareHolderType"
                name="shareHolderType"
                data-cy="shareHolderType"
                type="select"
              >
                {shareHolderTypesValues.map(shareHolderTypes => (
                  <option value={shareHolderTypes} key={shareHolderTypes}>
                    {shareHolderTypes}
                  </option>
                ))}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/shareholder-type" replace color="info">
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

export default ShareholderTypeUpdate;
