import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FxTransactionRateType from './fx-transaction-rate-type';
import FxTransactionRateTypeDetail from './fx-transaction-rate-type-detail';
import FxTransactionRateTypeUpdate from './fx-transaction-rate-type-update';
import FxTransactionRateTypeDeleteDialog from './fx-transaction-rate-type-delete-dialog';

const FxTransactionRateTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FxTransactionRateType />} />
    <Route path="new" element={<FxTransactionRateTypeUpdate />} />
    <Route path=":id">
      <Route index element={<FxTransactionRateTypeDetail />} />
      <Route path="edit" element={<FxTransactionRateTypeUpdate />} />
      <Route path="delete" element={<FxTransactionRateTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FxTransactionRateTypeRoutes;
