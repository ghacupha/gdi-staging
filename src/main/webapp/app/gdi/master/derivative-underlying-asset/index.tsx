import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import DerivativeUnderlyingAsset from './derivative-underlying-asset';
import DerivativeUnderlyingAssetDetail from './derivative-underlying-asset-detail';
import DerivativeUnderlyingAssetUpdate from './derivative-underlying-asset-update';
import DerivativeUnderlyingAssetDeleteDialog from './derivative-underlying-asset-delete-dialog';

const DerivativeUnderlyingAssetRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<DerivativeUnderlyingAsset />} />
    <Route path="new" element={<DerivativeUnderlyingAssetUpdate />} />
    <Route path=":id">
      <Route index element={<DerivativeUnderlyingAssetDetail />} />
      <Route path="edit" element={<DerivativeUnderlyingAssetUpdate />} />
      <Route path="delete" element={<DerivativeUnderlyingAssetDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default DerivativeUnderlyingAssetRoutes;
