import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AccountOwnershipType from './account-ownership-type';
import AccountOwnershipTypeDetail from './account-ownership-type-detail';

const AccountOwnershipTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<AccountOwnershipType />} />
    <Route path=":id">
      <Route index element={<AccountOwnershipTypeDetail />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AccountOwnershipTypeRoutes;
