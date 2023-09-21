import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './source-remittance-purpose-type.reducer';

export const SourceRemittancePurposeTypeDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const sourceRemittancePurposeTypeEntity = useAppSelector(state => state.sourceRemittancePurposeType.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="sourceRemittancePurposeTypeDetailsHeading">Source Remittance Purpose Type</h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">ID</span>
          </dt>
          <dd>{sourceRemittancePurposeTypeEntity.id}</dd>
          <dt>
            <span id="sourceOrPurposeTypeCode">Source Or Purpose Type Code</span>
          </dt>
          <dd>{sourceRemittancePurposeTypeEntity.sourceOrPurposeTypeCode}</dd>
          <dt>
            <span id="sourceOrPurposeOfRemittanceFlag">Source Or Purpose Of Remittance Flag</span>
          </dt>
          <dd>{sourceRemittancePurposeTypeEntity.sourceOrPurposeOfRemittanceFlag}</dd>
          <dt>
            <span id="sourceOrPurposeOfRemittanceType">Source Or Purpose Of Remittance Type</span>
          </dt>
          <dd>{sourceRemittancePurposeTypeEntity.sourceOrPurposeOfRemittanceType}</dd>
          <dt>
            <span id="remittancePurposeTypeDetails">Remittance Purpose Type Details</span>
          </dt>
          <dd>{sourceRemittancePurposeTypeEntity.remittancePurposeTypeDetails}</dd>
        </dl>
        <Button tag={Link} to="/source-remittance-purpose-type" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" /> <span className="d-none d-md-inline">Back</span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/source-remittance-purpose-type/${sourceRemittancePurposeTypeEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
        </Button>
      </Col>
    </Row>
  );
};

export default SourceRemittancePurposeTypeDetail;
