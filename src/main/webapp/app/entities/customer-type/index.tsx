import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CustomerType from './customer-type';
import CustomerTypeDetail from './customer-type-detail';
import CustomerTypeUpdate from './customer-type-update';
import CustomerTypeDeleteDialog from './customer-type-delete-dialog';

const CustomerTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CustomerType />} />
    <Route path="new" element={<CustomerTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CustomerTypeDetail />} />
      <Route path="edit" element={<CustomerTypeUpdate />} />
      <Route path="delete" element={<CustomerTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CustomerTypeRoutes;
