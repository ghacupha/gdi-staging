import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CurrencyServiceabilityFlag from './currency-serviceability-flag';
import CurrencyServiceabilityFlagDetail from './currency-serviceability-flag-detail';
import CurrencyServiceabilityFlagUpdate from './currency-serviceability-flag-update';
import CurrencyServiceabilityFlagDeleteDialog from './currency-serviceability-flag-delete-dialog';

const CurrencyServiceabilityFlagRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CurrencyServiceabilityFlag />} />
    <Route path="new" element={<CurrencyServiceabilityFlagUpdate />} />
    <Route path=":id">
      <Route index element={<CurrencyServiceabilityFlagDetail />} />
      <Route path="edit" element={<CurrencyServiceabilityFlagUpdate />} />
      <Route path="delete" element={<CurrencyServiceabilityFlagDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CurrencyServiceabilityFlagRoutes;
