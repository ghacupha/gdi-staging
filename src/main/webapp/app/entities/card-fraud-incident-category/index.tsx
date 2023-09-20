import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CardFraudIncidentCategory from './card-fraud-incident-category';
import CardFraudIncidentCategoryDetail from './card-fraud-incident-category-detail';
import CardFraudIncidentCategoryUpdate from './card-fraud-incident-category-update';
import CardFraudIncidentCategoryDeleteDialog from './card-fraud-incident-category-delete-dialog';

const CardFraudIncidentCategoryRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CardFraudIncidentCategory />} />
    <Route path="new" element={<CardFraudIncidentCategoryUpdate />} />
    <Route path=":id">
      <Route index element={<CardFraudIncidentCategoryDetail />} />
      <Route path="edit" element={<CardFraudIncidentCategoryUpdate />} />
      <Route path="delete" element={<CardFraudIncidentCategoryDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CardFraudIncidentCategoryRoutes;
