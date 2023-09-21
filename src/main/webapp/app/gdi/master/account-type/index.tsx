import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AccountType from './account-type';
import AccountTypeDetail from './account-type-detail';
import AccountTypeUpdate from './account-type-update';
import AccountTypeDeleteDialog from './account-type-delete-dialog';

const AccountTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<AccountType />} />
    <Route path="new" element={<AccountTypeUpdate />} />
    <Route path=":id">
      <Route index element={<AccountTypeDetail />} />
      <Route path="edit" element={<AccountTypeUpdate />} />
      <Route path="delete" element={<AccountTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AccountTypeRoutes;
