import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import SecurityClassificationType from './security-classification-type';
import SecurityClassificationTypeDetail from './security-classification-type-detail';
import SecurityClassificationTypeUpdate from './security-classification-type-update';
import SecurityClassificationTypeDeleteDialog from './security-classification-type-delete-dialog';

const SecurityClassificationTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<SecurityClassificationType />} />
    <Route path="new" element={<SecurityClassificationTypeUpdate />} />
    <Route path=":id">
      <Route index element={<SecurityClassificationTypeDetail />} />
      <Route path="edit" element={<SecurityClassificationTypeUpdate />} />
      <Route path="delete" element={<SecurityClassificationTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default SecurityClassificationTypeRoutes;
