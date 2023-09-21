import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ISourceRemittancePurposeType } from 'app/shared/model/source-remittance-purpose-type.model';
import { SourceOrPurposeOfRemittancFlag } from 'app/shared/model/enumerations/source-or-purpose-of-remittanc-flag.model';
import { getEntity, updateEntity, createEntity, reset } from './source-remittance-purpose-type.reducer';

export const SourceRemittancePurposeTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const sourceRemittancePurposeTypeEntity = useAppSelector(state => state.sourceRemittancePurposeType.entity);
  const loading = useAppSelector(state => state.sourceRemittancePurposeType.loading);
  const updating = useAppSelector(state => state.sourceRemittancePurposeType.updating);
  const updateSuccess = useAppSelector(state => state.sourceRemittancePurposeType.updateSuccess);
  const sourceOrPurposeOfRemittancFlagValues = Object.keys(SourceOrPurposeOfRemittancFlag);

  const handleClose = () => {
    navigate('/source-remittance-purpose-type' + location.search);
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
      ...sourceRemittancePurposeTypeEntity,
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
          sourceOrPurposeOfRemittanceFlag: 'PURPOSE_OF_REMITTANCE',
          ...sourceRemittancePurposeTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2
            id="gdiStagingApp.sourceRemittancePurposeType.home.createOrEditLabel"
            data-cy="SourceRemittancePurposeTypeCreateUpdateHeading"
          >
            Create or edit a Source Remittance Purpose Type
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
                <ValidatedField
                  name="id"
                  required
                  readOnly
                  id="source-remittance-purpose-type-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Source Or Purpose Type Code"
                id="source-remittance-purpose-type-sourceOrPurposeTypeCode"
                name="sourceOrPurposeTypeCode"
                data-cy="sourceOrPurposeTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Source Or Purpose Of Remittance Flag"
                id="source-remittance-purpose-type-sourceOrPurposeOfRemittanceFlag"
                name="sourceOrPurposeOfRemittanceFlag"
                data-cy="sourceOrPurposeOfRemittanceFlag"
                type="select"
              >
                {sourceOrPurposeOfRemittancFlagValues.map(sourceOrPurposeOfRemittancFlag => (
                  <option value={sourceOrPurposeOfRemittancFlag} key={sourceOrPurposeOfRemittancFlag}>
                    {sourceOrPurposeOfRemittancFlag}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Source Or Purpose Of Remittance Type"
                id="source-remittance-purpose-type-sourceOrPurposeOfRemittanceType"
                name="sourceOrPurposeOfRemittanceType"
                data-cy="sourceOrPurposeOfRemittanceType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Remittance Purpose Type Details"
                id="source-remittance-purpose-type-remittancePurposeTypeDetails"
                name="remittancePurposeTypeDetails"
                data-cy="remittancePurposeTypeDetails"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/source-remittance-purpose-type"
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

export default SourceRemittancePurposeTypeUpdate;
