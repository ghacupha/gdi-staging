import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import GenderType from './gender-type';
import GenderTypeDetail from './gender-type-detail';
import GenderTypeUpdate from './gender-type-update';
import GenderTypeDeleteDialog from './gender-type-delete-dialog';

const GenderTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<GenderType />} />
    <Route path="new" element={<GenderTypeUpdate />} />
    <Route path=":id">
      <Route index element={<GenderTypeDetail />} />
      <Route path="edit" element={<GenderTypeUpdate />} />
      <Route path="delete" element={<GenderTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default GenderTypeRoutes;
