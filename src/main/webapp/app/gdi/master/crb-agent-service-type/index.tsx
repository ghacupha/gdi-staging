import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import CrbAgentServiceType from './crb-agent-service-type';
import CrbAgentServiceTypeDetail from './crb-agent-service-type-detail';
import CrbAgentServiceTypeUpdate from './crb-agent-service-type-update';
import CrbAgentServiceTypeDeleteDialog from './crb-agent-service-type-delete-dialog';

const CrbAgentServiceTypeRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<CrbAgentServiceType />} />
    <Route path="new" element={<CrbAgentServiceTypeUpdate />} />
    <Route path=":id">
      <Route index element={<CrbAgentServiceTypeDetail />} />
      <Route path="edit" element={<CrbAgentServiceTypeUpdate />} />
      <Route path="delete" element={<CrbAgentServiceTypeDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default CrbAgentServiceTypeRoutes;
