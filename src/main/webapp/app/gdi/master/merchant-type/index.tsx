import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import MerchantType from './merchant-type';
import MerchantTypeDetail from './merchant-type-detail';
import MerchantTypeUpdate from './merchant-type-update';
import MerchantTypeDeleteDialog from './merchant-type-delete-dialog';

const MerchantTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<MerchantType />} />
    <Route path="new" element={<MerchantTypeUpdate />} />
    <Route path=":id">
      <Route index element={<MerchantTypeDetail />} />
      <Route path="edit" element={<MerchantTypeUpdate />} />
      <Route path="delete" element={<MerchantTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default MerchantTypeRoutes;
