import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, Translate, translate, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntities as getPlaceholders } from 'app/gdi/service/placeholder/placeholder.reducer';
import { IBankBranchCode } from 'app/shared/model/bank-branch-code.model';
import { getEntities as getBankBranchCodes } from 'app/gdi/standards/bank-branch-code/bank-branch-code.reducer';
import { IOutletStatus } from 'app/shared/model/outlet-status.model';
import { getEntities as getOutletStatuses } from 'app/gdi/standards/outlet-status/outlet-status.reducer';
import { IOutletType } from 'app/shared/model/outlet-type.model';
import { getEntities as getOutletTypes } from 'app/gdi/standards/outlet-type/outlet-type.reducer';
import { ICountyCode } from 'app/shared/model/county-code.model';
import { getEntities as getCountyCodes } from 'app/gdi/standards/county-code/county-code.reducer';
import { IServiceOutlet } from 'app/shared/model/service-outlet.model';
import { getEntities as getServiceOutlets } from 'app/gdi/standards/service-outlet/service-outlet.reducer';
import { ICustomerIDDocumentType } from 'app/shared/model/customer-id-document-type.model';
import { getEntities as getCustomerIdDocumentTypes } from 'app/gdi/standards/customer-id-document-type/customer-id-document-type.reducer';
import { IInstitutionCode } from 'app/shared/model/institution-code.model';
import { getEntities as getInstitutionCodes } from 'app/gdi/standards/institution-code/institution-code.reducer';
import { IMfbBranchCode } from 'app/shared/model/mfb-branch-code.model';
import { getEntities as getMfbBranchCodes } from 'app/gdi/standards/mfb-branch-code/mfb-branch-code.reducer';
import { IIsoCountryCode } from 'app/shared/model/iso-country-code.model';
import { getEntities as getIsoCountryCodes } from 'app/gdi/standards/iso-country-code/iso-country-code.reducer';
import { ISubCountyCode } from 'app/shared/model/sub-county-code.model';
import { getEntities as getSubCountyCodes } from 'app/gdi/standards/sub-county-code/sub-county-code.reducer';
import { IUniversallyUniqueMapping } from 'app/shared/model/universally-unique-mapping.model';
import { getEntities as getUniversallyUniqueMappings } from 'app/gdi/service/universally-unique-mapping/universally-unique-mapping.reducer';
import { IPlaceholder } from 'app/shared/model/erpService/placeholder.model';
import { getEntity, updateEntity, createEntity, reset } from './placeholder.reducer';

export const PlaceholderUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const placeholders = useAppSelector(state => state.placeholder.entities);
  const bankBranchCodes = useAppSelector(state => state.bankBranchCode.entities);
  const outletStatuses = useAppSelector(state => state.outletStatus.entities);
  const outletTypes = useAppSelector(state => state.outletType.entities);
  const countyCodes = useAppSelector(state => state.countyCode.entities);
  const serviceOutlets = useAppSelector(state => state.serviceOutlet.entities);
  const customerIDDocumentTypes = useAppSelector(state => state.customerIDDocumentType.entities);
  const institutionCodes = useAppSelector(state => state.institutionCode.entities);
  const mfbBranchCodes = useAppSelector(state => state.mfbBranchCode.entities);
  const isoCountryCodes = useAppSelector(state => state.isoCountryCode.entities);
  const subCountyCodes = useAppSelector(state => state.subCountyCode.entities);
  const universallyUniqueMappings = useAppSelector(state => state.universallyUniqueMapping.entities);
  const placeholderEntity = useAppSelector(state => state.placeholder.entity);
  const loading = useAppSelector(state => state.placeholder.loading);
  const updating = useAppSelector(state => state.placeholder.updating);
  const updateSuccess = useAppSelector(state => state.placeholder.updateSuccess);

  const handleClose = () => {
    navigate('/placeholder' + location.search);
  };

  useEffect(() => {
    if (isNew) {
      dispatch(reset());
    } else {
      dispatch(getEntity(id));
    }

    dispatch(getPlaceholders({}));
    dispatch(getBankBranchCodes({}));
    dispatch(getOutletStatuses({}));
    dispatch(getOutletTypes({}));
    dispatch(getCountyCodes({}));
    dispatch(getServiceOutlets({}));
    dispatch(getCustomerIdDocumentTypes({}));
    dispatch(getInstitutionCodes({}));
    dispatch(getMfbBranchCodes({}));
    dispatch(getIsoCountryCodes({}));
    dispatch(getSubCountyCodes({}));
    dispatch(getUniversallyUniqueMappings({}));
  }, []);

  useEffect(() => {
    if (updateSuccess) {
      handleClose();
    }
  }, [updateSuccess]);

  const saveEntity = values => {
    const entity = {
      ...placeholderEntity,
      ...values,
      containingPlaceholder: placeholders.find(it => it.id.toString() === values.containingPlaceholder.toString()),
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
          ...placeholderEntity,
          containingPlaceholder: placeholderEntity?.containingPlaceholder?.id,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.erpServicePlaceholder.home.createOrEditLabel" data-cy="PlaceholderCreateUpdateHeading">
            <Translate contentKey="gdiStagingApp.erpServicePlaceholder.home.createOrEditLabel">Create or edit a Placeholder</Translate>
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
                  id="placeholder-id"
                  label={translate('global.field.id')}
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label={translate('gdiStagingApp.erpServicePlaceholder.description')}
                id="placeholder-description"
                name="description"
                data-cy="description"
                type="text"
                validate={{
                  required: { value: true, message: translate('entity.validation.required') },
                }}
              />
              <ValidatedField
                label={translate('gdiStagingApp.erpServicePlaceholder.token')}
                id="placeholder-token"
                name="token"
                data-cy="token"
                type="text"
                validate={{}}
              />
              <ValidatedField
                id="placeholder-containingPlaceholder"
                name="containingPlaceholder"
                data-cy="containingPlaceholder"
                label={translate('gdiStagingApp.erpServicePlaceholder.containingPlaceholder')}
                type="select"
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
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/placeholder" replace color="info">
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

export default PlaceholderUpdate;
