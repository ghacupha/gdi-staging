import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './executive-category-type.reducer';

export const ExecutiveCategoryTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const executiveCategoryTypeEntity = useAppSelector(state => state.executiveCategoryType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="executiveCategoryTypeDetailsHeading">Executive Category Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{executiveCategoryTypeEntity.id}</dd>
          <dt>
            <span id="directorCategoryTypeCode">Director Category Type Code</span>
          </dt>
          <dd>{executiveCategoryTypeEntity.directorCategoryTypeCode}</dd>
          <dt>
            <span id="directorCategoryType">Director Category Type</span>
          </dt>
          <dd>{executiveCategoryTypeEntity.directorCategoryType}</dd>
          <dt>
            <span id="directorCategoryTypeDetails">Director Category Type Details</span>
          </dt>
          <dd>{executiveCategoryTypeEntity.directorCategoryTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/executive-category-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/executive-category-type/${executiveCategoryTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ExecutiveCategoryTypeDetail;
