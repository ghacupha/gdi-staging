import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPlaceholder } from 'app/shared/model/erpService/placeholder.model';
import { getEntities as getPlaceholders } from 'app/entities/erpService/placeholder/placeholder.reducer';
import { IBankBranchCode } from 'app/shared/model/bank-branch-code.model';
import { getEntity, updateEntity, createEntity, reset } from './bank-branch-code.reducer';

export const BankBranchCodeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const placeholders = useAppSelector(state => state.placeholder.entities);
  const bankBranchCodeEntity = useAppSelector(state => state.bankBranchCode.entity);
  const loading = useAppSelector(state => state.bankBranchCode.loading);
  const updating = useAppSelector(state => state.bankBranchCode.updating);
  const updateSuccess = useAppSelector(state => state.bankBranchCode.updateSuccess);

  const handleClose = () => {
    navigate('/bank-branch-code');
  };

  useEffect(() => {
    if (!isNew) {
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
      ...bankBranchCodeEntity,
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
          ...bankBranchCodeEntity,
          placeholders: bankBranchCodeEntity?.placeholders?.map(e => e.id.toString()),
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.bankBranchCode.home.createOrEditLabel" data-cy="BankBranchCodeCreateUpdateHeading">
            <Translate contentKey="gdiStagingApp.bankBranchCode.home.createOrEditLabel">Create or edit a BankBranchCode</Translate>
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
                  id="bank-branch-code-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('gdiStagingApp.bankBranchCode.bankCode')}
                id="bank-branch-code-bankCode"
                name="bankCode"
                data-cy="bankCode"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.bankBranchCode.bankName')}
                id="bank-branch-code-bankName"
                name="bankName"
                data-cy="bankName"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('gdiStagingApp.bankBranchCode.branchCode')}
                id="bank-branch-code-branchCode"
                name="branchCode"
                data-cy="branchCode"
                type="text"
                validate={{}}
              />
              <ValidatedField
                label={translate('gdiStagingApp.bankBranchCode.branchName')}
                id="bank-branch-code-branchName"
                name="branchName"
                data-cy="branchName"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.bankBranchCode.notes')}
                id="bank-branch-code-notes"
                name="notes"
                data-cy="notes"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.bankBranchCode.placeholder')}
                id="bank-branch-code-placeholder"
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/bank-branch-code" replace color="info">
                <FontAwesomeIcon icon="arrow-left" />
                &nbsp;
                <span className="d-none d-md-inline">
                  <Translate contentKey="entity.action.back">Back</Translate>
                </span>
              </Button>
              &nbsp;
              <Button color="primary" id="save-entity" data-cy="entityCreateSaveButton" type="submit" disabled={updating}>
                <FontAwesomeIcon icon="save" />
                &nbsp;
                <Translate contentKey="entity.action.save">Save</Translate>
              </Button>
            </ValidatedForm>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default BankBranchCodeUpdate;
