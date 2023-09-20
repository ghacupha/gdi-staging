import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './institution-code.reducer';

export const InstitutionCodeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const institutionCodeEntity = useAppSelector(state => state.institutionCode.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="institutionCodeDetailsHeading">Institution Code</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{institutionCodeEntity.id}</dd>
          <dt>
            <span id="institutionCode">Institution Code</span>
          </dt>
          <dd>{institutionCodeEntity.institutionCode}</dd>
          <dt>
            <span id="institutionName">Institution Name</span>
          </dt>
          <dd>{institutionCodeEntity.institutionName}</dd>
          <dt>
            <span id="shortName">Short Name</span>
          </dt>
          <dd>{institutionCodeEntity.shortName}</dd>
          <dt>
            <span id="category">Category</span>
          </dt>
          <dd>{institutionCodeEntity.category}</dd>
          <dt>
            <span id="institutionCategory">Institution Category</span>
          </dt>
          <dd>{institutionCodeEntity.institutionCategory}</dd>
          <dt>
            <span id="institutionOwnership">Institution Ownership</span>
          </dt>
          <dd>{institutionCodeEntity.institutionOwnership}</dd>
          <dt>
            <span id="dateLicensed">Date Licensed</span>
          </dt>
          <dd>
            {institutionCodeEntity.dateLicensed ? (
              <TextFormat value={institutionCodeEntity.dateLicensed} type="date" format={APP_LOCAL_DATE_FORMAT} />
            ) : null}
          </dd>
          <dt>
            <span id="institutionStatus">Institution Status</span>
          </dt>
          <dd>{institutionCodeEntity.institutionStatus}</dd>
          <dt>Placeholder</dt>
          <dd>
            {institutionCodeEntity.placeholders
              ? institutionCodeEntity.placeholders.map((val, i) => (
                  <span key={val.id}>
                    <a>{val.description}</a>
                    {institutionCodeEntity.placeholders && i === institutionCodeEntity.placeholders.length - 1 ? '' : ', '}
                  </span>
                ))
              : null}
          </dd>
        </dl>
        <Button tag={Link} to="/institution-code" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/institution-code/${institutionCodeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default InstitutionCodeDetail;
