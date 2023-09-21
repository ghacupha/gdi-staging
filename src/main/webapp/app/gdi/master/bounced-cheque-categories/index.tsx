import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import BouncedChequeCategories from './bounced-cheque-categories';
import BouncedChequeCategoriesDetail from './bounced-cheque-categories-detail';
import BouncedChequeCategoriesUpdate from './bounced-cheque-categories-update';
import BouncedChequeCategoriesDeleteDialog from './bounced-cheque-categories-delete-dialog';

const BouncedChequeCategoriesRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<BouncedChequeCategories />} />
    <Route path="new" element={<BouncedChequeCategoriesUpdate />} />
    <Route path=":id">
      <Route index element={<BouncedChequeCategoriesDetail />} />
      <Route path="edit" element={<BouncedChequeCategoriesUpdate />} />
      <Route path="delete" element={<BouncedChequeCategoriesDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default BouncedChequeCategoriesRoutes;
