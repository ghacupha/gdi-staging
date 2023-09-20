import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CreditCardOwnership from './credit-card-ownership';
import CreditCardOwnershipDetail from './credit-card-ownership-detail';
import CreditCardOwnershipUpdate from './credit-card-ownership-update';
import CreditCardOwnershipDeleteDialog from './credit-card-ownership-delete-dialog';

const CreditCardOwnershipRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CreditCardOwnership />} />
    <Route path="new" element={<CreditCardOwnershipUpdate />} />
    <Route path=":id">
      <Route index element={<CreditCardOwnershipDetail />} />
      <Route path="edit" element={<CreditCardOwnershipUpdate />} />
      <Route path="delete" element={<CreditCardOwnershipDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CreditCardOwnershipRoutes;
