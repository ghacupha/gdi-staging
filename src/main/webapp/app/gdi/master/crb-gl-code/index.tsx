import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbGlCode from './crb-gl-code';
import CrbGlCodeDetail from './crb-gl-code-detail';
import CrbGlCodeUpdate from './crb-gl-code-update';
import CrbGlCodeDeleteDialog from './crb-gl-code-delete-dialog';

const CrbGlCodeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbGlCode />} />
    <Route path="new" element={<CrbGlCodeUpdate />} />
    <Route path=":id">
      <Route index element={<CrbGlCodeDetail />} />
      <Route path="edit" element={<CrbGlCodeUpdate />} />
      <Route path="delete" element={<CrbGlCodeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbGlCodeRoutes;
