import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import TerminalFunctions from './terminal-functions';
import TerminalFunctionsDetail from './terminal-functions-detail';
import TerminalFunctionsUpdate from './terminal-functions-update';
import TerminalFunctionsDeleteDialog from './terminal-functions-delete-dialog';

const TerminalFunctionsRoutes = () => (
  <ErrorBoundaryRoutes>
    <Route index element={<TerminalFunctions />} />
    <Route path="new" element={<TerminalFunctionsUpdate />} />
    <Route path=":id">
      <Route index element={<TerminalFunctionsDetail />} />
      <Route path="edit" element={<TerminalFunctionsUpdate />} />
      <Route path="delete" element={<TerminalFunctionsDeleteDialog />} />
    </Route>
  </ErrorBoundaryRoutes>
);

export default TerminalFunctionsRoutes;
