import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Input, InputGroup, FormGroup, Form, Row, Col, Table } from 'reactstrap';
import { translate, TextFormat, getSortState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IServiceOutlet } from 'app/shared/model/standards/service-outlet.model';
import { searchEntities, getEntities, reset } from './service-outlet.reducer';

export const ServiceOutlet = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getSortState(location, ITEMS_PER_PAGE, 'id'), location.search)
  );
  const [sorting, setSorting] = useState(false);

  const serviceOutletList = useAppSelector(state => state.serviceOutlet.entities);
  const loading = useAppSelector(state => state.serviceOutlet.loading);
  const totalItems = useAppSelector(state => state.serviceOutlet.totalItems);
  const links = useAppSelector(state => state.serviceOutlet.links);
  const entity = useAppSelector(state => state.serviceOutlet.entity);
  const updateSuccess = useAppSelector(state => state.serviceOutlet.updateSuccess);

  const getAllEntities = () => {
    if (search) {
      dispatch(
        searchEntities({
          query: search,
          page: paginationState.activePage - 1,
          size: paginationState.itemsPerPage,
          sort: `${paginationState.sort},${paginationState.order}`,
        })
      );
    } else {
      dispatch(
        getEntities({
          page: paginationState.activePage - 1,
          size: paginationState.itemsPerPage,
          sort: `${paginationState.sort},${paginationState.order}`,
        })
      );
    }
  };

  const resetAll = () => {
    dispatch(reset());
    setPaginationState({
      ...paginationState,
      activePage: 1,
    });
    dispatch(getEntities({}));
  };

  useEffect(() => {
    resetAll();
  }, []);

  const startSearching = e => {
    if (search) {
      dispatch(reset());
      setPaginationState({
        ...paginationState,
        activePage: 1,
      });
      dispatch(
        searchEntities({
          query: search,
          page: paginationState.activePage - 1,
          size: paginationState.itemsPerPage,
          sort: `${paginationState.sort},${paginationState.order}`,
        })
      );
    }
    e.preventDefault();
  };

  const clear = () => {
    dispatch(reset());
    setSearch('');
    setPaginationState({
      ...paginationState,
      activePage: 1,
    });
    dispatch(getEntities({}));
  };

  const handleSearch = event => setSearch(event.target.value);

  useEffect(() => {
    if (updateSuccess) {
      resetAll();
    }
  }, [updateSuccess]);

  useEffect(() => {
    getAllEntities();
  }, [paginationState.activePage]);

  const handleLoadMore = () => {
    if ((window as any).pageYOffset > 0) {
      setPaginationState({
        ...paginationState,
        activePage: paginationState.activePage + 1,
      });
    }
  };

  useEffect(() => {
    if (sorting) {
      getAllEntities();
      setSorting(false);
    }
  }, [sorting, search]);

  const sort = p => () => {
    dispatch(reset());
    setPaginationState({
      ...paginationState,
      activePage: 1,
      order: paginationState.order === ASC ? DESC : ASC,
      sort: p,
    });
    setSorting(true);
  };

  const handleSyncList = () => {
    resetAll();
  };

  return (
    <div>
      <h2 id="service-outlet-heading" data-cy="ServiceOutletHeading">
        Service Outlets
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh list
          </Button>
          <Link to="/service-outlet/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create a new Service Outlet
          </Link>
        </div>
      </h2>
      <Row>
        <Col sm="12">
          <Form onSubmit={startSearching}>
            <FormGroup>
              <InputGroup>
                <Input type="text" name="search" defaultValue={search} onChange={handleSearch} placeholder="Search" />
                <Button className="input-group-addon">
                  <FontAwesomeIcon icon="search" />
                </Button>
                <Button type="reset" className="input-group-addon" onClick={clear}>
                  <FontAwesomeIcon icon="trash" />
                </Button>
              </InputGroup>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <div className="table-responsive">
        <InfiniteScroll
          dataLength={serviceOutletList ? serviceOutletList.length : 0}
          next={handleLoadMore}
          hasMore={paginationState.activePage - 1 < links.next}
          loader={<div className="loader">Loading ...</div>}
        >
          {serviceOutletList && serviceOutletList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th className="hand" onClick={sort('id')}>
                    ID <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('outletCode')}>
                    Outlet Code <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('outletName')}>
                    Outlet Name <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('town')}>
                    Town <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('parliamentaryConstituency')}>
                    Parliamentary Constituency <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('gpsCoordinates')}>
                    Gps Coordinates <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('outletOpeningDate')}>
                    Outlet Opening Date <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('regulatorApprovalDate')}>
                    Regulator Approval Date <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('outletClosureDate')}>
                    Outlet Closure Date <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('dateLastModified')}>
                    Date Last Modified <FontAwesomeIcon icon="sort" />
                  </th>
                  <th className="hand" onClick={sort('licenseFeePayable')}>
                    License Fee Payable <FontAwesomeIcon icon="sort" />
                  </th>
                  <th>
                    Bank Code <FontAwesomeIcon icon="sort" />
                  </th>
                  <th>
                    Outlet Type <FontAwesomeIcon icon="sort" />
                  </th>
                  <th>
                    Outlet Status <FontAwesomeIcon icon="sort" />
                  </th>
                  <th>
                    County Name <FontAwesomeIcon icon="sort" />
                  </th>
                  <th>
                    Sub County Name <FontAwesomeIcon icon="sort" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {serviceOutletList.map((serviceOutlet, i) => (
                  <tr key={`entity-${i}`} data-cy="entityTable">
                    <td>
                      <Button tag={Link} to={`/service-outlet/${serviceOutlet.id}`} color="link" size="sm">
                        {serviceOutlet.id}
                      </Button>
                    </td>
                    <td>{serviceOutlet.outletCode}</td>
                    <td>{serviceOutlet.outletName}</td>
                    <td>{serviceOutlet.town}</td>
                    <td>{serviceOutlet.parliamentaryConstituency}</td>
                    <td>{serviceOutlet.gpsCoordinates}</td>
                    <td>
                      {serviceOutlet.outletOpeningDate ? (
                        <TextFormat type="date" value={serviceOutlet.outletOpeningDate} format={APP_LOCAL_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>
                      {serviceOutlet.regulatorApprovalDate ? (
                        <TextFormat type="date" value={serviceOutlet.regulatorApprovalDate} format={APP_LOCAL_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>
                      {serviceOutlet.outletClosureDate ? (
                        <TextFormat type="date" value={serviceOutlet.outletClosureDate} format={APP_LOCAL_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>
                      {serviceOutlet.dateLastModified ? (
                        <TextFormat type="date" value={serviceOutlet.dateLastModified} format={APP_LOCAL_DATE_FORMAT} />
                      ) : null}
                    </td>
                    <td>{serviceOutlet.licenseFeePayable}</td>
                    <td>
                      {serviceOutlet.bankCode ? (
                        <Link to={`/bank-branch-code/${serviceOutlet.bankCode.id}`}>{serviceOutlet.bankCode.branchCode}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {serviceOutlet.outletType ? (
                        <Link to={`/outlet-type/${serviceOutlet.outletType.id}`}>{serviceOutlet.outletType.outletType}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {serviceOutlet.outletStatus ? (
                        <Link to={`/outlet-status/${serviceOutlet.outletStatus.id}`}>{serviceOutlet.outletStatus.branchStatusType}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {serviceOutlet.countyName ? (
                        <Link to={`/county-code/${serviceOutlet.countyName.id}`}>{serviceOutlet.countyName.countyName}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td>
                      {serviceOutlet.subCountyName ? (
                        <Link to={`/county-code/${serviceOutlet.subCountyName.id}`}>{serviceOutlet.subCountyName.subCountyName}</Link>
                      ) : (
                        ''
                      )}
                    </td>
                    <td className="text-end">
                      <div className="btn-group flex-btn-group-container">
                        <Button tag={Link} to={`/service-outlet/${serviceOutlet.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                          <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                        </Button>
                        <Button
                          tag={Link}
                          to={`/service-outlet/${serviceOutlet.id}/edit`}
                          color="primary"
                          size="sm"
                          data-cy="entityEditButton"
                        >
                          <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                        </Button>
                        <Button
                          tag={Link}
                          to={`/service-outlet/${serviceOutlet.id}/delete`}
                          color="danger"
                          size="sm"
                          data-cy="entityDeleteButton"
                        >
                          <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            !loading && <div className="alert alert-warning">No Service Outlets found</div>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default ServiceOutlet;
