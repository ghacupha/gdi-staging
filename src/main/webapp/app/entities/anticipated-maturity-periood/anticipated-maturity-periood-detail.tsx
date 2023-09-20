import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './anticipated-maturity-periood.reducer';

export const AnticipatedMaturityPerioodDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const anticipatedMaturityPerioodEntity = useAppSelector(state => state.anticipatedMaturityPeriood.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="anticipatedMaturityPerioodDetailsHeading">Anticipated Maturity Periood</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{anticipatedMaturityPerioodEntity.id}</dd>
          <dt>
            <span id="anticipatedMaturityTenorCode">Anticipated Maturity Tenor Code</span>
          </dt>
          <dd>{anticipatedMaturityPerioodEntity.anticipatedMaturityTenorCode}</dd>
          <dt>
            <span id="aniticipatedMaturityTenorType">Aniticipated Maturity Tenor Type</span>
          </dt>
          <dd>{anticipatedMaturityPerioodEntity.aniticipatedMaturityTenorType}</dd>
          <dt>
            <span id="anticipatedMaturityTenorDetails">Anticipated Maturity Tenor Details</span>
          </dt>
          <dd>{anticipatedMaturityPerioodEntity.anticipatedMaturityTenorDetails}</dd>
        </dl>
        <Button tag={Link} to="/anticipated-maturity-periood" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/anticipated-maturity-periood/${anticipatedMaturityPerioodEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default AnticipatedMaturityPerioodDetail;
