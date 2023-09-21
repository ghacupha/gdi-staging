import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CollateralType from './collateral-type';
import CollateralTypeDetail from './collateral-type-detail';
import CollateralTypeUpdate from './collateral-type-update';
import CollateralTypeDeleteDialog from './collateral-type-delete-dialog';

const CollateralTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CollateralType />} />
    <Route path="new" element={<CollateralTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CollateralTypeDetail />} />
      <Route path="edit" element={<CollateralTypeUpdate />} />
      <Route path="delete" element={<CollateralTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CollateralTypeRoutes;
