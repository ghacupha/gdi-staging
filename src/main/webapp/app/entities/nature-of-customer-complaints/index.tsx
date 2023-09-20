import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import NatureOfCustomerComplaints from './nature-of-customer-complaints';
import NatureOfCustomerComplaintsDetail from './nature-of-customer-complaints-detail';
import NatureOfCustomerComplaintsUpdate from './nature-of-customer-complaints-update';
import NatureOfCustomerComplaintsDeleteDialog from './nature-of-customer-complaints-delete-dialog';

const NatureOfCustomerComplaintsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<NatureOfCustomerComplaints />} />
    <Route path="new" element={<NatureOfCustomerComplaintsUpdate />} />
    <Route path=":id">
      <Route index element={<NatureOfCustomerComplaintsDetail />} />
      <Route path="edit" element={<NatureOfCustomerComplaintsUpdate />} />
      <Route path="delete" element={<NatureOfCustomerComplaintsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default NatureOfCustomerComplaintsRoutes;
