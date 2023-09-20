import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICrbReportRequestReasons } from 'app/shared/model/crb-report-request-reasons.model';
import { getEntity, updateEntity, createEntity, reset } from './crb-report-request-reasons.reducer';

export const CrbReportRequestReasonsUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const crbReportRequestReasonsEntity = useAppSelector(state => state.crbReportRequestReasons.entity);
  const loading = useAppSelector(state => state.crbReportRequestReasons.loading);
  const updating = useAppSelector(state => state.crbReportRequestReasons.updating);
  const updateSuccess = useAppSelector(state => state.crbReportRequestReasons.updateSuccess);

  const handleClose = () => {
    navigate('/crb-report-request-reasons' + location.search);
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
      ...crbReportRequestReasonsEntity,
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
          ...crbReportRequestReasonsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.crbReportRequestReasons.home.createOrEditLabel" data-cy="CrbReportRequestReasonsCreateUpdateHeading">
            Create or edit a Crb Report Request Reasons
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
                <ValidatedField name="id" required readOnly id="crb-report-request-reasons-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Credit Report Request Reason Type Code"
                id="crb-report-request-reasons-creditReportRequestReasonTypeCode"
                name="creditReportRequestReasonTypeCode"
                data-cy="creditReportRequestReasonTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Credit Report Request Reason Type"
                id="crb-report-request-reasons-creditReportRequestReasonType"
                name="creditReportRequestReasonType"
                data-cy="creditReportRequestReasonType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Credit Report Request Details"
                id="crb-report-request-reasons-creditReportRequestDetails"
                name="creditReportRequestDetails"
                data-cy="creditReportRequestDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/crb-report-request-reasons" replace color="info">
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

export default CrbReportRequestReasonsUpdate;
