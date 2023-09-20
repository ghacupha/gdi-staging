import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import ContractStatus from './contract-status';
import ContractStatusDetail from './contract-status-detail';
import ContractStatusUpdate from './contract-status-update';
import ContractStatusDeleteDialog from './contract-status-delete-dialog';

const ContractStatusRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<ContractStatus />} />
    <Route path="new" element={<ContractStatusUpdate />} />
    <Route path=":id">
      <Route index element={<ContractStatusDetail />} />
      <Route path="edit" element={<ContractStatusUpdate />} />
      <Route path="delete" element={<ContractStatusDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default ContractStatusRoutes;
