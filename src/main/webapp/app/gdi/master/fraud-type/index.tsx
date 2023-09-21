import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FraudType from './fraud-type';
import FraudTypeDetail from './fraud-type-detail';
import FraudTypeUpdate from './fraud-type-update';
import FraudTypeDeleteDialog from './fraud-type-delete-dialog';

const FraudTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FraudType />} />
    <Route path="new" element={<FraudTypeUpdate />} />
    <Route path=":id">
      <Route index element={<FraudTypeDetail />} />
      <Route path="edit" element={<FraudTypeUpdate />} />
      <Route path="delete" element={<FraudTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FraudTypeRoutes;
