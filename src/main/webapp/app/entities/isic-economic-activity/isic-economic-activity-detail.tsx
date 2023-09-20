import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './isic-economic-activity.reducer';

export const IsicEconomicActivityDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const isicEconomicActivityEntity = useAppSelector(state => state.isicEconomicActivity.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="isicEconomicActivityDetailsHeading">Isic Economic Activity</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{isicEconomicActivityEntity.id}</dd>
          <dt>
            <span id="businessEconomicActivityCode">Business Economic Activity Code</span>
          </dt>
          <dd>{isicEconomicActivityEntity.businessEconomicActivityCode}</dd>
          <dt>
            <span id="section">Section</span>
          </dt>
          <dd>{isicEconomicActivityEntity.section}</dd>
          <dt>
            <span id="sectionLabel">Section Label</span>
          </dt>
          <dd>{isicEconomicActivityEntity.sectionLabel}</dd>
          <dt>
            <span id="division">Division</span>
          </dt>
          <dd>{isicEconomicActivityEntity.division}</dd>
          <dt>
            <span id="divisionLabel">Division Label</span>
          </dt>
          <dd>{isicEconomicActivityEntity.divisionLabel}</dd>
          <dt>
            <span id="groupCode">Group Code</span>
          </dt>
          <dd>{isicEconomicActivityEntity.groupCode}</dd>
          <dt>
            <span id="groupLabel">Group Label</span>
          </dt>
          <dd>{isicEconomicActivityEntity.groupLabel}</dd>
          <dt>
            <span id="classCode">Class Code</span>
          </dt>
          <dd>{isicEconomicActivityEntity.classCode}</dd>
          <dt>
            <span id="businessEconomicActivityType">Business Economic Activity Type</span>
          </dt>
          <dd>{isicEconomicActivityEntity.businessEconomicActivityType}</dd>
          <dt>
            <span id="businessEconomicActivityTypeDescription">Business Economic Activity Type Description</span>
          </dt>
          <dd>{isicEconomicActivityEntity.businessEconomicActivityTypeDescription}</dd>
        </dl>
        <Button tag={Link} to="/isic-economic-activity" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/isic-economic-activity/${isicEconomicActivityEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default IsicEconomicActivityDetail;
