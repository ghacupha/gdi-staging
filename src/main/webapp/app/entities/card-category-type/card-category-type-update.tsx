import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Row, Col, FormText } from 'reactstrap';
import { isNumber, ValidatedField, ValidatedForm } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { convertDateTimeFromServer, convertDateTimeToServer, displayDefaultDateTime } from 'app/shared/util/date-utils';
import { mapIdList } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { ICardCategoryType } from 'app/shared/model/card-category-type.model';
import { CardCategoryFlag } from 'app/shared/model/enumerations/card-category-flag.model';
import { getEntity, updateEntity, createEntity, reset } from './card-category-type.reducer';

export const CardCategoryTypeUpdate = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const { id } = useParams<'id'>();
  const isNew = id === undefined;

  const cardCategoryTypeEntity = useAppSelector(state => state.cardCategoryType.entity);
  const loading = useAppSelector(state => state.cardCategoryType.loading);
  const updating = useAppSelector(state => state.cardCategoryType.updating);
  const updateSuccess = useAppSelector(state => state.cardCategoryType.updateSuccess);
  const cardCategoryFlagValues = Object.keys(CardCategoryFlag);

  const handleClose = () => {
    navigate('/card-category-type' + location.search);
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
      ...cardCategoryTypeEntity,
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
          cardCategoryFlag: 'L',
          ...cardCategoryTypeEntity,
        };

  return (
    <div>
      <Row className="justify-content-center">
        <Col md="8">
          <h2 id="gdiStagingApp.cardCategoryType.home.createOrEditLabel" data-cy="CardCategoryTypeCreateUpdateHeading">
            Create or edit a Card Category Type
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
                <ValidatedField name="id" required readOnly id="card-category-type-id" label="ID" validate={{ required: true }} />
              ) : null}
              <ValidatedField
                label="Card Category Flag"
                id="card-category-type-cardCategoryFlag"
                name="cardCategoryFlag"
                data-cy="cardCategoryFlag"
                type="select"
              >
                {cardCategoryFlagValues.map(cardCategoryFlag => (
                  <option value={cardCategoryFlag} key={cardCategoryFlag}>
                    {cardCategoryFlag}
                  </option>
                ))}
              </ValidatedField>
              <ValidatedField
                label="Card Category Description"
                id="card-category-type-cardCategoryDescription"
                name="cardCategoryDescription"
                data-cy="cardCategoryDescription"
                type="text"
                validate={{
                  required: { value: true, message: 'This field is required.' },
                }}
              />
              <ValidatedField
                label="Card Category Details"
                id="card-category-type-cardCategoryDetails"
                name="cardCategoryDetails"
                data-cy="cardCategoryDetails"
                type="textarea"
              />
              <Button tag={Link} id="cancel-save" data-cy="entityCreateCancelButton" to="/card-category-type" replace color="info">
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

export default CardCategoryTypeUpdate;
