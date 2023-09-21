import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CurrencyAuthenticityFlag from './currency-authenticity-flag';
import CurrencyAuthenticityFlagDetail from './currency-authenticity-flag-detail';
import CurrencyAuthenticityFlagUpdate from './currency-authenticity-flag-update';
import CurrencyAuthenticityFlagDeleteDialog from './currency-authenticity-flag-delete-dialog';

const CurrencyAuthenticityFlagRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CurrencyAuthenticityFlag />} />
    <Route path="new" element={<CurrencyAuthenticityFlagUpdate />} />
    <Route path=":id">
      <Route index element={<CurrencyAuthenticityFlagDetail />} />
      <Route path="edit" element={<CurrencyAuthenticityFlagUpdate />} />
      <Route path="delete" element={<CurrencyAuthenticityFlagDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CurrencyAuthenticityFlagRoutes;
