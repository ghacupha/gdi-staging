import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { INatureOfCustomerComplaints } from 'app/shared/model/nature-of-customer-complaints.model';
import { getEntity, updateEntity, createEntity, reset } from './nature-of-customer-complaints.reducer';

export const NatureOfCustomerComplaintsUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const natureOfCustomerComplaintsEntity = useAppSelector(state => state.natureOfCustomerComplaints.entity);
  const loading = useAppSelector(state => state.natureOfCustomerComplaints.loading);
  const updating = useAppSelector(state => state.natureOfCustomerComplaints.updating);
  const updateSuccess = useAppSelector(state => state.natureOfCustomerComplaints.updateSuccess);

  const handleClose = () => {
    navigate('/nature-of-customer-complaints' + location.search);
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
      ...natureOfCustomerComplaintsEntity,
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
          ...natureOfCustomerComplaintsEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.natureOfCustomerComplaints.home.createOrEditLabel" data-cy="NatureOfCustomerComplaintsCreateUpdateHeading">
            Create or edit a Nature Of Customer Complaints
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
                  id="nature-of-customer-complaints-id"
                  label="ID"
                  validate={{ required: true }}
                />
              ) : null}
              <ValidatedField
                label="Nature Of Complaint Type Code"
                id="nature-of-customer-complaints-natureOfComplaintTypeCode"
                name="natureOfComplaintTypeCode"
                data-cy="natureOfComplaintTypeCode"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Nature Of Complaint Type"
                id="nature-of-customer-complaints-natureOfComplaintType"
                name="natureOfComplaintType"
                data-cy="natureOfComplaintType"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Nature Of Complaint Type Details"
                id="nature-of-customer-complaints-natureOfComplaintTypeDetails"
                name="natureOfComplaintTypeDetails"
                data-cy="natureOfComplaintTypeDetails"
                type="textarea"
              />
              <Button
                tag={Link}
                id="cancel-save"
                data-cy="entityCreateCancelButton"
                to="/nature-of-customer-complaints"
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

export default NatureOfCustomerComplaintsUpdate;
