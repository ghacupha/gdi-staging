import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import FraudCategoryFlag from './fraud-category-flag';
import FraudCategoryFlagDetail from './fraud-category-flag-detail';
import FraudCategoryFlagUpdate from './fraud-category-flag-update';
import FraudCategoryFlagDeleteDialog from './fraud-category-flag-delete-dialog';

const FraudCategoryFlagRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<FraudCategoryFlag />} />
    <Route path="new" element={<FraudCategoryFlagUpdate />} />
    <Route path=":id">
      <Route index element={<FraudCategoryFlagDetail />} />
      <Route path="edit" element={<FraudCategoryFlagUpdate />} />
      <Route path="delete" element={<FraudCategoryFlagDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default FraudCategoryFlagRoutes;
