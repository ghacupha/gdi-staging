import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import UniversallyUniqueMapping from './universally-unique-mapping';
import UniversallyUniqueMappingDetail from './universally-unique-mapping-detail';
import UniversallyUniqueMappingUpdate from './universally-unique-mapping-update';
import UniversallyUniqueMappingDeleteDialog from './universally-unique-mapping-delete-dialog';

const UniversallyUniqueMappingRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<UniversallyUniqueMapping />} />
    <Route path="new" element={<UniversallyUniqueMappingUpdate />} />
    <Route path=":id">
      <Route index element={<UniversallyUniqueMappingDetail />} />
      <Route path="edit" element={<UniversallyUniqueMappingUpdate />} />
      <Route path="delete" element={<UniversallyUniqueMappingDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default UniversallyUniqueMappingRoutes;
