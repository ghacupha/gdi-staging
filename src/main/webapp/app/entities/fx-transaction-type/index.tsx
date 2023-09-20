import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FxTransactionType from './fx-transaction-type';
import FxTransactionTypeDetail from './fx-transaction-type-detail';
import FxTransactionTypeUpdate from './fx-transaction-type-update';
import FxTransactionTypeDeleteDialog from './fx-transaction-type-delete-dialog';

const FxTransactionTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FxTransactionType />} />
    <Route path="new" element={<FxTransactionTypeUpdate />} />
    <Route path=":id">
      <Route index element={<FxTransactionTypeDetail />} />
      <Route path="edit" element={<FxTransactionTypeUpdate />} />
      <Route path="delete" element={<FxTransactionTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FxTransactionTypeRoutes;
