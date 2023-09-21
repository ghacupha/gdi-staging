import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ReasonsForBouncedCheque from './reasons-for-bounced-cheque';
import ReasonsForBouncedChequeDetail from './reasons-for-bounced-cheque-detail';
import ReasonsForBouncedChequeUpdate from './reasons-for-bounced-cheque-update';
import ReasonsForBouncedChequeDeleteDialog from './reasons-for-bounced-cheque-delete-dialog';

const ReasonsForBouncedChequeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ReasonsForBouncedCheque />} />
    <Route path="new" element={<ReasonsForBouncedChequeUpdate />} />
    <Route path=":id">
      <Route index element={<ReasonsForBouncedChequeDetail />} />
      <Route path="edit" element={<ReasonsForBouncedChequeUpdate />} />
      <Route path="delete" element={<ReasonsForBouncedChequeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ReasonsForBouncedChequeRoutes;
