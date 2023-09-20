import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICategoryOfSecurity } from 'app/shared/model/category-of-security.model';
import { getEntity, updateEntity, createEntity, reset } from './category-of-security.reducer';

export const CategoryOfSecurityUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const categoryOfSecurityEntity = useAppSelector(state => state.categoryOfSecurity.entity);
  const loading = useAppSelector(state => state.categoryOfSecurity.loading);
  const updating = useAppSelector(state => state.categoryOfSecurity.updating);
  const updateSuccess = useAppSelector(state => state.categoryOfSecurity.updateSuccess);

  const handleClose = () => {
    navigate('/category-of-security' + location.search);
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
      ...categoryOfSecurityEntity,
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
          ...categoryOfSecurityEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.categoryOfSecurity.home.createOrEditLabel" data-cy="CategoryOfSecurityCreateUpdateHeading">
            Create or edit a Category Of Security
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
                <ValidatedField name="id" required readOnly id="category-of-security-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Category Of Security"
                id="category-of-security-categoryOfSecurity"
                name="categoryOfSecurity"
                data-cy="categoryOfSecurity"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Category Of Security Details"
                id="category-of-security-categoryOfSecurityDetails"
                name="categoryOfSecurityDetails"
                data-cy="categoryOfSecurityDetails"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Category Of Security Description"
                id="category-of-security-categoryOfSecurityDescription"
                name="categoryOfSecurityDescription"
                data-cy="categoryOfSecurityDescription"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/category-of-security" replace color="info">
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

export default CategoryOfSecurityUpdate;
