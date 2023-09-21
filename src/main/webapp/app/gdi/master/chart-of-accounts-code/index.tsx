import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ChartOfAccountsCode from './chart-of-accounts-code';
import ChartOfAccountsCodeDetail from './chart-of-accounts-code-detail';
import ChartOfAccountsCodeUpdate from './chart-of-accounts-code-update';
import ChartOfAccountsCodeDeleteDialog from './chart-of-accounts-code-delete-dialog';

const ChartOfAccountsCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ChartOfAccountsCode />} />
    <Route path="new" element={<ChartOfAccountsCodeUpdate />} />
    <Route path=":id">
      <Route index element={<ChartOfAccountsCodeDetail />} />
      <Route path="edit" element={<ChartOfAccountsCodeUpdate />} />
      <Route path="delete" element={<ChartOfAccountsCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ChartOfAccountsCodeRoutes;
