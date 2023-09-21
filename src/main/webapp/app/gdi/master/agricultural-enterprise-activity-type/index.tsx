import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import AgriculturalEnterpriseActivityType from './agricultural-enterprise-activity-type';
import AgriculturalEnterpriseActivityTypeDetail from './agricultural-enterprise-activity-type-detail';
import AgriculturalEnterpriseActivityTypeUpdate from './agricultural-enterprise-activity-type-update';
import AgriculturalEnterpriseActivityTypeDeleteDialog from './agricultural-enterprise-activity-type-delete-dialog';

const AgriculturalEnterpriseActivityTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<AgriculturalEnterpriseActivityType />} />
    <Route path="new" element={<AgriculturalEnterpriseActivityTypeUpdate />} />
    <Route path=":id">
      <Route index element={<AgriculturalEnterpriseActivityTypeDetail />} />
      <Route path="edit" element={<AgriculturalEnterpriseActivityTypeUpdate />} />
      <Route path="delete" element={<AgriculturalEnterpriseActivityTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default AgriculturalEnterpriseActivityTypeRoutes;
