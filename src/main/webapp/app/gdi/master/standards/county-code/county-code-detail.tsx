import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './county-code.reducer';

export const CountyCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const countyCodeEntity = useAppSelector(state => state.countyCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="countyCodeDetailsHeading">County Code</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{countyCodeEntity.id}</dd>
          <dt>
            <span id="countyCode">County Code</span>
          </dt>
          <dd>{countyCodeEntity.countyCode}</dd>
          <dt>
            <span id="countyName">County Name</span>
          </dt>
          <dd>{countyCodeEntity.countyName}</dd>
          <dt>
            <span id="subCountyCode">Sub County Code</span>
          </dt>
          <dd>{countyCodeEntity.subCountyCode}</dd>
          <dt>
            <span id="subCountyName">Sub County Name</span>
          </dt>
          <dd>{countyCodeEntity.subCountyName}</dd>
          <dt>Placeholder</dt>
          <dd>
            {countyCodeEntity.placeholders
              ? countyCodeEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {countyCodeEntity.placeholders && i === countyCodeEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/county-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/county-code/${countyCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default CountyCodeDetail;
