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
import { IBankBranchCode } from 'app/shared/model/standards/bank-branch-code.model';
import { getEntities as getBankBranchCodes } from 'app/entities/standards/bank-branch-code/bank-branch-code.reducer';
import { IOutletType } from 'app/shared/model/outlet-type.model';
import { getEntities as getOutletTypes } from 'app/entities/outlet-type/outlet-type.reducer';
import { IOutletStatus } from 'app/shared/model/outlet-status.model';
import { getEntities as getOutletStatuses } from 'app/entities/outlet-status/outlet-status.reducer';
import { ICountyCode } from 'app/shared/model/standards/county-code.model';
import { getEntities as getCountyCodes } from 'app/entities/standards/county-code/county-code.reducer';
import { IServiceOutlet } from 'app/shared/model/standards/service-outlet.model';
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
          <h2 id="gdiStagingApp.standardsServiceOutlet.home.createOrEditLabel" data-cy="ServiceOutletCreateUpdateHeading">
            Create or edit a Service Outlet
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
                <ValidatedField name="id" required readOnly id="service-outlet-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Outlet Code"
                id="service-outlet-outletCode"
                name="outletCode"
                data-cy="outletCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Outlet Name"
                id="service-outlet-outletName"
                name="outletName"
                data-cy="outletName"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField label="Town" id="service-outlet-town" name="town" data-cy="town" type="text" />
              <ValidatedField
                label="Parliamentary Constituency"
                id="service-outlet-parliamentaryConstituency"
                name="parliamentaryConstituency"
                data-cy="parliamentaryConstituency"
                type="text"
              />
              <ValidatedField
                label="Gps Coordinates"
                id="service-outlet-gpsCoordinates"
                name="gpsCoordinates"
                data-cy="gpsCoordinates"
                type="text"
              />
              <ValidatedField
                label="Outlet Opening Date"
                id="service-outlet-outletOpeningDate"
                name="outletOpeningDate"
                data-cy="outletOpeningDate"
                type="date"
              />
              <ValidatedField
                label="Regulator Approval Date"
                id="service-outlet-regulatorApprovalDate"
                name="regulatorApprovalDate"
                data-cy="regulatorApprovalDate"
                type="date"
              />
              <ValidatedField
                label="Outlet Closure Date"
                id="service-outlet-outletClosureDate"
                name="outletClosureDate"
                data-cy="outletClosureDate"
                type="date"
              />
              <ValidatedField
                label="Date Last Modified"
                id="service-outlet-dateLastModified"
                name="dateLastModified"
                data-cy="dateLastModified"
                type="date"
              />
              <ValidatedField
                label="License Fee Payable"
                id="service-outlet-licenseFeePayable"
                name="licenseFeePayable"
                data-cy="licenseFeePayable"
                type="text"
              />
              <ValidatedField
                label="Placeholder"
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
              <ValidatedField id="service-outlet-bankCode" name="bankCode" data-cy="bankCode" label="Bank Code" type="select">
                <option value="" key="0" />
                {bankBranchCodes
                  ? bankBranchCodes.map(otherEntity => (
                      <option value={otherEntity.id} key={otherEntity.id}>
                        {otherEntity.branchCode}
                      </option>
                    ))
                  : null}
              </ValidatedField>
              <ValidatedField id="service-outlet-outletType" name="outletType" data-cy="outletType" label="Outlet Type" type="select">
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
                label="Outlet Status"
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
              <ValidatedField id="service-outlet-countyName" name="countyName" data-cy="countyName" label="County Name" type="select">
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
                label="Sub County Name"
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

export default ServiceOutletUpdate;
