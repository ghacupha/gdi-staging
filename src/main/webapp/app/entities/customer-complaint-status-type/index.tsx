import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CustomerComplaintStatusType from './customer-complaint-status-type';
import CustomerComplaintStatusTypeDetail from './customer-complaint-status-type-detail';
import CustomerComplaintStatusTypeUpdate from './customer-complaint-status-type-update';
import CustomerComplaintStatusTypeDeleteDialog from './customer-complaint-status-type-delete-dialog';

const CustomerComplaintStatusTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CustomerComplaintStatusType />} />
    <Route path="new" element={<CustomerComplaintStatusTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CustomerComplaintStatusTypeDetail />} />
      <Route path="edit" element={<CustomerComplaintStatusTypeUpdate />} />
      <Route path="delete" element={<CustomerComplaintStatusTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CustomerComplaintStatusTypeRoutes;
