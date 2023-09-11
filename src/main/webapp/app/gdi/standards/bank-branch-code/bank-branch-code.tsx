import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Input, InputGroup, FormGroup, Form, Row, Col, Table } from 'reactstrap';
import { Translate, translate, getPaginationState } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from 'app/shared/util/pagination.constants';
import { overridePaginationStateWithQueryParams } from 'app/shared/util/entity-utils';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { searchEntities, getEntities, reset } from './bank-branch-code.reducer';

export const BankBranchCode = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();

  const [search, setSearch] = useState('');
  const [paginationState, setPaginationState] = useState(
    overridePaginationStateWithQueryParams(getPaginationState(location, ITEMS_PER_PAGE, 'id'), location.search)
  );
  const [sorting, setSorting] = useState(false);

  const bankBranchCodeList = useAppSelector(state => state.bankBranchCode.entities);
  const loading = useAppSelector(state => state.bankBranchCode.loading);
  const links = useAppSelector(state => state.bankBranchCode.links);
  const updateSuccess = useAppSelector(state => state.bankBranchCode.updateSuccess);

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

  const getSortIconByFieldName = (fieldName: string) => {
    const sortFieldName = paginationState.sort;
    const order = paginationState.order;
    if (sortFieldName !== fieldName) {
      return faSort;
    } else {
      return order === ASC ? faSortUp : faSortDown;
    }
  };

  return (
    <div>
      <h2 id="bank-branch-code-heading" data-cy="BankBranchCodeHeading">
        <Translate contentKey="gdiStagingApp.bankBranchCode.home.title">Bank Branch Codes</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="gdiStagingApp.bankBranchCode.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/bank-branch-code/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="gdiStagingApp.bankBranchCode.home.createLabel">Create new Bank Branch Code</Translate>
          </Link>
        </div>
      </h2>
      <Row>
        <Col sm="12">
          <Form onSubmit={startSearching}>
            <FormGroup>
              <InputGroup>
                <Input
                  type="text"
                  name="search"
                  defaultValue={search}
                  onChange={handleSearch}
                  placeholder={translate('gdiStagingApp.bankBranchCode.home.search')}
                />
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
          dataLength={bankBranchCodeList ? bankBranchCodeList.length : 0}
          next={handleLoadMore}
          hasMore={paginationState.activePage - 1 < links.next}
          loader={<div className="loader">Loading ...</div>}
        >
          {bankBranchCodeList && bankBranchCodeList.length > 0 ? (
            <Table responsive>
              <thead>
                <tr>
                  <th className="hand" onClick={sort('id')}>
                    <Translate contentKey="gdiStagingApp.bankBranchCode.id">ID</Translate>{' '}
                    <FontAwesomeIcon icon={getSortIconByFieldName('id')} />
                  </th>
                  <th className="hand" onClick={sort('bankCode')}>
                    <Translate contentKey="gdiStagingApp.bankBranchCode.bankCode">Bank Code</Translate>{' '}
                    <FontAwesomeIcon icon={getSortIconByFieldName('bankCode')} />
                  </th>
                  <th className="hand" onClick={sort('bankName')}>
                    <Translate contentKey="gdiStagingApp.bankBranchCode.bankName">Bank Name</Translate>{' '}
                    <FontAwesomeIcon icon={getSortIconByFieldName('bankName')} />
                  </th>
                  <th className="hand" onClick={sort('branchCode')}>
                    <Translate contentKey="gdiStagingApp.bankBranchCode.branchCode">Branch Code</Translate>{' '}
                    <FontAwesomeIcon icon={getSortIconByFieldName('branchCode')} />
                  </th>
                  <th className="hand" onClick={sort('branchName')}>
                    <Translate contentKey="gdiStagingApp.bankBranchCode.branchName">Branch Name</Translate>{' '}
                    <FontAwesomeIcon icon={getSortIconByFieldName('branchName')} />
                  </th>
                  <th className="hand" onClick={sort('notes')}>
                    <Translate contentKey="gdiStagingApp.bankBranchCode.notes">Notes</Translate>{' '}
                    <FontAwesomeIcon icon={getSortIconByFieldName('notes')} />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {bankBranchCodeList.map((bankBranchCode, i) => (
                  <tr key={`entity-${i}`} data-cy="entityTable">
                    <td>
                      <Button tag={Link} to={`/bank-branch-code/${bankBranchCode.id}`} color="link" size="sm">
                        {bankBranchCode.id}
                      </Button>
                    </td>
                    <td>{bankBranchCode.bankCode}</td>
                    <td>{bankBranchCode.bankName}</td>
                    <td>{bankBranchCode.branchCode}</td>
                    <td>{bankBranchCode.branchName}</td>
                    <td>{bankBranchCode.notes}</td>
                    <td className="text-end">
                      <div className="btn-group flex-btn-group-container">
                        <Button
                          tag={Link}
                          to={`/bank-branch-code/${bankBranchCode.id}`}
                          color="info"
                          size="sm"
                          data-cy="entityDetailsButton"
                        >
                          <FontAwesomeIcon icon="eye" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.view">View</Translate>
                          </span>
                        </Button>
                        <Button
                          tag={Link}
                          to={`/bank-branch-code/${bankBranchCode.id}/edit`}
                          color="primary"
                          size="sm"
                          data-cy="entityEditButton"
                        >
                          <FontAwesomeIcon icon="pencil-alt" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.edit">Edit</Translate>
                          </span>
                        </Button>
                        <Button
                          tag={Link}
                          to={`/bank-branch-code/${bankBranchCode.id}/delete`}
                          color="danger"
                          size="sm"
                          data-cy="entityDeleteButton"
                        >
                          <FontAwesomeIcon icon="trash" />{' '}
                          <span className="d-none d-md-inline">
                            <Translate contentKey="entity.action.delete">Delete</Translate>
                          </span>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            !loading && (
              <div className="alert alert-warning">
                <Translate contentKey="gdiStagingApp.bankBranchCode.home.notFound">No Bank Branch Codes found</Translate>
              </div>
            )
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default BankBranchCode;
