import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './insider-category-types.reducer';

export const InsiderCategoryTypesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const insiderCategoryTypesEntity = useAppSelector(state => state.insiderCategoryTypes.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="insiderCategoryTypesDetailsHeading">Insider Category Types</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{insiderCategoryTypesEntity.id}</dd>
          <dt>
            <span id="insiderCategoryTypeCode">Insider Category Type Code</span>
          </dt>
          <dd>{insiderCategoryTypesEntity.insiderCategoryTypeCode}</dd>
          <dt>
            <span id="insiderCategoryTypeDetail">Insider Category Type Detail</span>
          </dt>
          <dd>{insiderCategoryTypesEntity.insiderCategoryTypeDetail}</dd>
          <dt>
            <span id="insiderCategoryDescription">Insider Category Description</span>
          </dt>
          <dd>{insiderCategoryTypesEntity.insiderCategoryDescription}</dd>
        </dl>
        <Button tag={Link} to="/insider-category-types" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/insider-category-types/${insiderCategoryTypesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default InsiderCategoryTypesDetail;
