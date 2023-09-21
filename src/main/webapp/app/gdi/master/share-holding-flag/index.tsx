import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ShareHoldingFlag from './share-holding-flag';
import ShareHoldingFlagDetail from './share-holding-flag-detail';
import ShareHoldingFlagUpdate from './share-holding-flag-update';
import ShareHoldingFlagDeleteDialog from './share-holding-flag-delete-dialog';

const ShareHoldingFlagRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ShareHoldingFlag />} />
    <Route path="new" element={<ShareHoldingFlagUpdate />} />
    <Route path=":id">
      <Route index element={<ShareHoldingFlagDetail />} />
      <Route path="edit" element={<ShareHoldingFlagUpdate />} />
      <Route path="delete" element={<ShareHoldingFlagDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ShareHoldingFlagRoutes;
