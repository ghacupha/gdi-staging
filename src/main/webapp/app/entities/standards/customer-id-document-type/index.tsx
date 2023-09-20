import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CustomerIDDocumentType from './customer-id-document-type';
import CustomerIDDocumentTypeDetail from './customer-id-document-type-detail';
import CustomerIDDocumentTypeUpdate from './customer-id-document-type-update';
import CustomerIDDocumentTypeDeleteDialog from './customer-id-document-type-delete-dialog';

const CustomerIDDocumentTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CustomerIDDocumentType />} />
    <Route path="new" element={<CustomerIDDocumentTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CustomerIDDocumentTypeDetail />} />
      <Route path="edit" element={<CustomerIDDocumentTypeUpdate />} />
      <Route path="delete" element={<CustomerIDDocumentTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CustomerIDDocumentTypeRoutes;
