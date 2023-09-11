import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IPlaceholder } from 'app/shared/model/erpService/placeholder.model';
import { getEntities as getPlaceholders } from 'app/gdi/service/placeholder/placeholder.reducer';
import { IBankBranchCode } from 'app/shared/model/bank-branch-code.model';
import { getEntities as getBankBranchCodes } from 'app/gdi/standards//bank-branch-code/bank-branch-code.reducer';
import { IOutletType } from 'app/shared/model/outlet-type.model';
import { getEntities as getOutletTypes } from 'app/gdi/standards//outlet-type/outlet-type.reducer';
import { IOutletStatus } from 'app/shared/model/outlet-status.model';
import { getEntities as getOutletStatuses } from 'app/gdi/standards//outlet-status/outlet-status.reducer';
import { ICountyCode } from 'app/shared/model/county-code.model';
import { getEntities as getCountyCodes } from 'app/gdi/standards//county-code/county-code.reducer';
import { IServiceOutlet } from 'app/shared/model/service-outlet.model';
import { getEntity, updateEntity, createEntity, reset } from './service-outlet.reducer';

export const ServiceOutletUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const placeholders = useAppSelector(state => state.placeholder.entities);
  const bankBranchCodes = useAppSelector(state => state.bankBranchCode.entities);
  const outletTypes = useAppSelector(state => state.outletType.entities);
  const outletStatuses = useAppSelector(state => state.outletStatus.entities);
  const countyCodes = useAppSelector(state => state.countyCode.entities);
  const serviceOutletEntity = useAppSelector(state => state.serviceOutlet.entity);
  const loading = useAppSelector(state => state.serviceOutlet.loading);
  const updating = useAppSelector(state => state.serviceOutlet.updating);
  const updateSuccess = useAppSelector(state => state.serviceOutlet.updateSuccess);

  const handleClose = () => {
    navigate('/service-outlet');
  };

  useEffect(() => {
    if (!isNew) {
      dispatch(getEntity(id));
    }

    dispatch(getPlaceholders({}));
    dispatch(getBankBranchCodes({}));
    dispatch(getOutletTypes({}));
    dispatch(getOutletStatuses({}));
    dispatch(getCountyCodes({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...serviceOutletEntity,
      ...values,
      placeholders: mapIdList(values.placeholders),
      bankCode: bankBranchCodes.find(it => it.id.toString() === values.bankCode.toString()),
      outletType: outletTypes.find(it => it.id.toString() === values.outletType.toString()),
      outletStatus: outletStatuses.find(it => it.id.toString() === values.outletStatus.toString()),
      countyName: countyCodes.find(it => it.id.toString() === values.countyName.toString()),
      subCountyName: countyCodes.find(it => it.id.toString() === values.subCountyName.toString()),
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
          ...serviceOutletEntity,
          placeholders: serviceOutletEntity?.placeholders?.map(e => e.id.toString()),
          bankCode: serviceOutletEntity?.bankCode?.id,
          outletType: serviceOutletEntity?.outletType?.id,
          outletStatus: serviceOutletEntity?.outletStatus?.id,
          countyName: serviceOutletEntity?.countyName?.id,
          subCountyName: serviceOutletEntity?.subCountyName?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.serviceOutlet.home.createOrEditLabel" data-cy="ServiceOutletCreateUpdateHeading">
            <Translate contentKey="gdiStagingApp.serviceOutlet.home.createOrEditLabel">Create or edit a ServiceOutlet</Translate>
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
                  id="service-outlet-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('gdiStagingApp.serviceOutlet.outletCode')}
                id="service-outlet-outletCode"
                name="outletCode"
                data-cy="outletCode"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('gdiStagingApp.serviceOutlet.outletName')}
                id="service-outlet-outletName"
                name="outletName"
                data-cy="outletName"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('gdiStagingApp.serviceOutlet.town')}
                id="service-outlet-town"
                name="town"
                data-cy="town"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.serviceOutlet.parliamentaryConstituency')}
                id="service-outlet-parliamentaryConstituency"
                name="parliamentaryConstituency"
                data-cy="parliamentaryConstituency"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.serviceOutlet.gpsCoordinates')}
                id="service-outlet-gpsCoordinates"
                name="gpsCoordinates"
                data-cy="gpsCoordinates"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.serviceOutlet.outletOpeningDate')}
                id="service-outlet-outletOpeningDate"
                name="outletOpeningDate"
                data-cy="outletOpeningDate"
                type="date"
              />
              <ValidatedField
                label={translate('gdiStagingApp.serviceOutlet.regulatorApprovalDate')}
                id="service-outlet-regulatorApprovalDate"
                name="regulatorApprovalDate"
                data-cy="regulatorApprovalDate"
                type="date"
              />
              <ValidatedField
                label={translate('gdiStagingApp.serviceOutlet.outletClosureDate')}
                id="service-outlet-outletClosureDate"
                name="outletClosureDate"
                data-cy="outletClosureDate"
                type="date"
              />
              <ValidatedField
                label={translate('gdiStagingApp.serviceOutlet.dateLastModified')}
                id="service-outlet-dateLastModified"
                name="dateLastModified"
                data-cy="dateLastModified"
                type="date"
              />
              <ValidatedField
                label={translate('gdiStagingApp.serviceOutlet.licenseFeePayable')}
                id="service-outlet-licenseFeePayable"
                name="licenseFeePayable"
                data-cy="licenseFeePayable"
                type="text"
              />
              <ValidatedField
                label={translate('gdiStagingApp.serviceOutlet.placeholder')}
                id="service-outlet-placeholder"
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
              <ValidatedField
                id="service-outlet-bankCode"
                name="bankCode"
                data-cy="bankCode"
                label={translate('gdiStagingApp.serviceOutlet.bankCode')}
                type="select"
              >
                <option value="" key="0" />
                {bankBranchCodes
                  ? bankBranchCodes.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.branchCode}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="service-outlet-outletType"
                name="outletType"
                data-cy="outletType"
                label={translate('gdiStagingApp.serviceOutlet.outletType')}
                type="select"
              >
                <option value="" key="0" />
                {outletTypes
                  ? outletTypes.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.outletType}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="service-outlet-outletStatus"
                name="outletStatus"
                data-cy="outletStatus"
                label={translate('gdiStagingApp.serviceOutlet.outletStatus')}
                type="select"
              >
                <option value="" key="0" />
                {outletStatuses
                  ? outletStatuses.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.branchStatusType}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="service-outlet-countyName"
                name="countyName"
                data-cy="countyName"
                label={translate('gdiStagingApp.serviceOutlet.countyName')}
                type="select"
              >
                <option value="" key="0" />
                {countyCodes
                  ? countyCodes.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.countyName}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField
                id="service-outlet-subCountyName"
                name="subCountyName"
                data-cy="subCountyName"
                label={translate('gdiStagingApp.serviceOutlet.subCountyName')}
                type="select"
              >
                <option value="" key="0" />
                {countyCodes
                  ? countyCodes.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.subCountyName}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/service-outlet" replace color="info">
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

export default ServiceOutletUpdate;
