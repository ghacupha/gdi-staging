import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import SettlementCurrency from './settlement-currency';
import SettlementCurrencyDetail from './settlement-currency-detail';
import SettlementCurrencyUpdate from './settlement-currency-update';
import SettlementCurrencyDeleteDialog from './settlement-currency-delete-dialog';

const SettlementCurrencyRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<SettlementCurrency />} />
    <Route path="new" element={<SettlementCurrencyUpdate />} />
    <Route path=":id">
      <Route index element={<SettlementCurrencyDetail />} />
      <Route path="edit" element={<SettlementCurrencyUpdate />} />
      <Route path="delete" element={<SettlementCurrencyDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SettlementCurrencyRoutes;
