import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IShareHoldingFlag } from 'app/shared/model/share-holding-flag.model';
import { ShareholdingFlagTypes } from 'app/shared/model/enumerations/shareholding-flag-types.model';
import { getEntity, updateEntity, createEntity, reset } from './share-holding-flag.reducer';

export const ShareHoldingFlagUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const shareHoldingFlagEntity = useAppSelector(state => state.shareHoldingFlag.entity);
  const loading = useAppSelector(state => state.shareHoldingFlag.loading);
  const updating = useAppSelector(state => state.shareHoldingFlag.updating);
  const updateSuccess = useAppSelector(state => state.shareHoldingFlag.updateSuccess);
  const shareholdingFlagTypesValues = Object.keys(ShareholdingFlagTypes);

  const handleClose = () => {
    navigate('/share-holding-flag' + location.search);
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
      ...shareHoldingFlagEntity,
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
          shareholdingFlagTypeCode: 'Y',
          ...shareHoldingFlagEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.shareHoldingFlag.home.createOrEditLabel" data-cy="ShareHoldingFlagCreateUpdateHeading">
            Create or edit a Share Holding Flag
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
                <ValidatedField name="id" required readOnly id="share-holding-flag-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Shareholding Flag Type Code"
                id="share-holding-flag-shareholdingFlagTypeCode"
                name="shareholdingFlagTypeCode"
                data-cy="shareholdingFlagTypeCode"
                type="select"
              >
                {shareholdingFlagTypesValues.map(shareholdingFlagTypes => (
                  <option value={shareholdingFlagTypes} key={shareholdingFlagTypes}>
                    {shareholdingFlagTypes}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Shareholding Flag Type"
                id="share-holding-flag-shareholdingFlagType"
                name="shareholdingFlagType"
                data-cy="shareholdingFlagType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Shareholding Type Description"
                id="share-holding-flag-shareholdingTypeDescription"
                name="shareholdingTypeDescription"
                data-cy="shareholdingTypeDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/share-holding-flag" replace color="info">
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

export default ShareHoldingFlagUpdate;
