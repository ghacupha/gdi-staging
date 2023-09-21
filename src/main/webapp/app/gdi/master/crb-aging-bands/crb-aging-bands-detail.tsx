import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './crb-aging-bands.reducer';

export const CrbAgingBandsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const crbAgingBandsEntity = useAppSelector(state => state.crbAgingBands.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="crbAgingBandsDetailsHeading">Crb Aging Bands</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{crbAgingBandsEntity.id}</dd>
          <dt>
            <span id="agingBandCategoryCode">Aging Band Category Code</span>
          </dt>
          <dd>{crbAgingBandsEntity.agingBandCategoryCode}</dd>
          <dt>
            <span id="agingBandCategory">Aging Band Category</span>
          </dt>
          <dd>{crbAgingBandsEntity.agingBandCategory}</dd>
          <dt>
            <span id="agingBandCategoryDetails">Aging Band Category Details</span>
          </dt>
          <dd>{crbAgingBandsEntity.agingBandCategoryDetails}</dd>
        </dl>
        <Button tag={Link} to="/crb-aging-bands" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/crb-aging-bands/${crbAgingBandsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CrbAgingBandsDetail;
