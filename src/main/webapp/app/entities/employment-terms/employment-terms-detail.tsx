import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './employment-terms.reducer';

export const EmploymentTermsDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const employmentTermsEntity = useAppSelector(state => state.employmentTerms.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="employmentTermsDetailsHeading">Employment Terms</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{employmentTermsEntity.id}</dd>
          <dt>
            <span id="employmentTermsCode">Employment Terms Code</span>
          </dt>
          <dd>{employmentTermsEntity.employmentTermsCode}</dd>
          <dt>
            <span id="employmentTermsStatus">Employment Terms Status</span>
          </dt>
          <dd>{employmentTermsEntity.employmentTermsStatus}</dd>
        </dl>
        <Button tag={Link} to="/employment-terms" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/employment-terms/${employmentTermsEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default EmploymentTermsDetail;
