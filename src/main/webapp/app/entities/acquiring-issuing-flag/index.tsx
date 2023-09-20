import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AcquiringIssuingFlag from './acquiring-issuing-flag';
import AcquiringIssuingFlagDetail from './acquiring-issuing-flag-detail';
import AcquiringIssuingFlagUpdate from './acquiring-issuing-flag-update';
import AcquiringIssuingFlagDeleteDialog from './acquiring-issuing-flag-delete-dialog';

const AcquiringIssuingFlagRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<AcquiringIssuingFlag />} />
    <Route path="new" element={<AcquiringIssuingFlagUpdate />} />
    <Route path=":id">
      <Route index element={<AcquiringIssuingFlagDetail />} />
      <Route path="edit" element={<AcquiringIssuingFlagUpdate />} />
      <Route path="delete" element={<AcquiringIssuingFlagDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AcquiringIssuingFlagRoutes;
