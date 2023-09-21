import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CounterpartyType from './counterparty-type';
import CounterpartyTypeDetail from './counterparty-type-detail';
import CounterpartyTypeUpdate from './counterparty-type-update';
import CounterpartyTypeDeleteDialog from './counterparty-type-delete-dialog';

const CounterpartyTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CounterpartyType />} />
    <Route path="new" element={<CounterpartyTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CounterpartyTypeDetail />} />
      <Route path="edit" element={<CounterpartyTypeUpdate />} />
      <Route path="delete" element={<CounterpartyTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CounterpartyTypeRoutes;
