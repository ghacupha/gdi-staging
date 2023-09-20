import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-amount-category-band.reducer';

export const CrbAmountCategoryBandDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbAmountCategoryBandEntity = useAppSelector(state => state.crbAmountCategoryBand.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbAmountCategoryBandDetailsHeading">Crb Amount Category Band</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbAmountCategoryBandEntity.id}</dd>
          <dt>
            <span id="amountCategoryBandCode">Amount Category Band Code</span>
          </dt>
          <dd>{crbAmountCategoryBandEntity.amountCategoryBandCode}</dd>
          <dt>
            <span id="amountCategoryBand">Amount Category Band</span>
          </dt>
          <dd>{crbAmountCategoryBandEntity.amountCategoryBand}</dd>
          <dt>
            <span id="amountCategoryBandDetails">Amount Category Band Details</span>
          </dt>
          <dd>{crbAmountCategoryBandEntity.amountCategoryBandDetails}</dd>
        </dl>
        <Button tag={Link} to="/crb-amount-category-band" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-amount-category-band/${crbAmountCategoryBandEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbAmountCategoryBandDetail;
