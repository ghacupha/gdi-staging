import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-credit-facility-type.reducer';

export const CrbCreditFacilityTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbCreditFacilityTypeEntity = useAppSelector(state => state.crbCreditFacilityType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbCreditFacilityTypeDetailsHeading">Crb Credit Facility Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbCreditFacilityTypeEntity.id}</dd>
          <dt>
            <span id="creditFacilityTypeCode">Credit Facility Type Code</span>
          </dt>
          <dd>{crbCreditFacilityTypeEntity.creditFacilityTypeCode}</dd>
          <dt>
            <span id="creditFacilityType">Credit Facility Type</span>
          </dt>
          <dd>{crbCreditFacilityTypeEntity.creditFacilityType}</dd>
          <dt>
            <span id="creditFacilityDescription">Credit Facility Description</span>
          </dt>
          <dd>{crbCreditFacilityTypeEntity.creditFacilityDescription}</dd>
        </dl>
        <Button tag={Link} to="/crb-credit-facility-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-credit-facility-type/${crbCreditFacilityTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbCreditFacilityTypeDetail;
