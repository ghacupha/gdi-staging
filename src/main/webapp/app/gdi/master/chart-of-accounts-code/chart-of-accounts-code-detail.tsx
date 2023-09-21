import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './chart-of-accounts-code.reducer';

export const ChartOfAccountsCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const chartOfAccountsCodeEntity = useAppSelector(state => state.chartOfAccountsCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="chartOfAccountsCodeDetailsHeading">Chart Of Accounts Code</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{chartOfAccountsCodeEntity.id}</dd>
          <dt>
            <span id="chartOfAccountsCode">Chart Of Accounts Code</span>
          </dt>
          <dd>{chartOfAccountsCodeEntity.chartOfAccountsCode}</dd>
          <dt>
            <span id="chartOfAccountsClass">Chart Of Accounts Class</span>
          </dt>
          <dd>{chartOfAccountsCodeEntity.chartOfAccountsClass}</dd>
          <dt>
            <span id="description">Description</span>
          </dt>
          <dd>{chartOfAccountsCodeEntity.description}</dd>
        </dl>
        <Button tag={Link} to="/chart-of-accounts-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/chart-of-accounts-code/${chartOfAccountsCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default ChartOfAccountsCodeDetail;
