import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FxCustomerType from './fx-customer-type';
import FxCustomerTypeDetail from './fx-customer-type-detail';
import FxCustomerTypeUpdate from './fx-customer-type-update';
import FxCustomerTypeDeleteDialog from './fx-customer-type-delete-dialog';

const FxCustomerTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FxCustomerType />} />
    <Route path="new" element={<FxCustomerTypeUpdate />} />
    <Route path=":id">
      <Route index element={<FxCustomerTypeDetail />} />
      <Route path="edit" element={<FxCustomerTypeUpdate />} />
      <Route path="delete" element={<FxCustomerTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FxCustomerTypeRoutes;
