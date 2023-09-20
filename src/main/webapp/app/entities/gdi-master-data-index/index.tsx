import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import GdiMasterDataIndex from './gdi-master-data-index';
import GdiMasterDataIndexDetail from './gdi-master-data-index-detail';
import GdiMasterDataIndexUpdate from './gdi-master-data-index-update';
import GdiMasterDataIndexDeleteDialog from './gdi-master-data-index-delete-dialog';

const GdiMasterDataIndexRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<GdiMasterDataIndex />} />
    <Route path="new" element={<GdiMasterDataIndexUpdate />} />
    <Route path=":id">
      <Route index element={<GdiMasterDataIndexDetail />} />
      <Route path="edit" element={<GdiMasterDataIndexUpdate />} />
      <Route path="delete" element={<GdiMasterDataIndexDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default GdiMasterDataIndexRoutes;
