import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbReportViewBand } from 'app/shared/model/crb-report-view-band.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-report-view-band.reducer';

export const CrbReportViewBandUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbReportViewBandEntity = useAppSelector(state => state.crbReportViewBand.entity);
  const loading = useAppSelector(state => state.crbReportViewBand.loading);
  const updating = useAppSelector(state => state.crbReportViewBand.updating);
  const updateSuccess = useAppSelector(state => state.crbReportViewBand.updateSuccess);

  const handleClose = () => {
    navigate('/crb-report-view-band' + location.search);
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
      ...crbReportViewBandEntity,
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
          ...crbReportViewBandEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbReportViewBand.home.createOrEditLabel" data-cy="CrbReportViewBandCreateUpdateHeading">
            Create or edit a Crb Report View Band
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
                <ValidatedField name="id" required readOnly id="crb-report-view-band-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Report View Code"
                id="crb-report-view-band-reportViewCode"
                name="reportViewCode"
                data-cy="reportViewCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Report View Category"
                id="crb-report-view-band-reportViewCategory"
                name="reportViewCategory"
                data-cy="reportViewCategory"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Report View Category Description"
                id="crb-report-view-band-reportViewCategoryDescription"
                name="reportViewCategoryDescription"
                data-cy="reportViewCategoryDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-report-view-band" replace color="info">
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

export default CrbReportViewBandUpdate;
