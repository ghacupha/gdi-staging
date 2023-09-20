import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ShareholderType from './shareholder-type';
import ShareholderTypeDetail from './shareholder-type-detail';
import ShareholderTypeUpdate from './shareholder-type-update';
import ShareholderTypeDeleteDialog from './shareholder-type-delete-dialog';

const ShareholderTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ShareholderType />} />
    <Route path="new" element={<ShareholderTypeUpdate />} />
    <Route path=":id">
      <Route index element={<ShareholderTypeDetail />} />
      <Route path="edit" element={<ShareholderTypeUpdate />} />
      <Route path="delete" element={<ShareholderTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ShareholderTypeRoutes;
