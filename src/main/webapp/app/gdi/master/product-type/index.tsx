import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ProductType from './product-type';
import ProductTypeDetail from './product-type-detail';
import ProductTypeUpdate from './product-type-update';
import ProductTypeDeleteDialog from './product-type-delete-dialog';

const ProductTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ProductType />} />
    <Route path="new" element={<ProductTypeUpdate />} />
    <Route path=":id">
      <Route index element={<ProductTypeDetail />} />
      <Route path="edit" element={<ProductTypeUpdate />} />
      <Route path="delete" element={<ProductTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ProductTypeRoutes;
