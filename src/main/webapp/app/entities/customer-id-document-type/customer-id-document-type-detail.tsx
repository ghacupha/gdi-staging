import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './customer-id-document-type.reducer';

export const CustomerIDDocumentTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const customerIDDocumentTypeEntity = useAppSelector(state => state.customerIDDocumentType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="customerIDDocumentTypeDetailsHeading">
          <Translate contentKey="gdiStagingApp.customerIDDocumentType.detail.title">CustomerIDDocumentType</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{customerIDDocumentTypeEntity.id}</dd>
          <dt>
            <span id="documentCode">
              <Translate contentKey="gdiStagingApp.customerIDDocumentType.documentCode">Document Code</Translate>
            </span>
          </dt>
          <dd>{customerIDDocumentTypeEntity.documentCode}</dd>
          <dt>
            <span id="documentType">
              <Translate contentKey="gdiStagingApp.customerIDDocumentType.documentType">Document Type</Translate>
            </span>
          </dt>
          <dd>{customerIDDocumentTypeEntity.documentType}</dd>
          <dt>
            <span id="documentTypeDescription">
              <Translate contentKey="gdiStagingApp.customerIDDocumentType.documentTypeDescription">Document Type Description</Translate>
            </span>
          </dt>
          <dd>{customerIDDocumentTypeEntity.documentTypeDescription}</dd>
          <dt>
            <Translate contentKey="gdiStagingApp.customerIDDocumentType.placeholder">Placeholder</Translate>
          </dt>
          <dd>
            {customerIDDocumentTypeEntity.placeholders
              ? customerIDDocumentTypeEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {customerIDDocumentTypeEntity.placeholders && i === customerIDDocumentTypeEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/customer-id-document-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/customer-id-document-type/${customerIDDocumentTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default CustomerIDDocumentTypeDetail;
