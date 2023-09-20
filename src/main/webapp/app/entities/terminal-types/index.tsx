import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import TerminalTypes from './terminal-types';
import TerminalTypesDetail from './terminal-types-detail';
import TerminalTypesUpdate from './terminal-types-update';
import TerminalTypesDeleteDialog from './terminal-types-delete-dialog';

const TerminalTypesRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<TerminalTypes />} />
    <Route path="new" element={<TerminalTypesUpdate />} />
    <Route path=":id">
      <Route index element={<TerminalTypesDetail />} />
      <Route path="edit" element={<TerminalTypesUpdate />} />
      <Route path="delete" element={<TerminalTypesDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default TerminalTypesRoutes;
