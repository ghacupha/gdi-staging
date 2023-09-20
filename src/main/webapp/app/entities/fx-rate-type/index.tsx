import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FxRateType from './fx-rate-type';
import FxRateTypeDetail from './fx-rate-type-detail';
import FxRateTypeUpdate from './fx-rate-type-update';
import FxRateTypeDeleteDialog from './fx-rate-type-delete-dialog';

const FxRateTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FxRateType />} />
    <Route path="new" element={<FxRateTypeUpdate />} />
    <Route path=":id">
      <Route index element={<FxRateTypeDetail />} />
      <Route path="edit" element={<FxRateTypeUpdate />} />
      <Route path="delete" element={<FxRateTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FxRateTypeRoutes;
