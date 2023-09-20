import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import {} from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './bounced-cheque-categories.reducer';

export const BouncedChequeCategoriesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const bouncedChequeCategoriesEntity = useAppSelector(state => state.bouncedChequeCategories.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="bouncedChequeCategoriesDetailsHeading">Bounced Cheque Categories</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{bouncedChequeCategoriesEntity.id}</dd>
          <dt>
            <span id="bouncedChequeCategoryTypeCode">Bounced Cheque Category Type Code</span>
          </dt>
          <dd>{bouncedChequeCategoriesEntity.bouncedChequeCategoryTypeCode}</dd>
          <dt>
            <span id="bouncedChequeCategoryType">Bounced Cheque Category Type</span>
          </dt>
          <dd>{bouncedChequeCategoriesEntity.bouncedChequeCategoryType}</dd>
        </dl>
        <Button tag={Link} to="/bounced-cheque-categories" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/bounced-cheque-categories/${bouncedChequeCategoriesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default BouncedChequeCategoriesDetail;
