import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './fx-receipt-purpose-type.reducer';

export const FxReceiptPurposeTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const fxReceiptPurposeTypeEntity = useAppSelector(state => state.fxReceiptPurposeType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="fxReceiptPurposeTypeDetailsHeading">Fx Receipt Purpose Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.id}</dd>
          <dt>
            <span id="itemCode">Item Code</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.itemCode}</dd>
          <dt>
            <span id="attribute1ReceiptPaymentPurposeCode">Attribute 1 Receipt Payment Purpose Code</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.attribute1ReceiptPaymentPurposeCode}</dd>
          <dt>
            <span id="attribute1ReceiptPaymentPurposeType">Attribute 1 Receipt Payment Purpose Type</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.attribute1ReceiptPaymentPurposeType}</dd>
          <dt>
            <span id="attribute2ReceiptPaymentPurposeCode">Attribute 2 Receipt Payment Purpose Code</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.attribute2ReceiptPaymentPurposeCode}</dd>
          <dt>
            <span id="attribute2ReceiptPaymentPurposeDescription">Attribute 2 Receipt Payment Purpose Description</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.attribute2ReceiptPaymentPurposeDescription}</dd>
          <dt>
            <span id="attribute3ReceiptPaymentPurposeCode">Attribute 3 Receipt Payment Purpose Code</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.attribute3ReceiptPaymentPurposeCode}</dd>
          <dt>
            <span id="attribute3ReceiptPaymentPurposeDescription">Attribute 3 Receipt Payment Purpose Description</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.attribute3ReceiptPaymentPurposeDescription}</dd>
          <dt>
            <span id="attribute4ReceiptPaymentPurposeCode">Attribute 4 Receipt Payment Purpose Code</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.attribute4ReceiptPaymentPurposeCode}</dd>
          <dt>
            <span id="attribute4ReceiptPaymentPurposeDescription">Attribute 4 Receipt Payment Purpose Description</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.attribute4ReceiptPaymentPurposeDescription}</dd>
          <dt>
            <span id="attribute5ReceiptPaymentPurposeCode">Attribute 5 Receipt Payment Purpose Code</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.attribute5ReceiptPaymentPurposeCode}</dd>
          <dt>
            <span id="attribute5ReceiptPaymentPurposeDescription">Attribute 5 Receipt Payment Purpose Description</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.attribute5ReceiptPaymentPurposeDescription}</dd>
          <dt>
            <span id="lastChild">Last Child</span>
          </dt>
          <dd>{fxReceiptPurposeTypeEntity.lastChild}</dd>
        </dl>
        <Button tag={Link} to="/fx-receipt-purpose-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/fx-receipt-purpose-type/${fxReceiptPurposeTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default FxReceiptPurposeTypeDetail;
