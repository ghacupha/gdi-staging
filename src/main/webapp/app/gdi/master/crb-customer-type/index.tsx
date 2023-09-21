import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbCustomerType from './crb-customer-type';
import CrbCustomerTypeDetail from './crb-customer-type-detail';
import CrbCustomerTypeUpdate from './crb-customer-type-update';
import CrbCustomerTypeDeleteDialog from './crb-customer-type-delete-dialog';

const CrbCustomerTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbCustomerType />} />
    <Route path="new" element={<CrbCustomerTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CrbCustomerTypeDetail />} />
      <Route path="edit" element={<CrbCustomerTypeUpdate />} />
      <Route path="delete" element={<CrbCustomerTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbCustomerTypeRoutes;
