import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbProductServiceFeeType from './crb-product-service-fee-type';
import CrbProductServiceFeeTypeDetail from './crb-product-service-fee-type-detail';
import CrbProductServiceFeeTypeUpdate from './crb-product-service-fee-type-update';
import CrbProductServiceFeeTypeDeleteDialog from './crb-product-service-fee-type-delete-dialog';

const CrbProductServiceFeeTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbProductServiceFeeType />} />
    <Route path="new" element={<CrbProductServiceFeeTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CrbProductServiceFeeTypeDetail />} />
      <Route path="edit" element={<CrbProductServiceFeeTypeUpdate />} />
      <Route path="delete" element={<CrbProductServiceFeeTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbProductServiceFeeTypeRoutes;
