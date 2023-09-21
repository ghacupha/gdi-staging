import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './gl-mapping.reducer';

export const GlMappingDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const glMappingEntity = useAppSelector(state => state.glMapping.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="glMappingDetailsHeading">Gl Mapping</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{glMappingEntity.id}</dd>
          <dt>
            <span id="subGLCode">Sub GL Code</span>
          </dt>
          <dd>{glMappingEntity.subGLCode}</dd>
          <dt>
            <span id="subGLDescription">Sub GL Description</span>
          </dt>
          <dd>{glMappingEntity.subGLDescription}</dd>
          <dt>
            <span id="mainGLCode">Main GL Code</span>
          </dt>
          <dd>{glMappingEntity.mainGLCode}</dd>
          <dt>
            <span id="mainGLDescription">Main GL Description</span>
          </dt>
          <dd>{glMappingEntity.mainGLDescription}</dd>
          <dt>
            <span id="glType">Gl Type</span>
          </dt>
          <dd>{glMappingEntity.glType}</dd>
        </dl>
        <Button tag={Link} to="/gl-mapping" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/gl-mapping/${glMappingEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default GlMappingDetail;
