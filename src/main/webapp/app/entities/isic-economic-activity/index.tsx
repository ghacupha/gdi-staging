import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import IsicEconomicActivity from './isic-economic-activity';
import IsicEconomicActivityDetail from './isic-economic-activity-detail';
import IsicEconomicActivityUpdate from './isic-economic-activity-update';
import IsicEconomicActivityDeleteDialog from './isic-economic-activity-delete-dialog';

const IsicEconomicActivityRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<IsicEconomicActivity />} />
    <Route path="new" element={<IsicEconomicActivityUpdate />} />
    <Route path=":id">
      <Route index element={<IsicEconomicActivityDetail />} />
      <Route path="edit" element={<IsicEconomicActivityUpdate />} />
      <Route path="delete" element={<IsicEconomicActivityDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default IsicEconomicActivityRoutes;
