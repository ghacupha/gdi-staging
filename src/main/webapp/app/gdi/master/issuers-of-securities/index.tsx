import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import IssuersOfSecurities from './issuers-of-securities';
import IssuersOfSecuritiesDetail from './issuers-of-securities-detail';
import IssuersOfSecuritiesUpdate from './issuers-of-securities-update';
import IssuersOfSecuritiesDeleteDialog from './issuers-of-securities-delete-dialog';

const IssuersOfSecuritiesRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<IssuersOfSecurities />} />
    <Route path="new" element={<IssuersOfSecuritiesUpdate />} />
    <Route path=":id">
      <Route index element={<IssuersOfSecuritiesDetail />} />
      <Route path="edit" element={<IssuersOfSecuritiesUpdate />} />
      <Route path="delete" element={<IssuersOfSecuritiesDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default IssuersOfSecuritiesRoutes;
