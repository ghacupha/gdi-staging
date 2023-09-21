import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
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
        <h2 data-cy="customerIDDocumentTypeDetailsHeading">Customer ID Document Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{customerIDDocumentTypeEntity.id}</dd>
          <dt>
            <span id="documentCode">Document Code</span>
          </dt>
          <dd>{customerIDDocumentTypeEntity.documentCode}</dd>
          <dt>
            <span id="documentType">Document Type</span>
          </dt>
          <dd>{customerIDDocumentTypeEntity.documentType}</dd>
          <dt>
            <span id="documentTypeDescription">Document Type Description</span>
          </dt>
          <dd>{customerIDDocumentTypeEntity.documentTypeDescription}</dd>
          <dt>Placeholder</dt>
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
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/customer-id-document-type/${customerIDDocumentTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CustomerIDDocumentTypeDetail;
