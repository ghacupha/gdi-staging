import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import GlMapping from './gl-mapping';
import GlMappingDetail from './gl-mapping-detail';
import GlMappingUpdate from './gl-mapping-update';
import GlMappingDeleteDialog from './gl-mapping-delete-dialog';

const GlMappingRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<GlMapping />} />
    <Route path="new" element={<GlMappingUpdate />} />
    <Route path=":id">
      <Route index element={<GlMappingDetail />} />
      <Route path="edit" element={<GlMappingUpdate />} />
      <Route path="delete" element={<GlMappingDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default GlMappingRoutes;
